import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface PageInfoState {
  title: string
  description?: string
  jsCode?: string
  cssCode?: string
  isPubliced?: boolean
}

const initPageInfoState: PageInfoState = {
  title: '',
  description: '',
  jsCode: '',
  cssCode: '',
  isPubliced: true
}


const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState: initPageInfoState,
  reducers: {
    resetPageInfo(state: PageInfoState, action: PayloadAction<PageInfoState>) {
      return action.payload
    },
    // 修改页面标题
    changePageTitle(state: PageInfoState, action: PayloadAction<string>) {
      state.title = action.payload
    }
  }
})

export const { resetPageInfo, changePageTitle } = pageInfoSlice.actions
export default pageInfoSlice.reducer