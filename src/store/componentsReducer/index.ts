import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ComponentsPropsType } from "../../components/QuestionComponents";

// 每个组件需要的固定属性
export interface ComponentsInfoType {
  fe_id: string
  type: string
  title: string
  props: ComponentsPropsType
}

export interface ComponentsStateType {
  // 用于记录当前选中的组件
  selectedId: string
  // 组件列表
  componentList: ComponentsInfoType[]
}

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: []
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
    }
  }
})

export const { resetComponents, changeSeletedId, addComponent, changeComponentProps } = componentsSlice.actions
export default componentsSlice.reducer