import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWeatherCityAPI = createAsyncThunk(
    'weather/getWeatherAPI',
    async function(city) {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=56387bacfda787e0e25897d8d1c58be3`);

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
        builder.addCase(getWeatherCityAPI.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(getWeatherCityAPI.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.weatherData = action.payload;
        })
    }
})

export const { getState } = weatherSlice.actions;

export default weatherSlice.reducer;