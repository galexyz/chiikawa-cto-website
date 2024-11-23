import Head from "next/head";
import Image from "next/image";
import "../global.css";
import chiikawaImg from "../public/chiikawa.webp";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

export default function Home() {
  const textToCopy = "DHoadXCbf6TcadkcMGJ8kFRdDa2sXPQ1KrgodUDRpump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Head>
        <title>Chiikawa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-yellow-200 lg:p-20 sm:p-10 p-5">
        <div className="flex flex-row justify-center">
          <Image src={chiikawaImg} width={500} height={100} alt="chiikawa" />
        </div>
        <h1 className="text-center text-white text-5xl  sm:text-7xl font-extrabold text-outline">
          CHIIKAWA
        </h1>
        <h2 className="text-center text-white text-4xl sm:text-5xl font-extrabold text-outline pt-5">
          Uniting fans on-chain
        </h2>
        <div className="flex flex-row justify-center p-10 space-x-5">
          <FaXTwitter
            className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
            onClick={() => window.open("https://x.com/WeLoveChiikawa")}
          />
          <FaTiktok
            className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.tiktok.com/@lovechiikawa0?_t=8raoH8hBLL6&_r=1"
              )
            }
          />
          <FaTelegramPlane
            className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
            onClick={() => window.open("https://t.me/CTOCHIIKAWA")}
          />
        </div>
        <div className="text-center text-white text-4xl font-extrabold text-outline pt-5">
          Contract Address
        </div>
        <div className="flex flex-col items-center gap-4 p-4">
          <div className="border-2 sm:text-base text-2xs bg-white border-black flex flex-row justify-between items-center p-2 sm:px-4 rounded-lg gap-x-2 sm:gap-x-5">
            <FaRegCopy
              className="w-6 h-6 cursor-pointer"
              onClick={handleCopy}
            />
            <div>{textToCopy}</div>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div
            className="rounded-xl mt-5 cursor-pointer p-5 bg-black"
            onClick={() =>
              window.open(
                "https://jup.ag/swap/SOL-DHoadXCbf6TcadkcMGJ8kFRdDa2sXPQ1KrgodUDRpump"
              )
            }
          >
            <div className="text-center text-white text-xl sm:text-4xl font-extrabold ">
              BUY $CHIIKAWA
            </div>
          </div>
        </div>
        <div className="text-center text-white text-5xl font-extrabold text-outline py-5">
          Chart
        </div>
        <div className="flex flex-row justify-center w-full">
          <iframe
            className="sm:w-8/12 w-full sm:px-0 sm:h-[600px] h-96"
            src="https://dexscreener.com/solana/DHoadXCbf6TcadkcMGJ8kFRdDa2sXPQ1KrgodUDRpump?embed=1&amp;theme=dark"
          />
        </div>
      </main>
    </div>
  );
}
