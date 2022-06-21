import React from "react";
import { Item } from "../types";
import { Dispatch, SetStateAction } from "react";
import ItemCard from "./ItemCard";

interface ItemGridProps {
  items: Item[];
  title: string;
  setHoveredItem: Dispatch<SetStateAction<string>>;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

const ItemGrid = ({ items, title, setHoveredItem, setSelectedItem }: ItemGridProps) => {
  return (
    <section className="w-full">
      <h2 className="mb-4 text-2xl md:text-3xl text-center uppercase">{title}</h2>
      <div className="grid gap-6 justify-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(3rem, 1fr)" }}>
        {items.map((i) => (
          <ItemCard key={i.name} item={i} setHoveredItem={setHoveredItem} setSelectedItem={setSelectedItem} />
        ))}
      </div>
    </section>
  );
};

export default ItemGrid;
