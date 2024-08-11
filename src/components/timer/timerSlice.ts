import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type timerSliceState = {
    selectedTime: number,
    seconds: number,
    isPlaying: boolean,
    timeSettings: number[]
}

const initialState: timerSliceState = {
    selectedTime: 60,
    seconds: 60,
    isPlaying: false,
    timeSettings: [15, 30, 60, 120]
}

export const timerSlice = createSlice({
    name: 'timerSlice',
    initialState,
    reducers: {
        setTime: (state, action: PayloadAction<number>) => {
            state.selectedTime = action.payload
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload
        },
        restartTimer(state) {
            state.seconds = state.selectedTime
        },
        decreaseSeconds(state) {
            state.seconds = state.seconds - 1
        }
    }
})

const { actions, reducer } = timerSlice

export const { setTime, setIsPlaying, restartTimer, decreaseSeconds } = actions

export default reducer