import React from "react";
import setupWallet from "../assets/images/startUp-wallet.png";
import 'animate.css';

const Work = () => {
  return (
    <div className="bg-[#2B2B2B] py-10 " >

    <div className="font-rubik my-14 w-11/12 mx-auto">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold text-white">
          <span className="text-[#D7EF43]">How </span>It Works
        </h1>
        <p className="text-white text-xl">
          Don’t worry, here’s the beginner&apos;s guide to the NFT world
        </p>
      </div>
      <div className="mt-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-between items-center gap-28">
        <div className="bg-[#3B3B3B]  rounded-3xl px-30 py-10 ">
          <div className="flex justify-center items-center">
            <img src={setupWallet} alt="" />
          </div>
          <div className="flex p-4 justify-center items-center text-center flex-col">
            <h1 className="text-2xl font-semibold">Setup Your Wallet</h1>
            <p className="mt-4">
              Set up your wallet of choice. Connect it to the Market by clicking
              the wallet icon.
            </p>
          </div>
        </div>
        <div className="bg-[#3B3B3B]  rounded-3xl px-30 py-10 ">
          <div className="flex justify-center items-center">
            <img src={setupWallet} alt="" />
          </div>
          <div className="flex p-4 justify-center items-center text-center flex-col">
            <h1 className="text-2xl font-semibold">Setup Your Wallet</h1>
            <p className="mt-4">
              Set up your wallet of choice. Connect it to the Market by clicking
              the wallet icon.
            </p>
          </div>
        </div>
        <div className="bg-[#3B3B3B]  rounded-3xl px-30 py-10 ">
          <div className="flex justify-center items-center">
            <img src={setupWallet} alt="" />
          </div>
          <div className="flex p-4 justify-center items-center text-center flex-col">
            <h1 className="text-2xl font-semibold">Setup Your Wallet</h1>
            <p className="mt-4">
              Set up your wallet of choice. Connect it to the Market by clicking
              the wallet icon.
            </p>
          </div>
        </div>
        <div className="bg-[#3B3B3B]  rounded-3xl px-30 py-10">
          <div className="flex justify-center items-center">
            <img src={setupWallet} alt="" />
          </div>
          <div className="flex p-4 justify-center items-center text-center flex-col">
            <h1 className="text-2xl font-semibold">Setup Your Wallet</h1>
            <p className="mt-4">
              Set up your wallet of choice. Connect it to the Market by clicking
              the wallet icon.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Work;
