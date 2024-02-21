import { configureStore } from "@reduxjs/toolkit";
import weatherSliceReducer from "./slices/weatherSlice";

export default configureStore({
    reducer: {
        getWeather: weatherSliceReducer,
    }
})