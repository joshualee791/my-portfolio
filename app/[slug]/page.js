import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import Head from "next/head";
import Header from "../../components/header";
import RecentPosts from "../../components/RecentPosts"; // Import RecentPosts component

const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      title
      content
      seo {
        title
        metaDesc
      }
    }
  }
`;

export default async function PostPage({ params }) {
  const { slug } = params;

  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

  const post = data.postBy;

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <Head>
        <title>{post.seo.title || post.title} - joshualeegarza</title>
        <meta name="description" content={post.seo.metaDesc || "Blog post"} />
        <link rel="canonical" href={`https://www.joshualeegarza.com/${slug}`} />
      </Head>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mt-8 mb-6">
            {post.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-gray-700"
          />
          <div className="mt-10">
            <RecentPosts />
          </div>
        </div>
      </main>
    </>
  );
}
