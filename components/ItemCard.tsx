import { Dispatch, SetStateAction } from "react";
import { Item } from "../types";
import Image from "next/image";

interface ItemCardProps {
  item: Item;
  setHoveredItem: Dispatch<SetStateAction<string>>;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  selectedItem: string;
}
const ItemCard = ({
  item,
  setHoveredItem,
  setSelectedItem,
  selectedItem,
  setShowModal,
}: ItemCardProps) => {
  const { name } = item;
  const isSelected = selectedItem === name;

  const handleClick = () => {
    setSelectedItem(name);
    setShowModal(true);
  };

  return (
    <div
      onMouseEnter={() => setHoveredItem(name)}
      onMouseLeave={() => setHoveredItem("")}
      onClick={() => handleClick()}
    >
      <div
        className={`relative cursor-pointer p-1 border-2 ${
          isSelected ? "border-borderLight" : "border-transparent"
        }`}
      >
        <Image
          src={`/images/Sprite-${name.replace(/[^a-zA-Z0-9]/g, "_")}.png`}
          alt={name}
          layout="responsive"
          width={80}
          height={80}
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQImWPo6en5////7Nmz8/PzGRwdHdvb2728vBgYGACzzwr2uLekswAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
};

export default ItemCard;
