import type { NextPage } from "next";
import { DropdownFilter, FeedList, Navbar, NavTabs, SeoHead } from "components";
import { useFetch } from "hooks";

const HomePage: NextPage = () => {
  const { data } = useFetch("angular", 0);
  console.log({ data });

  return (
    <section className="flex flex-col w-screen h-screen">
      <SeoHead />
      <Navbar />

      <main className="container flex flex-col flex-1 px-4 py-8 mx-auto md:px-8 md:py-16">
        <NavTabs />
        <DropdownFilter />

        <FeedList />
      </main>
    </section>
  );
};

export default HomePage;
