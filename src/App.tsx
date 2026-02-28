import { useGeolocation } from "./hooks/useGeolocation"
import { useQuote } from "./hooks/useQuote"
import { useReverseGeocode } from "./hooks/useReverseGeocode"
import { useWeather } from "./hooks/useWeather"

export default function App() {
  const { lat, lon, loading, error } = useGeolocation()
  const { data: cityData } = useReverseGeocode(lat ?? undefined, lon ?? undefined)
  const { data: weather } = useWeather(lat ?? 0, lon ?? 0, {
    enabled: !!lat && !!lon,
  })
  const { data: quote, isLoading: quoteLoading } = useQuote()

  const city =
    cityData?.address?.city ||
    cityData?.address?.town ||
    cityData?.address?.village ||
    "Unknown location"

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-2xl animate-fade-in">
        
        {/* Avatar */}
        <img
          src="/src/assets/ic-surya.png"
          alt="Surya Avatar"
          className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 rounded-full object-cover ring-2 ring-white/20"
        />

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center tracking-tight">
          Welcome to Surya's WebApp
        </h1>

        {/* Quote */}
        <div className="mt-5 p-4 rounded-xl bg-black/30 text-center min-h-24 flex items-center justify-center transition-all">
          {quoteLoading && <SkeletonQuote />}

          {quote && (
            <div className="animate-fade-up">
              <p className="italic text-sm sm:text-base leading-relaxed">
                “{quote.content}”
              </p>
              <p className="mt-1 text-xs text-slate-400">
                — {quote.author}
              </p>
            </div>
          )}
        </div>

        {/* Weather */}
        <div className="mt-6 p-4 rounded-xl bg-black/30 text-center min-h-30 flex flex-col items-center justify-center transition-all">
          {loading && <SkeletonWeather />}

          {error && <p className="text-red-400">{error}</p>}

          {!loading && !error && (
            <div className="animate-fade-up space-y-1">
              <p className="text-lg font-semibold">📍 {city}</p>

              {weather && (
                <>
                  <p className="text-sm">
                    🌡 {weather.current_weather.temperature}°C
                  </p>
                  <p className="text-sm">
                    💨 {weather.current_weather.windspeed} km/h
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

/* ---------------- Skeleton Loaders ---------------- */

function SkeletonQuote() {
  return (
    <div className="w-full space-y-2 animate-pulse">
      <div className="h-3 bg-white/20 rounded w-3/4 mx-auto" />
      <div className="h-3 bg-white/10 rounded w-1/2 mx-auto" />
    </div>
  )
}

function SkeletonWeather() {
  return (
    <div className="w-full space-y-3 animate-pulse">
      <div className="h-4 bg-white/20 rounded w-1/2 mx-auto" />
      <div className="h-3 bg-white/10 rounded w-1/3 mx-auto" />
      <div className="h-3 bg-white/10 rounded w-1/4 mx-auto" />
    </div>
  )
}