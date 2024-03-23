import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ComponentsPropsType } from "../../components/QuestionComponents";
import { getNextSelectedId } from './utils'
import { cloneDeep } from "lodash";

// 每个组件需要的固定属性
export interface ComponentsInfoType {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  props: ComponentsPropsType
}

export interface ComponentsStateType {
  // 用于记录当前选中的组件
  selectedId: string
  // 组件列表
  componentList: ComponentsInfoType[]
  // 复制
  copiedComponent: ComponentsInfoType | null
}

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  copiedComponent: null
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => {
      return action.payload
    },
    // 修改selectedId
    changeSeletedId(state: ComponentsStateType, action: PayloadAction<string>) {
      state.selectedId = action.payload
    },
    addComponent(state: ComponentsStateType, action: PayloadAction<ComponentsInfoType>) {
      const newComp = action.payload
      const { selectedId, componentList } = state
      const i = componentList.findIndex(item => item.fe_id === selectedId)
      // 未找到selectedId, 未选中状态
      if (i < 0) {
        state.componentList.push(newComp)
      } else {
        // 找到selectedId 插入到后面
        state.componentList.splice(i + 1, 0, newComp)
      }
    },
    // 修改组件props
    changeComponentProps(state: ComponentsStateType, action: PayloadAction<{ fe_id: string, newProps: ComponentsPropsType }>) {
      const { fe_id, newProps } = action.payload
      // 找到当前需要修改的组件
      const i = state.componentList.findIndex(item => item.fe_id === fe_id)
      state.componentList[i].props = newProps
    },
    // 删除选中的组件
    deleteSelectedComponent(state: ComponentsStateType) {
      const { selectedId, componentList } = state
      // 计算删除后的新的selectedId
      const newSelectedId = getNextSelectedId(componentList, selectedId)
      state.selectedId = newSelectedId

      const i = componentList.findIndex(item => item.fe_id === selectedId)
      componentList.splice(i, 1)
    },
    // 切换组件显示/隐藏
    toggleComponentHidden(state: ComponentsStateType, action: PayloadAction<{ fe_id: string, isHidden: boolean }>) {
      const { fe_id, isHidden } = action.payload
      let newSelectedId = ''
      // 如果是显示
      if (isHidden) {
        // 计算隐藏后的新的selectedId
        newSelectedId = getNextSelectedId(state.componentList, state.selectedId)
      } else {
        newSelectedId = fe_id
      }
      state.selectedId = newSelectedId
      const i = state.componentList.findIndex(item => item.fe_id === fe_id)
      state.componentList[i].isHidden = !state.componentList[i].isHidden
    },
    // 锁定/解锁
    toggleComponentLock(state: ComponentsStateType, action: PayloadAction<{ fe_id: string }>) {
      const { fe_id } = action.payload
      const i = state.componentList.findIndex(item => item.fe_id === fe_id)
      state.componentList[i].isLocked = !state.componentList[i].isLocked
    },
    // 复制
    copyComponent(state: ComponentsStateType) {
      const { selectedId, componentList } = state
      const copyComponent = componentList.find(item => item.fe_id === selectedId)
      if (copyComponent == null) return
      state.copiedComponent = cloneDeep(copyComponent)
    },
    // 粘贴
    pasteComponent(state: ComponentsStateType) {
      const { copiedComponent, selectedId, componentList } = state
      if (copiedComponent == null) return
      // 修改粘贴组件的fe_id
      copiedComponent.fe_id = Date.now().toString()
      // 插入组件 根据是否有已选中组件
      const i = componentList.findIndex(item => item.fe_id === selectedId)
      // 未找到selectedId, 未选中状态
      if (i < 0) {
        state.componentList.push(copiedComponent)
      } else {
        // 找到selectedId 插入到后面
        state.componentList.splice(i + 1, 0, copiedComponent)
      }
    }
  }
})

export const { resetComponents, changeSeletedId, addComponent, changeComponentProps, deleteSelectedComponent, toggleComponentHidden, toggleComponentLock, copyComponent, pasteComponent } = componentsSlice.actions
export default componentsSlice.reducer