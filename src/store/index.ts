import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserState } from './userReducer'

export type StateType = {
  user: UserState
}

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})