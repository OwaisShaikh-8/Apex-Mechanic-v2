"use client";

import Image from "next/image";
import React from "react";
import img from "@/assets/images/Step1img.webp"
const StepsCard = () => {
  return (
    <div className="group border border-(--color-border) max-w-[393px] w-full relative cursor-pointer hover:rotate-5 transition-transform duration-300">
      <span className="group-hover:bg-(--color-primary) group-hover:text-cyan-50 px-[12px] py-[8px] text-[14px] leading-tight tracking-tight transition-all duration-300 absolute border-r border-b border-(--color-border)">
        Step 1
      </span>

      <div className="p-[20px] mt-[44px]">
        
        <h3 className="text-regular text-[24px] leading-none tracking-tight">

            Customer booked an appointment with online booking
        </h3>
        <p className="mt-[8px] mb-[20px] text-(--color-para) text-[16px] leading-5 tracking-tight text-regular">
          Figma is a powerful design tool that allows you to create and manage
          component variants with ease. You can resize.
        </p>
        <div className="flex gap-[8px] flex-wrap">
          <span className="py-[4px] px-[6px] rounded-[8px] bg-[#F1F1F1] text-black font-medium text-[14px] leading-none tracking-tight ">Book Appointment</span>
     
        </div>
      </div>
        
    </div>
  );
};

export default StepsCard;
