import React from "react";
import Image from "next/image";
import logo from "../assets/images/Logo.png"
const Navbar = () => {
  return (
    <>
      <header className="border-b border-(--color-border)">
        <nav className="border-x flex justify-between items-center border-(--color-border) container px-[40px] py-[16px]">
          <span className="flex gap-15">
            <figure className="flex gap-1.5 text-[16px] leading-[95%] tracking-[0%] font-semibold text-black items-center">
              <Image alt="logo" src={logo} width={32} height={32}/>
              Apex <br /> Mechanic
            </figure>
            <ul className="text-(--color-para) font-medium text-[14px]   leading-[140%] tracking-[-3%] flex items-center gap-[32px]">
              <li className="flex items-center gap-[2px]  transition-all duration-300 hover:scale-105">
                Features{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6L8 10L4 6"
                    stroke="#999696"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className=" hover:scale-105 transition-all duration-300">Success Stories</li>
              <li className=" hover:scale-105 transition-all duration-300">Pricing</li>
              <li className=" hover:scale-105 transition-all duration-300">About</li>
              <li className="flex items-center gap-[2px]  hover:scale-105 transition-all duration-300">
                Resources{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6L8 10L4 6"
                    stroke="#999696"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          </span>
          <span className="flex gap-[8px] text-[14px] leading-[140%] tracking-[-3%] " >
            <button className="px-4 font-medium  text-(--color-para)  border-none outline-none cursor-pointer transition-all duration-300 hover:scale-105 ">Login</button>
            <button className="rounded-[50px] border border-(--color-border) font-semibold text-black transition-all duration-300  px-[16px] py-[8px] cursor-pointer hover:bg-(--color-primary) hover:text-white">Contact us</button>
            <button className="rounded-[50px] bg-(--color-primary)  text-white font-semibold transition-all duration-300 px-[16px] py-[8px] cursor-pointer ">Get Started</button>
          </span>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
