import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accumulatedTotalTomato: 0,
    todayTotalTomato: 0,
    monthlyTotalHarvestedTomato: [],
    tomatoReportByWeek: [],
    image: "",
    imageUpdatedTime: "",
    harvestLoading: false,
    renewalLoading: false,
}

const tomatoDataSlice = createSlice({
    name: "mobileMenu",
    initialState: initialState,
    reducers: {
        tomatoDataController: (state, actions) => {
            state.accumulatedTotalTomato = actions.payload.accumulatedTotalTomatos;
            state.todayTotalTomato = actions.payload.todayTotalTomatos;
            state.monthlyTotalHarvestedTomato = actions.payload.monthlyTotalharvestedTomatos;
            state.tomatoReportByWeek = actions.payload.tomatoReportByWeek;
            state.image = actions.payload.imageurl;
            state.imageUpdatedTime = actions.payload.lastest_update_time;
            state.harvestLoading = actions.payload.harveststatus;
            state.renewalLoading = actions.payload.renewalstatus;
        },
        tomatoHarvestingController: (state, actions) => {
            state.harvestLoading = actions.payload.harveststatus;
        }
        , tomatoRenewingController: (state, actions) => {
            state.renewalLoading = actions.payload.renewalstatus;
        }


    }
})

export const { tomatoDataController, tomatoHarvestingController, tomatoRenewingController } = tomatoDataSlice.actions;
export default tomatoDataSlice.reducer;