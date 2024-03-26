import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserState } from './userReducer'
import componentsReducer, { ComponentsStateType } from './componentsReducer'
import pageInfoReducer, { PageInfoState } from './pageInfoReducer'

export type StateType = {
  user: UserState
  components: ComponentsStateType
  pageInfo: PageInfoState
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    components: componentsReducer,
    pageInfo: pageInfoReducer
  }
})