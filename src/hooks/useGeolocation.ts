import { useEffect, useState } from "react";

type LocationState = {
  lat: number | null;
  lon: number | null;
  loading: boolean;
  error: string | null;
};

export function useGeolocation(): LocationState {
  const [state, setState] = useState<LocationState>({
    lat: null,
    lon: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        lat: null,
        lon: null,
        loading: false,
        error: "Geolocation not supported",
      });
      return;
    }

    const watcherId = navigator.geolocation.watchPosition(
      (pos) => {
        setState({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          loading: false,
          error: null,
        });
      },
      (err) => {
        setState({
          lat: null,
          lon: null,
          loading: false,
          error: err.message,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      },
    );

    return () => {
      navigator.geolocation.clearWatch(watcherId);
    };
  }, []);

  return state;
}
