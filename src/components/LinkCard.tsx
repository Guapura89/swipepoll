"use client";

import { LinkCardProps } from "@/app/interfaces/linkCard.interface";
import { ArrowRight } from "react-feather";

export const LinkCard = ({ title, description, url, icon }: LinkCardProps) => {
  const greeting = () =>  {
    console.log('hello');
  }

  return (
    <div 
      className="border-8 text-accent border-accent rounded-2xl flex p-6 items-center justify-evenly h-auto gap-2"
      onClick={() => greeting()}
    >
      <div className="grid place-items-center rounded-lg w-20 h-16 font-bold">
        {icon}
      </div>
      <div className="text-left text-nowrap ">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p> 
      </div>
      <div className="grid place-items-center rounded-lg w-20 h-16 font-bold">
        <ArrowRight size={50} />
      </div>
    </div>
  );
};