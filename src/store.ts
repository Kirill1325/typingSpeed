import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import statsSlice from "./components/stats/StatsSlice";
import timerSlice from "./components/timer/timerSlice";
import modalSlice from "./components/modal/modalSlice";

const rootReducer = combineReducers({
    statsSlice,
    timerSlice,
    modalSlice
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store