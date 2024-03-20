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
    addComponent(state, action: PayloadAction<ComponentsInfoType>) {
      state.componentList.push(action.payload)
    }
  }
})

export const { resetComponents, changeSeletedId, addComponent } = componentsSlice.actions
export default componentsSlice.reducer