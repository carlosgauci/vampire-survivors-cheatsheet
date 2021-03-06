import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import bgImage from "../images/bg.jpg";
import Items from "../components/Items";
import InfoBox from "../components/InfoBox";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  const [hoveredItem, setHoveredItem] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-h-screen h-full overflow-hidden flex flex-col">
      <Head>
        <title>Vampire Survivors Cheat Sheet</title>
        <meta
          name="description"
          content="Quickly view all weapons, passive items, and evolutions in Vampire Survivors."
        />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="preload"
          href="/fonts/VT323-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Bg img */}
      <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden -z-10">
        <Image
          alt="Vampire Survivors"
          src={bgImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          quality={80}
        />
      </div>

      <Header />

      <main className="container h-full flex gap-4 xl:gap-6 overflow-hidden mb-4 xl:mb-6">
        <Items
          setHoveredItem={setHoveredItem}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          setShowModal={setShowModal}
        />
        <InfoBox
          hoveredItem={hoveredItem}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          modal={false}
          setShowModal={setShowModal}
        />
      </main>

      <Transition
        className="fixed inset-0 h-full md:hidden z-50 bg-black bg-opacity-70 p-4 flex flex-col overflow-hidden"
        onClick={() => setShowModal(false)}
        show={showModal}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Modal
          hoveredItem={hoveredItem}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          setShowModal={setShowModal}
        />
      </Transition>
    </div>
  );
};

export default Home;
