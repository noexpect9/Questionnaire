import { http } from "../service";
import type { Result } from '../api'

export type User = {
  username: string
  password: string
  nickname: string
}
export const register = (data: Partial<User>): Promise<Result> => {
  return http.request({
    url: '/user/register',
    method: 'post',
    data
  })
}

export const login = (data: Partial<User>): Promise<Result> => {
  return http.request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export const getUserInfo = (): Promise<Result> => {
  return http.request({
    url: '/user/info',
    method: 'get',
  })
}