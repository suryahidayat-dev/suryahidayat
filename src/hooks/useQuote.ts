import { useQuery } from "@tanstack/react-query";

type QuoteResponse = {
  content: string;
  author: string;
};

export function useQuote() {
  return useQuery({
    queryKey: ["daily-quote"],
    queryFn: async (): Promise<QuoteResponse> => {
      const res = await fetch("http://api.quotable.io/random");
      if (!res.ok) throw new Error("Failed to fetch quote");
      return res.json();
    },
    staleTime: 1000 * 60 * 60, // 1 hour cache
    refetchOnWindowFocus: false,
  });
}
