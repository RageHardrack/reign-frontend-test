import { Dispatch, SetStateAction } from "react";

interface Props {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

export const NavTabs: React.FC<Props> = ({ currentTab, setCurrentTab }) => {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="flex w-48">
        <button
          className={`flex-1 py-1  border ${
            currentTab === "all"
              ? "text-blue-500 border-blue-500"
              : "border-[#d6d6d6] text-primary"
          } rounded-l-sm transition duration-300`}
          onClick={() => setCurrentTab("all")}
        >
          All
        </button>

        <button
          className={`flex-1 py-1  border ${
            currentTab === "faves"
              ? "text-blue-500 border-blue-500"
              : "border-[#d6d6d6] text-primary"
          } rounded-r-sm transition duration-300`}
          onClick={() => setCurrentTab("faves")}
        >
          My Faves
        </button>
      </div>
    </section>
  );
};
