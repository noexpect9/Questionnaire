import { useParams } from "react-router-dom"
import { findById } from "../api"
import { useRequest } from "ahooks"

function useQuestionDetail() {
  const { id = '' } = useParams()

  const { data, loading, error } = useRequest(findById, { defaultParams: [id] })
  return {
    data, loading, error
  }
}


export default useQuestionDetail