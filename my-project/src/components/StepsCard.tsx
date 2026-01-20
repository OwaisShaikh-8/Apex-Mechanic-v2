"use client";

import React from "react";

const StepsCard = ({number}) => {
  return (
    <div className="group border border-(--color-border) max-w-[393px] w-full relative  ">
      <span className="group-hover:bg-(--color-primary) group-hover:text-cyan-50 px-[12px] py-[8px] text-[14px] leading-tight tracking-tight transition-all duration-300 absolute ">
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
        <div>
          <span>Book Appointment</span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default StepsCard;
