import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserState = {
  username: string
  nickname: string
}
const initUserState: UserState = { username: '', nickname: '' }

const userSlice = createSlice({
  name: 'user',
  initialState: initUserState,
  reducers: {
    loginReducer: (state: UserState, action: PayloadAction<UserState>) => {
      return action.payload
    },
    logoutReducer: () => {
      return initUserState
    }
  }
})

export const { loginReducer, logoutReducer } = userSlice.actions
export default userSlice.reducer