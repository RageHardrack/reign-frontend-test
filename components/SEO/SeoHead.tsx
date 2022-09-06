import Head from "next/head";

/**
 * Functional Component to render default metaTitle and metaDescription for the project.
 */
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
