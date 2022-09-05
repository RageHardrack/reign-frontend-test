import { useState } from "react";
import type { NextPage } from "next";

import { DropdownFilter, FeedList, Navbar, NavTabs, SeoHead } from "components";
import { useFetch } from "hooks";

const HomePage: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [currentFilter, setCurrentFilter] = useState("angular");

  const { data: content, isLoading } = useFetch(
    `/search_by_date?query=${currentFilter}&page=${"0"}`
  );

  return (
    <section className="flex flex-col w-screen h-screen">
      <SeoHead />
      <Navbar />

      <main className="container flex flex-col flex-1 px-4 py-8 mx-auto space-y-8 md:px-8 md:py-16">
        <NavTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <DropdownFilter
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />

        {isLoading ? "Loading" : <FeedList content={content!.news} />}
      </main>
    </section>
  );
};

export default HomePage;
