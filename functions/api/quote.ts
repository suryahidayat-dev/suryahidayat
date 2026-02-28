export async function onRequest(context: any) {
  const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": context.env.NINJAS_API_KEY,
    },
  });

  return new Response(res.body, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
