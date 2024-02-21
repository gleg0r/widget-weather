import React from 'react';
import s from './App.scss';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherCityAPI } from './store/slices/weatherSlice';

function App() {
  const [city, setCity] = useState(null);
  const weatherData = useSelector(state => state.getWeather.weatherData);
  const dispatch = useDispatch();
  const input = useRef(null);

  useEffect(() => {
    dispatch(getWeatherCityAPI(city));
  }, [dispatch, city])

  function handleClick() {
    setCity(input.current.value);
  }

  return (
    <div className={s.app}>
      <div className={s.app__city}>
        <input className={s.app__input} ref={input} type='text' placeholder='Enter the city' />
        <button className={s.app__btn} onClick={() => handleClick()}>Send</button>
      </div>
    </div>
  );
}

export default App;
