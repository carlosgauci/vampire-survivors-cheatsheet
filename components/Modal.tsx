import { Transition } from "@headlessui/react";
import InfoBox from "./InfoBox";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  hoveredItem: string;
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ hoveredItem, selectedItem, setSelectedItem, setShowModal }: ModalProps) => {
  return (
    <div className="mx-auto h-full flex overflow-hidden bg-transparent" onClick={(e) => e.stopPropagation()}>
      <Transition.Child
        enter="transform transition-transform duration-300 ease-linear"
        enterFrom="translate-y-10"
        enterTo="translate-y-0"
        leave="transform transition-transform duration-300 ease-linear"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-10"
      >
        <InfoBox hoveredItem={hoveredItem} selectedItem={selectedItem} setSelectedItem={setSelectedItem} modal={true} setShowModal={setShowModal} />
      </Transition.Child>
    </div>
  );
};

export default Modal;
