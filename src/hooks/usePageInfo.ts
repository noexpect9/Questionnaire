import { useSelector } from "react-redux"
import { StateType } from "../store"

function usePageInfo() {
  const pageInfo = useSelector((state: StateType) => state.pageInfo)
  return pageInfo
}
export default usePageInfo