import Head from "next/head";
import Image from "next/image";
import "../global.css";
import chiikawaImg from "../public/chiikawa.webp";
import chiikawaImg2 from "../public/chiikawa2.webp";
import tokenImg from "../public/token.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import solanaImg from "../public/solana.png";
import chiyiImg from "../public/chiyi.png";
import usagiImg from "../public/usagi.png";
import hachiwareImg from "../public/hachiware.png";
import yoroiImg from "../public/yoroi.png";

export default function Home() {
  const textToCopy = "DHoadXCbf6TcadkcMGJ8kFRdDa2sXPQ1KrgodUDRpump";
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
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
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DVC4WWGM9S"
      ></Script>
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DVC4WWGM9S');
        `}
      </Script>
      <Analytics />

      <main className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-700">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-700 sm:p-10 p-5">
          <div className="flex flex-row justify-center">
            <Image src={chiikawaImg} width={500} height={100} alt="chiikawa" />
          </div>
          <h1 className="text-center text-white text-5xl  sm:text-7xl font-extrabold text-outline">
            CHIIKAWA FAN TOKEN
          </h1>
          <h2 className="text-center text-white text-3xl sm:text-4xl font-extrabold text-outline pt-20">
            Onboarding Chiikawa fans on-chain
          </h2>
          <div className="text-center text-white text-3xl font-extrabold text-outline pt-20">
            Contract Address
          </div>
          <div className="flex flex-col items-center gap-4 p-4">
            <div className="border-2 sm:text-base text-2xs bg-white border-black flex flex-row justify-between items-center p-2 sm:px-4 rounded-lg gap-x-2 sm:gap-x-5">
              {!copied ? (
                <FaRegCopy
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleCopy}
                />
              ) : (
                <IoCheckmarkSharp className="w-6 h-6" />
              )}

              <div>{textToCopy}</div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center pt-16 gap-x-5 ">
            <div className="text-white text-2xl sm:text-3xl font-bold text-outline">
              Powered by
            </div>
            <Image
              src={solanaImg}
              alt="Solana"
              className="sm:w-48 sm:h-10 w-32 h-8"
            />
          </div>
        </div>
        <div className="py-20">
          <h2 className="text-center text-white text-3xl sm:text-5xl font-extrabold text-outline py-10 sm:py-20">
            What is $Chiikawa?
          </h2>
          <div className="flex sm:flex-row flex-col justify-center gap-x-10 items-center">
            <Image
              src={tokenImg}
              className="sm:w-1/4 w-1/2"
              alt="chiikawa fan token"
            />
            <div className="pt-5 sm:w-3/5 w-5/6 flex flex-col items-center">
              <div className="text-center text-white text-xl sm:text-3xl font-extrabold text-outline   tracking-wider leading-9">
                The CHIIKAWA Fan Token is a vibrant, community-driven
                cryptocurrency built on the Solana blockchain, crafted to bring
                fans of the beloved Chiikawa characters closer together through
                a shared digital economy. <br /> <br /> With a warm and
                welcoming community at its heart, the token fosters a sense of
                belonging and excitement, offering fans opportunities to
                connect, collaborate, and celebrate their love for Chiikawa.
              </div>
              <div
                className="rounded-xl mt-10 p-5 cursor-pointer bg-black w-5/6 sm:w-1/2"
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
          </div>
        </div>
        <div className="p-5 space-y-5">
          <h2 className="text-center text-white text-3xl sm:text-5xl font-extrabold text-outline  py-10">
            Tokenomics
          </h2>
          <div className="flex flex-row justify-center items-center space-x-5 sm:space-x-10">
            <Image src={chiyiImg} alt="chiikawa" className="sm:w-60 w-56" />
            <div className="space-y-5">
              <div className="text-white text-2xl sm:text-3xl font-extrabold text-outline">
                1 Billion Tokens
              </div>
              <div className="text-black text-lg sm:text-xl font-bold">
                100% of tokens are in circulation <br />
                Total supply is limited and owned by the community
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-5 sm:space-x-10">
            <div className="space-y-5">
              <div className="text-white text-2xl sm:text-3xl font-extrabold text-outline">
                No Taxes
              </div>
              <div className="text-black text-lg sm:text-xl font-bold">
                No buy / sell tax when trading
              </div>
            </div>
            <Image src={usagiImg} alt="chiikawa" className="sm:w-48 w-28" />
          </div>
          <div className="flex flex-row justify-center items-center space-x-10 sm:space-x-16">
            <Image src={hachiwareImg} alt="chiikawa" className="sm:w-48 w-24" />
            <div className="space-y-5">
              <div className="text-white text-2xl sm:text-3xl font-extrabold text-outline">
                Liquidity Burnt
              </div>
              <div className="text-black text-lg sm:text-xl font-bold">
                Contract renounced <br /> 100% liquidity burnt
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <div className="space-y-5">
              <div className="text-white text-2xl sm:text-3xl font-extrabold text-outline">
                Coming Soon
              </div>
              <div className="text-black text-lg sm:text-xl font-bold">
                AI agent integration
              </div>
            </div>
            <Image src={yoroiImg} alt="chiikawa" className="sm:w-60 w-40" />
          </div>
        </div>
        <div className=" p-10">
          <h2 className="text-center text-white sm:text-5xl text-3xl font-extrabold text-outline py-10">
            Be apart of our growing community!
          </h2>
          <div className="flex flex-row justify-center pt-20">
            <Image
              src={chiikawaImg2}
              alt="chiikawa"
              className="lg:w-1/3 w-full rounded-full border-black border-2"
            />
          </div>
          <h3 className="text-center text-white sm:text-5xl text-3xl font-extrabold text-outline pt-20">
            Social links
          </h3>
          <div className="flex flex-row justify-center p-5 sm:p-10 space-x-10 sm:space-x-20">
            <div className="lg:w-20 lg:h-20 w-14 h-14 bg-black text-white  border-black border-4 hover:bg-white hover:text-black flex flex-row justify-center items-center rounded-2xl">
              <FaXTwitter
                className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                onClick={() => window.open("https://x.com/WeLoveChiikawa")}
              />
            </div>
            <div className="lg:w-20 lg:h-20 w-14 h-14 bg-black text-white border-black border-4 hover:bg-white hover:text-black flex flex-row justify-center items-center rounded-2xl">
              <FaTiktok
                className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.tiktok.com/@lovechiikawa0?_t=8raoH8hBLL6&_r=1"
                  )
                }
              />
            </div>
            <div className="lg:w-20 lg:h-20 w-14 h-14 bg-black text-white border-black hover:bg-white hover:text-black border-4 flex flex-row justify-center items-center rounded-2xl">
              <FaTelegramPlane
                className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                onClick={() => window.open("https://t.me/CTOCHIIKAWA")}
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-400 to-blue-700 pb-20 p-5">
          <div className="text-center text-white text-3xl sm:text-5xl font-extrabold text-outline py-10">
            Chart
          </div>
          <div className="flex flex-row justify-center w-full">
            <iframe
              className="sm:w-8/12 w-full sm:px-0 sm:h-[600px] h-[500px]"
              src="https://dexscreener.com/solana/DHoadXCbf6TcadkcMGJ8kFRdDa2sXPQ1KrgodUDRpump?embed=1&amp;theme=dark"
            />
          </div>
          <div className="text-center pt-10 text-white font-extrabold text-outline">
            {new Date().getFullYear()} © all rights reserved
          </div>
        </div>
      </main>
    </div>
  );
}
