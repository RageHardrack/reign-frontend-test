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
import { useLocalStorage } from "hooks";

const HomePage: NextPage = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [currentFilter, setCurrentFilter] = useLocalStorage<string>(
    "filter",
    "angular"
  );

  return (
    <section className="flex flex-col w-screen h-screen">
      <SeoHead />
      <Navbar />

      <main className="container flex flex-col flex-1 px-4 py-8 mx-auto space-y-8 md:px-8 md:py-16">
        <NavTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <DropdownFilter
          currentFilter={currentFilter as string}
          setCurrentFilter={setCurrentFilter as (value: string) => void} // TODO: Improve typing
        />

        <section>
          {currentTab === "all" && (
            <FeedList currentFilter={currentFilter as string} />
          )}
          {currentTab === "faves" && <FeedFaves />}
        </section>
      </main>
    </section>
  );
};

export default HomePage;
