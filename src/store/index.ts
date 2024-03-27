import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserState } from './userReducer'
import componentsReducer, { ComponentsStateType } from './componentsReducer'
import pageInfoReducer, { PageInfoState } from './pageInfoReducer'
import undoable, { StateWithHistory, excludeAction } from 'redux-undo'

export type StateType = {
  user: UserState
  components: StateWithHistory<ComponentsStateType>
  pageInfo: PageInfoState
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    components: undoable(componentsReducer, {
      limit: 20,
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSeletedId',
        'components/selectPrevComponent',
        'components/selectNextComponent'
      ])
    }),
    pageInfo: pageInfoReducer
  }
})