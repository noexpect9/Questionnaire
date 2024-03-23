import { ComponentsInfoType } from ".";

/**
 * 获取下一个选中的id
 * @param components 组件列表
 * @param selectedId 选中的id
 * @returns 删除后选择的id
 */
export function getNextSelectedId(components: ComponentsInfoType[], selectedId: string) {
  // 获取当前选中的组件
  const i = components.findIndex(item => item.fe_id === selectedId)
  // 表示组件为空
  if (i < 0) return ''

  // 重新获取selectedId
  let newSelectedId
  const length = components.length
  // 表示组件只有一个
  if (length <= 1) {
    newSelectedId = ''
  } else {
    // 组件长度大于1
    if (i + 1 === length) {
      // 要删除最后一个 选择第一个
      newSelectedId = components[0].fe_id
    } else {
      // 要删除的不是最后一个 选择下一个
      newSelectedId = components[i + 1].fe_id
    }
  }
  return newSelectedId
}