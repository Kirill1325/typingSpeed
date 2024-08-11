import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type modalSliceState = {
    isModalActive: boolean
}

const initialState: modalSliceState = {
    isModalActive: false
}

export const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<boolean>) => {
            state.isModalActive = action.payload
        }
    }
})

const { actions, reducer } = modalSlice

export const { toggleModal } = actions

export default reducer