import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false, // for mobile menu pop up and down
}

const firstSlice = createSlice({
    name: "mobileMenu",
    initialState: initialState,
    reducers: {
        mobileMenuController: (state) => {
            state.value = !state.value;
        }
    }
})

export const { mobileMenuController } = firstSlice.actions;
export default firstSlice.reducer;