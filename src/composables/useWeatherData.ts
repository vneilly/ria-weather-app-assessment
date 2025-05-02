import { ref } from "vue";

import type { City } from "@/constants/cities";
import type { HourlyViewProps } from "@/components/HourlyForecast.vue";
import type { DailySummary } from "@/types/weatherTypes";

import { getWeather } from "@/services/weather";
import { groupByLocalDate, getDailySummaries } from "@/services/dataMappers";

export const useWeatherData = () => {
  // State variables
  const hourlyData = ref<HourlyViewProps[]>([]);
  const dailySummaries = ref<DailySummary[]>([]);

  //   Loading and error states
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchForCity = async (city: City) => {
    loading.value = true;
    error.value = null;

    try {
      const weatherData = await getWeather(city);
      console.log("Weather Data:", weatherData);

      hourlyData.value = weatherData.list.slice(0, 12).map((hour) => ({
        temp: hour.main.temp,
        humidity: hour.main.humidity,
        icon: hour.weather[0].icon,
        time: new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
        }),
      }));

      console.log("Mapped Hourly Data:", hourlyData.value);
      const grouped = groupByLocalDate(weatherData.list);
      dailySummaries.value = getDailySummaries(grouped);
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = String(err);
      }
      console.error("Error fetchForCity:", error);
    } finally {
      loading.value = false;
    }
  };

  return { hourlyData, dailySummaries, loading, error, fetchForCity };
};
