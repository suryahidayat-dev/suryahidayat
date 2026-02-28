import { useQuery } from "@tanstack/react-query";

type WeatherResponse = {
  current_weather: {
    temperature: number;
    windspeed: number;
    weathercode: number;
  };
};

export function useWeather(
  lat: number,
  lon: number,
  options?: { enabled?: boolean },
) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    enabled: options?.enabled,
    queryFn: async (): Promise<WeatherResponse> => {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
      );
      if (!res.ok) throw new Error("Failed to fetch weather");
      return res.json();
    },
  });
}
