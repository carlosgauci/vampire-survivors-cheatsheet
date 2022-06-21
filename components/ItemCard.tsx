import { Dispatch, SetStateAction } from "react";
import { Item } from "../types";
import Image from "next/image";

interface ItemCardProps {
  item: Item;
  setHoveredItem: Dispatch<SetStateAction<string>>;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

const ItemCard = ({ item, setHoveredItem, setSelectedItem }: ItemCardProps) => {
  const { name } = item;

  return (
    <div onMouseEnter={() => setHoveredItem(name)} onMouseLeave={() => setHoveredItem("")} onClick={() => setSelectedItem(name)}>
      <div className={`relative cursor-pointer `}>
        <Image src={`/images/Sprite-${name.replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={name} layout="responsive" width={80} height={80} priority />
      </div>
    </div>
  );
};

export default ItemCard;
