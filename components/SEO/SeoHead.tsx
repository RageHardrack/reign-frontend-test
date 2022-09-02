import Head from "next/head";

export const SeoHead: React.FC = () => {
  return (
    <Head>
      <title>Hacker News</title>
      <meta
        name="description"
        content="Frontend web application that request data from Hacker News public API and filters the posts using query parameter."
      />
    </Head>
  );
};
