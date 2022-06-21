import items from "../items.json";
import ItemInfo from "./ItemInfo";
import { Dispatch, SetStateAction } from "react";

interface InfoBoxProps {
  hoveredItem: string;
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modal: boolean;
}

const InfoBox = ({ hoveredItem, selectedItem, setSelectedItem, modal, setShowModal }: InfoBoxProps) => {
  const hovered = items.find((i) => i.name === hoveredItem);
  const selected = items.find((i) => i.name === selectedItem);
  return (
    <section className={`relative card w-full max-w-sm lg:max-w-md p-6 flex-col gap-6 overflow-y-auto scrollbar ${modal ? "mx-auto flex h-full" : "m-0 hidden md:flex"}`}>
      {hovered ? <ItemInfo item={hovered} setSelectedItem={setSelectedItem} /> : selected ? <ItemInfo item={selected} setSelectedItem={setSelectedItem} /> : null}
      {modal && (
        <button onClick={() => setShowModal(false)} className="absolute top-0 right-0 p-4 text-xl leading-4">
          X
        </button>
      )}
    </section>
  );
};

export default InfoBox;
