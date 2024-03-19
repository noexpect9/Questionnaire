import { useParams } from "react-router-dom"
import { findById } from "../api"
import { useRequest } from "ahooks"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetComponents } from "../store/componentsReducer"

function useQuestionDetail() {
  const { id = '' } = useParams()
  const dispatch = useDispatch()

  const { data, loading, error, run } = useRequest(async (id: string) => {
    if (!id) throw new Error('此问卷缺少id')
    const res = await findById(id)
    return res.data
  }, {
    manual: true
  })

  useEffect(() => {
    if (!data) return
    const { components: componentList = [] } = data as any
    // 将数据存入redux
    dispatch(resetComponents({ componentList }))
  }, [data, dispatch])

  useEffect(() => {
    run(id)
  }, [id, run])

  return {
    loading, error
  }
}


export default useQuestionDetail