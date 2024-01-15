import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    tomatoPlanTrigger: false,
    homeTrigger: false
}

const animationSlice = createSlice({
    name: "animationTrigger",
    initialState: initialState,
    reducers: {
        tomatoPlanMenuAnimationTriggerController: (state, actions) => {
            state.tomatoPlanTrigger = actions.payload
        },
        homeMenuAnimationTriggerController: (state, actions) => {
            state.homeTrigger = actions.payload
        },

    }
})

export const { tomatoPlanMenuAnimationTriggerController, homeMenuAnimationTriggerController } = animationSlice.actions;
export default animationSlice.reducer;