"use client"; // Ensures the component is treated as a client component

import Head from "next/head";
import Link from "next/link"; // Import Link for linking to individual posts

const SinglePost = ({ post }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
  );
};

export default SinglePost;
