import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeatherAPI = createAsyncThunk(
    'weather/getWeatherAPI',
    async function() {
        const responce = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=56387bacfda787e0e25897d8d1c58be3');

        const data = await responce.json();

        return data;
    }
)

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherData: [],
        status: null,
    },
    reducers: {
        getState(state) {
            return state.weatherData;
        }
    },
    extraReducers: builder => {
        builder.addCase(getWeatherAPI.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getWeatherAPI.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.weatherData = action.payload;
        })
    }
})

export const { getState } = weatherSlice.actions;

export default weatherSlice.reducer;