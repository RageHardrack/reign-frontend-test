import { Dispatch, SetStateAction } from "react";

interface Props {
  currentTab: string;
  setCurrentTab: Dispatch<SetStateAction<string>>;
}

/**
 * Functional Component to render tabs buttons to change the views between the News Feed Section and saved Favorites News.
 */
export const NavTabs: React.FC<Props> = ({ currentTab, setCurrentTab }) => {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="flex w-48">
        <button
          className={`flex-1 py-1  border font-medium hover:bg-blue-500 hover:border-blue-500 hover:text-white ${
            currentTab === "all"
              ? "text-blue-500 border-blue-500"
              : "border-[#d6d6d6] text-primary"
          } rounded-l-sm transition duration-300`}
          onClick={() => setCurrentTab("all")}
        >
          All
        </button>

        <button
          className={`flex-1 py-1  border font-medium hover:bg-blue-500 hover:border-blue-500 hover:text-white ${
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
