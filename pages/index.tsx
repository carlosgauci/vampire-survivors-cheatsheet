import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import bgImage from "../images/bg.jpg";
import Items from "../components/Items";
import InfoBox from "../components/InfoBox";
import { useState } from "react";

const Home: NextPage = () => {
  const [hoveredItem, setHoveredItem] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="max-h-screen h-full overflow-hidden flex flex-col">
      <Head>
        <title>Vampire Survivors Cheat Sheet</title>
        <meta name="description" content="Quickly view all weapons, passive items, and evolutions in Vampire Survivors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Bg img */}
      <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-10">
        <Image alt="Vampire Survivors" src={bgImage} layout="fill" objectFit="cover" placeholder="blur" quality={80} />
      </div>

      <Header />

      <main className="container h-full flex gap-4 xl:gap-6 overflow-hidden mb-4 xl:mb-6">
        <Items setHoveredItem={setHoveredItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <InfoBox hoveredItem={hoveredItem} selectedItem={selectedItem} />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
