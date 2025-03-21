import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Teresina"); // Cidade padrão
  const [data, setData] = useState(null); 

  const fetchData = async () => {
    if (!city) return; // Evita requisições sem cidade

    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0f260882de7f1984410f186f4f6ccdb8&units=metric`;

    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]); // Atualiza os dados sempre que 'city' mudar

  return (
    <WeatherContext.Provider value={{ data, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
