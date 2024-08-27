// app/sitemap.xml/route.js
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";

const GET_ALL_SLUGS = gql`
  query GetAllSlugs {
    pages {
      nodes {
        slug
        date
      }
    }
    posts {
      nodes {
        slug
        date
      }
    }
  }
`;

export async function GET(request) {
  const { data } = await client.query({
    query: GET_ALL_SLUGS,
  });

  const pages = data.pages.nodes;
  const posts = data.posts.nodes;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.joshualeegarza.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${pages
    .map(
      (page) => `<url>
    <loc>https://www.joshualeegarza.com/${page.slug}</loc>
    <lastmod>${page.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
  ${posts
    .map(
      (post) => `<url>
    <loc>https://www.joshualeegarza.com/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
