"use client";

import Image from "next/image";
import React,{ReactNode} from "react";

type CardFields = {
  cardNo: string;
  heading: ReactNode;
  detail: string;
  chips: string[];
  img: any;
};



const StepsCard = (props:CardFields) => {
  return (
    <div className="gradient-border group ">
    <div className=" border border-(--color-border) max-w-[393px] w-full relative cursor-pointer ">
      <span className="group-hover:bg-(--color-primary) group-hover:text-white px-[12px] py-[8px] text-[14px] leading-tight tracking-tight transition-all duration-300 absolute border-r border-b border-(--color-border)">
        {props.cardNo}
      </span>

      <div className="p-[20px] mt-[44px]">
        


        <h3 className="text-regular text-[24px] leading-none tracking-tight">{props.heading} </h3>
        
          
        <p className="mt-[8px] mb-[20px] text-(--color-para) text-[16px] leading-5 tracking-tight text-regular">
          Figma is a powerful design tool that allows you to create and manage
          component variants with ease. You can resize.
        </p>
        <div className="flex gap-[8px] flex-wrap">
            {props.chips.map((chip, i) => (
            <span
              key={i}
              className="py-[4px] px-[6px] rounded-[8px] bg-[#F1F1F1] text-black font-medium tracking-tighter text-[14px]"
            >
              {chip}
            </span>
          ))}
          
     
        </div>
      </div>
      <div className="h-[260px] w-full absolute relative">
        <Image src={props.img} alt="cardimg" fill className="object-cover"/>
      </div>
    </div>
    </div>
  );
};

export default StepsCard;
