import ItemGrid from "./ItemGrid";
import items from "../items.json";
import { Item } from "../types";
import { Dispatch, SetStateAction } from "react";

interface ItemsProps {
  setHoveredItem: Dispatch<SetStateAction<string>>;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  selectedItem: string;
}
const Items = ({ setHoveredItem, setSelectedItem, selectedItem, setShowModal }: ItemsProps) => {
  let weapons: Item[] = [];
  let passives: Item[] = [];
  let evolutions: Item[] = [];

  items.forEach((i) => {
    if (i.category === "Passive item") passives.push(i);

    if (i.category === "Weapon") {
      const itemType = i.info[i.info.findIndex((i) => i.title === "Type")];
      if (itemType.content.includes("Normal")) weapons.push(i);
      if (itemType.content.includes("Evolution") || itemType.content.includes("Union")) evolutions.push(i);
    }
  });
  return (
    <section className="w-full max-w-4xl flex flex-col">
      <div className="card p-6 flex flex-col gap-10 overflow-y-auto scrollbar">
        <ItemGrid items={weapons} title="Weapons" setHoveredItem={setHoveredItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} setShowModal={setShowModal} />
        <ItemGrid items={passives} title="Passive Items" setHoveredItem={setHoveredItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} setShowModal={setShowModal} />
        <ItemGrid items={evolutions} title="Evolutions / Unions" setHoveredItem={setHoveredItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} setShowModal={setShowModal} />
      </div>
    </section>
  );
};

export default Items;
