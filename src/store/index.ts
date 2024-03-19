import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserState } from './userReducer'
import componentsReducer, { ComponentsStateType } from './componentsReducer'

export type StateType = {
  user: UserState
  components: ComponentsStateType
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    components: componentsReducer
  }
})