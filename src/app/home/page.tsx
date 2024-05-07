/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "./footer";
import Logo from "../icons/logo";

const Page = () => {
  return (
    <>
      <div className="relative h-[700px] border-b-8 border-[#232323]">
        <div
          className="absolute inset-0 bg-[url(https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg)] bg-cover bg-center opacity-[0.3]"
          style={{ zIndex: -1 }}
        ></div>
        <div className="flex items-center justify-around pt-6">
          <div className="w-[9.25rem] h-[2.5rem]">
            <Logo />
          </div>
          <button className="rounded-md bg-[#E50914]  w-[75px] h-[32px] font-medium text-sm text-white">
            Sign In
          </button>
        </div>
        <div className="py-24">
          <div className="flex justify-center font-extrabold text-5xl pt-40 text-white">
            <h1>Unlimited movies, TV shows, and more</h1>
          </div>
          <p className="flex justify-center text-2xl text-white pt-5">
            Watch anywhere. Cancel anytime.
          </p>

          <div className="flex justify-center text-gray-100 text-xl pt-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="flex justify-center gap-2 pt-4">
            <div>
              <input
                type="text"
                id="fname"
                placeholder="Email address"
                className="bg-black border-2 text-white border-[#615E5F] w-96 h-14 rounded-md font-bold placeholder-white px-2"
              ></input>
            </div>
            <div>
              <button className="rounded-md bg-[#E50914] px-8 py-3 font-medium text-white text-xl ">
                {" "}
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="flex justify-center items-center  py-44 border-b-8 border-[#232323]">
        <div className="flex flex-col gap-4 ">
          <h1 className="font-black text-white text-5xl">Enjoy on your TV</h1>
          <p className="text-white text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, <br></br>Apple
            TV, Blu-ray players, and more.
          </p>
        </div>
        <div className="">
          <div className="absolute top-[1200px]">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="tv image"
            ></img>
          </div>
          <video
            className="video-file relative bottom-6 left-[85px] h-[262px]"
            controls
            loop
            autoPlay
            muted
          >
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source>
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
