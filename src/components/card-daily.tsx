import axios from "axios";
import {
  CloudDrizzle,
  Droplets,
  LoaderCircle,
  MapPin,
  Wind,
} from "lucide-react";
import { useState } from "react";
import { useQuery } from "react-query";
import { CardDailyStatistics } from "./card-daily-statistics";
import { CardSearchCity } from "./card-search-city";

interface WeatherProps {
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
  wind: {
    speed: string;
  };
  main: {
    humidity: string;
    temp: number;
  };
  sys: {
    country: string;
  };
  name: string;
  base: string;
}

interface LocationProps {
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export function CardDaily() {
  const [inputValue, setInputValue] = useState("Manaus");

  const { data: dataWeather, isFetching } = useQuery<WeatherProps>(
    "weather",
    async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.data?.lat}&lon=${location.data?.lon}&cnt=3&lang=pt_br&units=metric&appid=a64c5a57d74845503c1aac8cde7c7e1f`
        // `https://api.openweathermap.org/data/2.5/weather?lat=-3.1&lon=-60.016667&appid=a64c5a57d74845503c1aac8cde7c7e1f`
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const location = useQuery<LocationProps>(
    "location",
    async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=cf2a837240029abd233786c62451f44b`
      );

      const data = response.data[0];
      return {
        lat: data.lat,
        lon: data.lon,
        country: data.country,
        state: data.state,
      };
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  return (
    <div className="w-full md:w-[480px] h-[480px] bg-gradient-to-b to-indigo-500 via-indigo-700 from-indigo-900 shadow-md shadow-indigo-200 rounded-md p-4">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex items-center justify-end gap-2 w-full text-slate-300 hover:text-slate-950 transition-all">
          <MapPin width={18} height={18} className="hover:cursor-pointer" />
          <CardSearchCity
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </div>
        <div className="flex flex-col gap-3 items-center text-center">
          <h2 className="text-slate-300 font-bold tracking-wide text-6xl">
            {inputValue}
          </h2>
          {isFetching && location.isFetching ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <h1 className="text-2xl font-semibold text-slate-300">
              {dataWeather?.main.temp}°C
            </h1>
          )}
        </div>
        <div className="flex gap-2 w-full">
          {isFetching && location.isFetching ? (
            <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-2 bg-slate-200 rounded-md p-2 ">
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            dataWeather?.weather.map((weather) => {
              return (
                <CardDailyStatistics
                  key={weather.id}
                  icon={<CloudDrizzle width={18} height={18} />}
                  typeStatistic={weather.main}
                  statistic={weather.description}
                />
              );
            })
          )}
          {isFetching && location.isFetching ? (
            <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-2 bg-slate-200 rounded-md p-2 ">
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            <CardDailyStatistics
              icon={<Wind width={18} height={18} />}
              typeStatistic="Wind"
              statistic={dataWeather?.wind.speed + "m/s"}
            />
          )}
          {isFetching && location.isFetching ? (
            <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-2 bg-slate-200 rounded-md p-2 ">
              <LoaderCircle className="animate-spin" />
            </div>
          ) : (
            <CardDailyStatistics
              icon={<Droplets width={18} height={18} />}
              typeStatistic="Humidity"
              statistic={dataWeather?.main.humidity + "%"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
