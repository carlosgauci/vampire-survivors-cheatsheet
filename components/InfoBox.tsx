import items from "../items.json";
import ItemInfo from "./ItemInfo";
import { Dispatch, SetStateAction } from "react";

interface InfoBoxProps {
  hoveredItem: string;
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  modal: boolean;
}

const InfoBox = ({ hoveredItem, selectedItem, setSelectedItem, modal }: InfoBoxProps) => {
  const hovered = items.find((i) => i.name === hoveredItem);
  const selected = items.find((i) => i.name === selectedItem);
  return (
    <section className={`card w-full max-w-sm lg:max-w-md p-6 flex-col gap-6 overflow-y-auto scrollbar ${modal ? "mx-auto flex" : "m-0 hidden md:flex"}`}>
      {hovered ? <ItemInfo item={hovered} setSelectedItem={setSelectedItem} /> : selected ? <ItemInfo item={selected} setSelectedItem={setSelectedItem} /> : null}
    </section>
  );
};

export default InfoBox;
