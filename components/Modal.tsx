import { Transition } from "@headlessui/react";
import InfoBox from "./InfoBox";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  hoveredItem: string;
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

const Modal = ({ hoveredItem, selectedItem, setSelectedItem }: ModalProps) => {
  return (
    <div className="fixed inset-0 h-full md:hidden z-50 bg-black bg-opacity-70 p-4 flex flex-col overflow-auto" onClick={() => setSelectedItem("")}>
      <div className="mx-auto bg-black" onClick={(e) => e.stopPropagation()}>
        <Transition.Child
          enter="transform transition-transform duration-200 ease-linear"
          enterFrom="translate-y-10"
          enterTo="translate-y-0"
          leave="transform transition-transform duration-200 ease-linear"
          leaveFrom="translate-y-0"
          leaveTo="translate-y-10"
        >
          <InfoBox hoveredItem={hoveredItem} selectedItem={selectedItem} setSelectedItem={setSelectedItem} modal={true} />
        </Transition.Child>
      </div>
    </div>
  );
};

export default Modal;
