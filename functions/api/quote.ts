interface QuoteRequestContext {
  env: {
    NINJAS_API_KEY: string;
  };
}

export async function onRequest(context: QuoteRequestContext) {
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": context.env.NINJAS_API_KEY,
    },
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
