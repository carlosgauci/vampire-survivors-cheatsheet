import React from "react";
import { Item } from "../types";
import { Dispatch, SetStateAction } from "react";
import ItemCard from "./ItemCard";

interface ItemGridProps {
  items: Item[];
  title: string;
  setHoveredItem: Dispatch<SetStateAction<string>>;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  selectedItem: string;
}

const ItemGrid = ({ items, title, setHoveredItem, setSelectedItem, selectedItem }: ItemGridProps) => {
  return (
    <section className="w-full select-none">
      <h2 className="mb-4 text-2xl md:text-3xl text-center uppercase">{title}</h2>
      <div className="grid gap-4 justify-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(3.2rem, 1fr)" }}>
        {items.map((i) => (
          <ItemCard key={i.name} item={i} setHoveredItem={setHoveredItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        ))}
      </div>
    </section>
  );
};

export default ItemGrid;
