import { configureStore } from '@reduxjs/toolkit'
import firstReducer from "./slices/firstSlice"
import animationReducer from './slices/animationSlice';
import tomatoDataReducer from './slices/tomatoDataSlice';


const store = configureStore({
  reducer: {firstReducer,animationReducer,tomatoDataReducer},
})



export default store;