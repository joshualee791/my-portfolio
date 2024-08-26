import Head from "next/head";
import Header from "../components/header";
import RecentPosts from "../components/RecentPosts";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - joshualeegarza</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I like to keep this handy for close encounters."
        />
        <link rel="canonical" href="https://www.joshualeegarza.com/" />
      </Head>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Hello.
          </h1>
          <RecentPosts />
        </div>
      </main>
    </>
  );
}
