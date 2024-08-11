import { createSlice, current } from "@reduxjs/toolkit";

type statsSliceState = {
    wpm: number,
    mistakes: number
}

const initialState: statsSliceState = {
    wpm: 0,
    mistakes: 0
}

export const statsSlice = createSlice({
    name: 'statsSlice',
    initialState,
    reducers: {
        setMistakes: (state) => {
            state.mistakes++
        },
        resetMistakes: (state) => {
            state.mistakes = 0
        },
        setWpm: (state, action) => {
            state.wpm = action.payload
            console.log(current(state))
        }
    }
})

const { actions, reducer } = statsSlice

export const { setMistakes, resetMistakes, setWpm } = actions

export default reducer