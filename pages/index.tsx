import { Navbar, SeoHead } from "components";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <section className="flex flex-col w-screen h-screen">
      <SeoHead />
      <Navbar />

      <main className="flex-1 flex flex-col container mx-auto">
        hello world
      </main>
    </section>
  );
};

export default HomePage;
