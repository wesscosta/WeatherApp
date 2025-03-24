import React, { useState, useEffect, useContext, createContext, useCallback } from "react";
import axios from "axios";

const WeatherContext = createContext();

// Função para buscar os dados da API
const getWeatherData = async (city) => {
  if (!city) return null; // Evita requisições desnecessárias

  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0f260882de7f1984410f186f4f6ccdb8&units=metric`;

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar dados para "${city}":`, error);
    return null;
  }
};

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Teresina"); // Cidade padrão
  const [data, setData] = useState(null);

  // Função para buscar dados sempre que a cidade mudar
  const fetchData = useCallback(async () => {
    const weatherData = await getWeatherData(city);
    setData(weatherData);
  }, [city]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Agora depende de `fetchData`, garantindo eficiência

  return (
    <WeatherContext.Provider value={{ data, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
