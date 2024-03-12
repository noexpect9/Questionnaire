import { notification } from 'antd';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { HttpStatus } from './httpStatus';
import type { IResult, RequestConfig, RequestInterceptors } from './types';

class HttpRequest {
  // axios 实例
  private instance: AxiosInstance
  // 拦截器对象
  private interceptors?: RequestInterceptors<AxiosResponse>
  // 存储请求配置
  private requestConfig: RequestConfig = {
    isShowMessage: true,
    isShowSuccessMessage: false,
    isShowErrorMessage: true,
    cancelRequest: true,
    isShowLoading: true,
  }

  constructor(config: RequestConfig) {
    this.requestConfig = Object.assign(this.requestConfig, config)
    // axios.create创建axios实例，接收传递进来的配置
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors
    this.setupInterceptors()
  }

  /**
   * 初始化拦截器
   */
  private setupInterceptors() {
    // 给每一个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config: any) => {
        this.requestConfig = Object.assign(this.requestConfig, config)
        // 一般会请求拦截里面加token，用于后端的验证
        const token = localStorage.getItem("token") as string
        if (token) {
          config.headers!.Authorization = `Bearer ${token}`;
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { data, status } = response
        if (status === 200) {
          return data
        }
        if (this.requestConfig.isShowMessage && this.requestConfig.isShowErrorMessage) {
          notification.error({
            message: '温馨提示',
            description: HttpStatus(status),
          })
        }
        return HttpStatus(status)
      },
      (error) => {
        return Promise.reject(error);
      },
    )
    // 针对特定的HttpRequest实例，比如HttpRequest2，添加拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch,
    )
  }

  public request<T = any>(config: RequestConfig): Promise<IResult<T>> {
    if (config?.url) {
      // 外层带https或http开头的url，不需要拼接baseURL,否则就读取实例中 baseUR
      const isHttp = config.url.indexOf('http') !== -1
      config.url = isHttp ? config.url : this.requestConfig.baseURL + config.url
    }
    return new Promise<IResult<T>>((resolve, reject) => {
      // 单个请求设置拦截器
      if (config.interceptors?.requestInterceptors) {
        this.instance.interceptors.request.use(config.interceptors.requestInterceptors)
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res as IResult<T>)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  // GET类型的网络请求
  public get<T = any>(url: string, config?: RequestConfig): Promise<AxiosResponse<IResult<T>>> {
    return this.instance.get(url, config)
  }

  // POST类型的网络请求
  public post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<AxiosResponse<IResult<T>>> {
    return this.instance.post(url, data, config);
  }

  // PUT类型的网络请求
  public put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<AxiosResponse<IResult<T>>> {
    return this.instance.put(url, data, config);
  }

  // DELETE类型的网络请求
  public delete<T = any>(url: string, config?: RequestConfig): Promise<AxiosResponse<IResult<T>>> {
    return this.instance.delete(url, config);
  }
}

export default HttpRequest;
