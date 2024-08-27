// app/robots.txt/route.js

export async function GET(request) {
  const response = new Response(
    `User-agent: *
Disallow: /admin
Disallow: /api
Allow: /
Sitemap: https://www.joshualeegarza.com/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );

  return response;
}
