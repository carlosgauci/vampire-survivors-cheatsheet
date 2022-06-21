import { Dispatch, SetStateAction } from "react";
import { Item } from "../types";
import Image from "next/image";

interface ItemCardProps {
  item: Item;
  setHoveredItem: Dispatch<SetStateAction<string>>;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  selectedItem: string;
}

const ItemCard = ({ item, setHoveredItem, setSelectedItem, selectedItem }: ItemCardProps) => {
  const { name } = item;

  const isSelected = selectedItem === name;

  return (
    <div onMouseEnter={() => setHoveredItem(name)} onMouseLeave={() => setHoveredItem("")} onClick={() => setSelectedItem(name)}>
      <div className={`relative cursor-pointer p-1 border-2 ${isSelected ? "border-borderLight bg-blue-800" : "border-transparent"}`}>
        <Image src={`/images/Sprite-${name.replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={name} layout="responsive" width={80} height={80} priority />
      </div>
    </div>
  );
};

export default ItemCard;
