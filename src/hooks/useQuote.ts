import { useQuery } from "@tanstack/react-query";

type QuoteResponse = {
  quote: string;
  author: string;
};

const STORAGE_KEY = "daily-quote-cache";

function getToday() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export function useQuote() {
  return useQuery({
    queryKey: ["daily-quote"],
    queryFn: async (): Promise<QuoteResponse> => {
      const today = getToday();

      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.date === today) {
          return parsed.quote;
        }
      }

      const res = await fetch("/api/quote"); // Cloudflare proxy endpoint
      if (!res.ok) throw new Error("Failed to fetch quote");

      const data = await res.json();
      const quote = data[0];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ date: today, quote })
      );

      return quote;
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    refetchOnWindowFocus: false,
  });
}