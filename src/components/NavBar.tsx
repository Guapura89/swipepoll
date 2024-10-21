"use client";
import { Menu } from "react-feather";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X } from "react-feather";

import Logo from "@/assets/brand/swipepoll_horizontal.png";
import { Slide } from "react-awesome-reveal";
export const NavBar = () => {
  let [isShow, setIsShow] = useState<boolean>(false);
  
  const handleSetIsShow = () => {
    setIsShow(!isShow);
  }

  const sidebar = 
  <Slide 
    direction="right" 
    className="w-4/5 ease-linear absolute right-0 top-0 h-screen bg-primary z-10 py-4 px-6 text-dark"
  >
    <aside className="relative h-full pt-20 flex flex-col items-center justify-center">
      <button onClick={handleSetIsShow} className="grid place-items-center p-4 absolute top-4 right-4">
        <X size={40} />
      </button>
      <div className="flex flex-col gap-20 items-center text-dark">
        <ul className="flex flex-col items-center gap-4">
          {
            [["Home", "/"], ["How it works?", "#how-it-works"], ["About us", "#about-us"], ["Contact us", "#contact-us"]].map(([item, link], i) =>
              <li key={`link-${i}`}>
                <a href={link} className="hover:opacity-50 text-2xl font-bold hover:cursor-pointer transition-all duration-200 ease-linear">
                  {item}
                </a>
              </li>
            )
          }
        </ul>
        <Link 
          href="/dashboard" 
          className="btn btn-outline border-dark text-dark text-2xl hover:bg-dark hover:text-primary hover:border-dark btn-rounded transition-all duration-200 ease-linear"
        >
          Get started
        </Link>
      </div>
    </aside>
  </Slide> 


  return(
    <header id="header" className="w-full lg:w-4/5 mx-auto flex items-center justify-between pt-4 h-32 p-4 text-black relative">
      <div>
        <h1 className="text-4xl font-bold">
          <a href="/">
            <Image src={Logo} className={"mx-auto"} alt={"Logo"} width={200} />
          </a>
        </h1>
      </div>

      <div className="hidden lg:flex gap-4 items-center">
        <ul className="flex items-center gap-4">
          {
            [["Home", "/"], ["How it works?", "#how-it-works"], ["About us", "#about-us"], ["Contact us", "#contact-us"]].map(([item, link], i) =>
              <li key={`link-${i}`}>
                <a href={link} className="hover:opacity-50 text-lg font-bold hover:cursor-pointer transition-all duration-200 ease-linear">
                  {item}
                </a>
              </li>
            )
          }
        </ul>
        <Link href={"/dashboard"} className="btn btn-outline text-accent border-accent hover:bg-accent hover:border-accent hover:text-white btn-rounded transition-all duration-200 ease-linear">Get started</Link>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <button 
          className="flex items-center justify-center outline-none p-4 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200 ease-linear"
          onClick={handleSetIsShow}
        >
          <Menu size={24} />
        </button>
      </div>

      {isShow && sidebar}
    </header>
  );
}
