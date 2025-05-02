export interface ForecastListItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface ForecastData {
  city: {
    name: string;
    country: string;
    id: number;
    coord: {
      lat: number;
      lon: number;
    };
  };
  list: ForecastListItem[];
}

export interface DailySummary {
  date: string;
  description: string;
  minTemp: number;
  maxTemp: number;
  icon: string;
  dayLabel: string;
  formattedDate: string;
}
