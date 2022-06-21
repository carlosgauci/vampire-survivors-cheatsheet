import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Item } from "../types";

interface ItemInfoProps {
  item: Item;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

const ItemInfo = ({ item, setSelectedItem }: ItemInfoProps) => {
  const evolvedWith = item.info[item.info.findIndex((i) => i.title === "Evolved with")]?.content.split(/[,+]/) || [];
  const unitedWith = item.info[item.info.findIndex((i) => i.title === "United with")]?.content.split(/[,+]/) || [];
  const evolution = item.info[item.info.findIndex((i) => i.title === "Evolution")]?.content;
  const union = item.info[item.info.findIndex((i) => i.title === "Union")]?.content;
  const evolvedWithArr = [...evolvedWith, ...unitedWith];

  const effects = item.info[item.info.findIndex((i) => i.title === "Effects")]?.content;
  const stageItem = item.info[item.info.findIndex((i) => i.title === "Stage item")]?.content;

  return (
    <>
      {/* Image, name, desc */}
      <div className="flex gap-4 items-center">
        <div className="relative w-20 shrink-0">
          <Image src={`/images/Sprite-${item.name.replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={item.name} layout="responsive" width={80} height={80} priority />
        </div>

        <div>
          <h2 className="text-3xl">{item.name}</h2>
          <p className="text-xl italic leading-6">{item.description}</p>
        </div>
      </div>

      {/* Effects */}
      {effects && <p className="text-xl">Effects: {effects.split(".").join(". ")}</p>}

      {/* Stage Item? */}
      {stageItem && <p className="text-xl">Stage Item: {stageItem}.</p>}

      {/* Evolution */}
      {(evolution || union) && (
        <div>
          <h3 className="text-3xl mb-2">Evolution</h3>

          <div className="flex items-center gap-4 flex-wrap">
            <ItemInfoSection itemName={item.name} setSelectedItem={setSelectedItem} />

            {evolvedWithArr.map((i) => (
              <div className="flex items-center gap-4" key={i}>
                <span className="text-4xl">+</span>
                <ItemInfoSection itemName={i} setSelectedItem={setSelectedItem} />
              </div>
            ))}

            <span className="text-4xl">=</span>

            {evolution && <ItemInfoSection itemName={evolution} setSelectedItem={setSelectedItem} />}

            {union && <ItemInfoSection itemName={union} setSelectedItem={setSelectedItem} />}
          </div>
        </div>
      )}

      {/* Levels */}
      {item.levels.length > 0 && (
        <div>
          <h3 className="text-3xl">Levels</h3>
          <ul>
            {item.levels.map((level) => (
              <li key={level.level} className="text-xl leading-6">
                {level.level}: {level.bonus}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Stats */}
      {item.stats.length > 0 && (
        <div>
          <h3 className="text-3xl">Base Stats</h3>
          <ul>
            {item.stats.map((stat) => (
              <li key={stat.title} className="text-xl leading-6">
                {stat.title}: {stat.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

interface ItemInfoSectionProps {
  itemName: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

const ItemInfoSection = ({ itemName, setSelectedItem }: ItemInfoSectionProps) => {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setSelectedItem(itemName.trim())}>
      <div className="relative w-9 lg:w-12">
        <Image src={`/images/Sprite-${itemName.trim().replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={itemName} layout="responsive" width={80} height={80} priority />
      </div>
      <span className="hidden lg:block text-center text-lg leading-4">{itemName}</span>
    </div>
  );
};

export default ItemInfo;
