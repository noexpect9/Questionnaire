import { useRequest } from "ahooks";
import { getHistoryList } from "../api";
import { useSearchParams } from "react-router-dom";

type StatusType = {
  isStar: boolean
  isDeleted: boolean
}
function useQuestionList(option: Partial<StatusType>) {
  const [searchParams] = useSearchParams()
  const { isStar, isDeleted } = option
  const keyword = searchParams.get('keyword') || ''
  const { data, loading } = useRequest(async () => {
    const data = await getHistoryList({
      keyword,
      isStar,
      isDeleted
    })
    return data
  }, {
    refreshDeps: [searchParams]
  });
  return {
    data,
    loading
  }
}
export default useQuestionList