import { configureStore } from '@reduxjs/toolkit'
import firstReducer from "./slices/firstSlice"
import animationReducer from './slices/animationSlice';



const store = configureStore({
  reducer: {firstReducer,animationReducer},
})



export default store;