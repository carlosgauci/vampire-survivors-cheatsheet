import items from "../items.json";
import ItemInfo from "./ItemInfo";
import { Dispatch, SetStateAction } from "react";

interface InfoBoxProps {
  hoveredItem: string;
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

const InfoBox = ({ hoveredItem, selectedItem, setSelectedItem }: InfoBoxProps) => {
  const hovered = items.find((i) => i.name === hoveredItem);
  const selected = items.find((i) => i.name === selectedItem);
  return (
    <section className="hidden md:flex card w-full md:max-w-sm lg:max-w-md p-6 flex-col gap-6 overflow-y-auto scrollbar">
      {hovered ? <ItemInfo item={hovered} setSelectedItem={setSelectedItem} /> : selected ? <ItemInfo item={selected} setSelectedItem={setSelectedItem} /> : null}
    </section>
  );
};

export default InfoBox;
