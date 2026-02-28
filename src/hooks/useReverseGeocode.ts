import { useQuery } from "@tanstack/react-query";

type GeoResponse = {
  address?: {
    city?: string;
    town?: string;
    village?: string;
    state?: string;
    country?: string;
  };
};

export function useReverseGeocode(lat?: number, lon?: number) {
  return useQuery({
    queryKey: ["reverse-geocode", lat, lon],
    enabled: !!lat && !!lon,
    queryFn: async (): Promise<GeoResponse> => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      );

      if (!res.ok) throw new Error("Failed to reverse geocode");

      return res.json();
    },
  });
}
