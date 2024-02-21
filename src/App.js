import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherAPI } from './store/slices/weatherSlice';

function App() {
  const weatherData = useSelector(state => state.getWeather.weatherData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherAPI());
  }, [dispatch])

  console.log(weatherData);

  return (
    <div className="App">
    </div>
  );
}

export default App;
