import React from "react";
import Image from "next/image";
import { Item } from "../types";

interface ItemInfoProps {
  item: Item;
}
const ItemInfo = ({ item }: ItemInfoProps) => {
  const evolvedWith = item.info[item.info.findIndex((i) => i.title === "Evolved with")]?.content.split(/[,+]/) || [];
  const unitedWith = item.info[item.info.findIndex((i) => i.title === "United with")]?.content.split(/[,+]/) || [];
  const evolution = item.info[item.info.findIndex((i) => i.title === "Evolution")]?.content;
  const union = item.info[item.info.findIndex((i) => i.title === "Union")]?.content;

  const evolvedWithArr = [...evolvedWith, ...unitedWith];

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

      {/* Evolution */}
      {(evolution || union) && (
        <div>
          <h3 className="text-3xl mb-2">Evolution</h3>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="relative w-9 lg:w-12">
                <Image src={`/images/Sprite-${item.name.replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={item.name} layout="responsive" width={80} height={80} priority />
              </div>
              <span className="text-center text-lg leading-4">{item.name}</span>
            </div>

            {evolvedWithArr.map((i) => (
              <>
                <span className="text-4xl">+</span>
                <div className="flex flex-col items-center gap-1">
                  <div className="relative w-9 lg:w-12">
                    <Image src={`/images/Sprite-${i.trim().replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={i.trim()} layout="responsive" width={80} height={80} priority />
                  </div>
                  <span className="text-center text-lg leading-4">{i.trim()}</span>
                </div>
              </>
            ))}

            <span className="text-4xl">=</span>

            {evolution && (
              <div className="flex flex-col gap-1 items-center">
                <div className="relative w-9 lg:w-12">
                  <Image src={`/images/Sprite-${evolution.replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={evolution.trim()} layout="responsive" width={80} height={80} priority />
                </div>
                <span className="text-center text-lg leading-4">{evolution.trim()}</span>
              </div>
            )}

            {union && (
              <div className="flex flex-col gap-1 items-center">
                <div className="relative w-9 lg:w-12">
                  <Image src={`/images/Sprite-${union.replace(/[^a-zA-Z0-9]/g, "_")}.png`} alt={union.trim()} layout="responsive" width={80} height={80} priority />
                </div>
                <span className="text-center text-lg leading-4">{union.trim()}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Levels */}
      {item.levels.length > 0 && (
        <div>
          <h3 className="text-3xl">Levels</h3>
          <ul>
            {item.levels.map((level) => (
              <li className="text-xl leading-6">
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
              <li className="text-xl leading-6">
                {stat.title}: {stat.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ItemInfo;
