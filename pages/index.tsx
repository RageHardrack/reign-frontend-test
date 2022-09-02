import type { NextPage } from "next";
import { DropdownFilter, FeedList, Navbar, NavTabs, SeoHead } from "components";

const HomePage: NextPage = () => {
  return (
    <section className="flex flex-col w-screen h-screen">
      <SeoHead />
      <Navbar />

      <main className="flex-1 flex flex-col container mx-auto px-4 md:px-8 py-8 md:py-16">
        <NavTabs />
        <DropdownFilter />

        <FeedList />
      </main>
    </section>
  );
};

export default HomePage;
