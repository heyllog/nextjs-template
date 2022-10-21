import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import counterReducer from 'features/counter/counter-slice'

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

// eslint-disable-next-line
export const makeStore = () => configureStore({ reducer: { counter: counterReducer } })

const store = makeStore()

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export default store
