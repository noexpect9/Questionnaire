import { http } from "../service";

export interface Result {
  code: number
  data: Data
}

interface Data {
  total: number
  data: QuestionItem[]
  id?: string
  token?: string
  username?: string
  nickname?: string
}
export interface QuestionItem {
  _id: number
  title: string
  isPubliced: boolean
  isStar: boolean
  createTime: string
  answerCount: number
}

type SearchOption = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
}
export const getHistoryList = (opt: Partial<SearchOption>): Promise<Result> => {
  return http.request({
    url: '/question/list',
    method: 'post',
    data: opt
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