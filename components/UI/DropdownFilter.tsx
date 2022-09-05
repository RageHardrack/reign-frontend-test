import { Menu, Transition } from "@headlessui/react";
import { Dispatch, SetStateAction, useState, Fragment } from "react";

interface Props {
  currentFilter: string;
  setCurrentFilter: Dispatch<SetStateAction<string>>;
}

const FILTER_OPTIONS = [
  { icon: 1, display: "Angular", value: "angular" },
  { icon: 2, display: "ReactJS", value: "reactjs" },
  { icon: 3, display: "VueJS", value: "vuejs" },
];

export const DropdownFilter: React.FC<Props> = ({
  currentFilter,
  setCurrentFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="relative max-w-[15rem]">
      <Menu.Button className="flex items-center justify-between w-full px-4 py-1 border rounded-md cursor-pointer border-border-color">
        <span className="capitalize text-off-text">{currentFilter}</span>

        <span className="">1</span>
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
              className="flex cursor-pointer"
              key={option.value}
              onClick={() => setCurrentFilter(option.value)}
            >
              {option.icon} {option.display}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
