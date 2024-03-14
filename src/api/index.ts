import { http } from "../service";

export interface Result {
  code: number
  data: Data
}

interface Data {
  total: number
  items: QuestionItem[]
  id?: string
}
export interface QuestionItem {
  _id: number
  title: string
  isPubliced: boolean
  isStar: boolean
  createTime: string
  answerCount: number
}
export const getHistoryList = (): Promise<Result> => {
  return http.request({
    url: '/question/list',
    method: 'post',
  })
}

export const createQuestion = (): Promise<Result> => {
  return http.request({
    url: '/question/create',
    method: 'post',
  })
}

export const findById = (id: string): Promise<Result> => {
  return http.request({
    url: `/question/detail/${id}`,
    method: 'get',
  })
}