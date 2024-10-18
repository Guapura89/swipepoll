"use client";

import { LinkCardProps } from "@/app/interfaces/linkCard.interface";
import { ArrowRight } from "react-feather";

export const LinkCard = ({ title, description, url, icon }: LinkCardProps) => {
  const greeting = (): void =>  {
    console.log('hello');
  }

  return (
    <div 
      className="border-4 text-accent landscape:hover:cursor-pointer landscape:hover:scale-105 transition-all ease-linear duration-150 border-accent rounded-2xl flex p-2 items-center justify-between h-auto gap-2"
      onClick={greeting}
    >
      <div className="grid place-items-center rounded-lg w-20 lg:w-10 h-16 font-bold">
        {icon}
      </div>
      <div className="text-left text-nowrap ">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p> 
      </div>
      <div className="grid place-items-center rounded-lg w-20 h-16 font-bold">
        <ArrowRight size={40} />
      </div>
    </div>
  );
};