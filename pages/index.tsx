import { useState } from "react";
import type { NextPage } from "next";

import {
  DropdownFilter,
  FeedFaves,
  FeedList,
  Navbar,
  NavTabs,
  SeoHead,
} from "components";

const HomePage: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [currentFilter, setCurrentFilter] = useState("angular");

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

        <section>
          {currentTab === "all" && <FeedList currentFilter={currentFilter} />}
          {currentTab === "faves" && <FeedFaves />}
        </section>
      </main>
    </section>
  );
};

export default HomePage;
