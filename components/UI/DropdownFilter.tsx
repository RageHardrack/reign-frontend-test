import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownSvg, TechIcon } from "components";

interface Props {
  currentFilter: string;
  setCurrentFilter: (value: string) => void;
}

const FILTER_OPTIONS = [
  { display: "Angular", value: "angular" },
  { display: "ReactJS", value: "reactjs" },
  { display: "VueJS", value: "vuejs" },
];

/**
 * Functional Component to render a Dropdown Menu to select a filter for the query params in the API fetch.
 */
export const DropdownFilter: React.FC<Props> = ({
  currentFilter,
  setCurrentFilter,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("Select your news");

  useEffect(() => {
    setSelectedFilter(currentFilter);
  }, [currentFilter]);

  return (
    <Menu as="div" className="relative max-w-[15rem]">
      <Menu.Button className="flex items-center justify-between w-full px-4 py-2 border rounded-md cursor-pointer border-border-color">
        <span className="flex items-center space-x-4 capitalize text-off-text">
          <TechIcon techName={selectedFilter} /> <p>{selectedFilter}</p>
        </span>

        <ChevronDownSvg className="w-6 h-6" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="absolute left-0 p-4 w-[15rem] z-30 bg-white rounded-sm shadow-md top-10 space-y-4"
        >
          {FILTER_OPTIONS.map((option) => (
            <Menu.Item
              as="li"
              className="flex items-center space-x-4 cursor-pointer"
              key={option.value}
              onClick={() => setCurrentFilter(option.value)}
            >
              <TechIcon techName={option.value} /> <p>{option.display}</p>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
