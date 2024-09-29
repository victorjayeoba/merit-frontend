"use client"
import { useState } from 'react';
import Head from 'next/head';
import Overlay from './common/Overlay';
import Test from './common/Test';
import Aggregate from './component/Aggregate';
import heroimage from "@/app/assets/images/hero.png";
import { FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";
import Header from './common/Header';
import Footer from './common/Footer';

export default function Home() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <div className='scroll-smooth'>

      <Header />
      <section className="flex flex-col md:flex-row items-center justify-between container mx-auto my-8 p-4">
        <div className="md:w-1/2 text-[ #003366 ]">
          <h2 className="text-6xl  font-bold mb-4 ">
            Welcome to the <br /> Merit App!
          </h2>
          <p className="text-lg mb-4">
            Calculate your university aggregate scores effortlessly and get
            personalized recommendations.
          </p>
          <a href='#aggregatecalculator' className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
            Get Started
          </a>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroimage} alt="Hero Image" />
        </div>
      </section>
      <Aggregate />
      <Footer />

    </div>
  );
}
