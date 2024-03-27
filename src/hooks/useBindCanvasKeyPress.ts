import { useKeyPress } from "ahooks"
import { useDispatch } from "react-redux"
import { copyComponent, deleteSelectedComponent, pasteComponent, selectNextComponent, selectPrevComponent } from "../store/componentsReducer"

function isActiveElementValid() {
  const activeElement = document.activeElement
  // 说明focus不在input上 可以删除组件
  if (activeElement === document.body) return true
  // 针对dnd-kit
  if (activeElement?.matches('div[role="button"]')) return true
  return false
}

function useBindCanvasKeyPress() {
  const dispatch = useDispatch()

  // 键盘快捷键删除选中的组件
  useKeyPress(['backspace', 'delete'], () => {
    if (!isActiveElementValid()) return
    dispatch(deleteSelectedComponent())
  })
  // 复制
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (!isActiveElementValid()) return
    dispatch(copyComponent())
  })
  // 粘贴
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (!isActiveElementValid()) return
    dispatch(pasteComponent())
  })
  // 选中上一个
  useKeyPress('uparrow', () => {
    if (!isActiveElementValid()) return
    dispatch(selectPrevComponent())
  })
  // 选中下一个
  useKeyPress('downarrow', () => {
    if (!isActiveElementValid()) return
    dispatch(selectNextComponent())
  })
}

export default useBindCanvasKeyPress