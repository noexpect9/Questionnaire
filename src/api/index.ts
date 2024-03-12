import { http } from "../service";

export const getHistoryList = () => {
  return http.request({
    url: '/question/list',
    method: 'post',
    isShowLoading: true,
  })
}