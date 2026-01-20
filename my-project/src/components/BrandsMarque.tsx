"use client";
import React from "react";
import Image from "next/image";

// Import brand images
import brand1 from "../assets/images/brand-1.png";
import brand2 from "../assets/images/brand-2.png";
import brand3 from "../assets/images/brand-3.png";
import brand4 from "../assets/images/brand-4.png";
import brand5 from "../assets/images/brand-5.png";
import brand6 from "../assets/images/brand-6.png";
import brand7 from "../assets/images/brand-7.png";
import brand8 from "../assets/images/brand-8.png";
import brand9 from "../assets/images/brand-9.png";
import brand10 from "../assets/images/brand-10.png";
import brand11 from "../assets/images/brand-11.png";
import brand12 from "../assets/images/brand-12.png";

const brandImages = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
];

const BrandsMarquee = () => {
  return (
    <div className="relative overflow-hidden border-t border-b border-(--color-border) py-[20px]">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Marquee content */}
      <div className="flex animate-marquee gap-8 whitespace-nowrap">
        {brandImages.concat(brandImages).map((img, index) => (
          <div
            key={index}
            className="inline-block w-[120px] h-[120px] flex-shrink-0"
          >
            <Image
              src={img}
              alt={`brand-${index + 1}`}
              width={120}
              height={120}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsMarquee;
