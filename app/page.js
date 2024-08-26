// app/page.js
import Header from "../components/header"; // Corrected import statement
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        title
        date
        content
        slug
      }
    }
  }
`;

export default async function Home() {
  const { data } = await client.query({
    query: GET_POSTS,
    fetchPolicy: "network-only",
  });

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            My Portfolio
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.nodes.map((post) => (
              <div
                key={post.slug}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <div
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  className="text-gray-700"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
