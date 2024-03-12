import { InternalAxiosRequestConfig, AxiosResponse } from "axios"

export interface IResult<T> {
  code: number
  msg: string
  data: T
}

export interface RequestConfig {
  interceptors?: any
  baseURL?: string
  timeout?: number
  [key: string]: any
}

export interface RequestInterceptors<T> {
  requestInterceptors?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (res: AxiosResponse<T>) => AxiosResponse<T>
  responseInterceptorsCatch?: (error: any) => any
}