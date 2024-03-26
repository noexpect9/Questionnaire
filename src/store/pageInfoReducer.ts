import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface PageInfoState {
  title: string
  description?: string
  jsCode?: string
  cssCode?: string
}

const initPageInfoState: PageInfoState = {
  title: '',
  description: '',
  jsCode: '',
  cssCode: '',
}


const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState: initPageInfoState,
  reducers: {
    resetPageInfo(state: PageInfoState, action: PayloadAction<PageInfoState>) {
      return action.payload
    }
  }
})

export const { resetPageInfo } = pageInfoSlice.actions
export default pageInfoSlice.reducer