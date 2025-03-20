import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();
const API_URL = "https://api.openweathermap.org/data/2.5/forecast?q=teresina&appid=0f260882de7f1984410f186f4f6ccdb8&units=metric";

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null); 

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ data, setData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
