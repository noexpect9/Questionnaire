import { useParams } from "react-router-dom"
import { findById } from "../api"
import { useRequest } from "ahooks"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetComponents } from "../store/componentsReducer"
import { resetPageInfo } from "../store/pageInfoReducer"

function useQuestionDetail() {
  const { id = '' } = useParams()
  const dispatch = useDispatch()
  // 请求问卷详情
  const { data, loading, error, run } = useRequest(async (id: string) => {
    if (!id) throw new Error('此问卷缺少id')
    const res = await findById(id)
    return res.data
  }, {
    manual: true
  })

  useEffect(() => {
    if (!data) return
    // 从请求数据中解构出此问卷存储的components
    const { components: componentList = [], title, description = '', jsCode = '', cssCode = '', isPubliced = false } = data as any

    // 获取默认selectedId
    let selectedId
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id
    }

    // 将数据存入redux
    dispatch(resetComponents({ componentList, selectedId, copiedComponent: null }))
    dispatch(resetPageInfo({ title, description, jsCode, cssCode, isPubliced }))
  }, [data, dispatch])

  useEffect(() => {
    run(id)
  }, [id, run])

  return {
    loading, error
  }
}


export default useQuestionDetail