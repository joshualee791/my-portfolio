"use client"; // Ensures the component is treated as a client component

import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link"; // Import Link for linking to individual posts

const GET_RECENT_POSTS = gql`
  query GetRecentPosts {
    posts(first: 6) {
      nodes {
        title
        date
        content
        slug
        seo {
          title
          metaDesc
        }
      }
    }
  }
`;

const RecentPosts = () => {
  const { loading, error, data } = useQuery(GET_RECENT_POSTS, {
    fetchPolicy: "network-only",
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Apollo error:", error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>Recent Posts - joshualeegarza</title>
        <meta name="description" content="Check out my recent posts." />
        <link
          rel="canonical"
          href="https://www.joshualeegarza.com/recent-posts"
        />
      </Head>
      <div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.posts.nodes.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
              <Head>
                <link
                  rel="canonical"
                  href={`https://www.joshualeegarza.com/${post.slug}`}
                />
              </Head>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href={`/${post.slug}`}>{post.title}</Link>
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
