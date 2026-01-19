import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-section container border-x border-(--color-border) pt-[100px] pb-[20px] px-[20px]">
          <div className=" text-center flex flex-col gap-[24px]">
            <div className="flex text-[14px] font-medium w-fit mx-auto gap-[12px] ">
              <span className="flex gap-[4px] bg-(--bg-chips) p-[8px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 9.16671C17.5 13.7917 14.3 18.1167 10 19.1667C5.7 18.1167 2.5 13.7917 2.5 9.16671V4.16671L10 0.833374L17.5 4.16671V9.16671ZM10 17.5C13.125 16.6667 15.8333 12.95 15.8333 9.35004V5.25004L10 2.65004L4.16667 5.25004V9.35004C4.16667 12.95 6.875 16.6667 10 17.5ZM12.5417 13.3334L9.975 11.7917L7.41667 13.3334L8.09167 10.4167L5.83333 8.46671L8.81667 8.20838L9.975 5.45837L11.1417 8.20004L14.125 8.45837L11.8583 10.4167L12.5417 13.3334Z"
                    fill="#2C64DE"
                  />
                </svg>
                Trusted by 30+ shops
              </span>
              <span className="flex gap-[4px] bg-(--bg-chips) p-[8px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.93801 12.5555C9.69393 12.7996 9.69393 13.1954 9.93801 13.4395C10.1821 13.6835 10.5778 13.6835 10.8218 13.4395L9.93801 12.5555ZM11.7362 12.5251C11.9803 12.281 11.9803 11.8854 11.7362 11.6413C11.4921 11.3972 11.0963 11.3972 10.8523 11.6413L11.7362 12.5251ZM12.474 10.0195C12.2299 10.2636 12.2299 10.6594 12.474 10.9035C12.7181 11.1475 13.1138 11.1475 13.3578 10.9035L12.474 10.0195ZM15.0243 9.23704C15.2683 8.99296 15.2683 8.59729 15.0243 8.35321C14.7802 8.10911 14.3844 8.10911 14.1403 8.35321L15.0243 9.23704ZM3.72407 13.2348C3.48 13.4789 3.48 13.8746 3.72407 14.1186C3.96816 14.3627 4.36388 14.3627 4.60796 14.1186L3.72407 13.2348ZM14.1912 4.53533C14.4353 4.29124 14.4353 3.89552 14.1912 3.65144C13.9471 3.40736 13.5514 3.40737 13.3073 3.65144L14.1912 4.53533ZM10.8218 13.4395L11.7362 12.5251L10.8523 11.6413L9.93801 12.5555L10.8218 13.4395ZM13.3578 10.9035L15.0243 9.23704L14.1403 8.35321L12.474 10.0195L13.3578 10.9035ZM4.60796 14.1186L14.1912 4.53533L13.3073 3.65144L3.72407 13.2348L4.60796 14.1186Z"
                    fill="#2C64DE"
                  />
                  <path
                    d="M12.3916 2.5624L17.4383 7.60917C18.077 8.24787 18.077 9.28337 17.4383 9.92212L9.92273 17.4377C9.28398 18.0764 8.24848 18.0764 7.60978 17.4377L2.56301 12.391C1.92431 11.7522 1.92431 10.7167 2.56301 10.078L10.0786 2.5624C10.7173 1.9237 11.7528 1.9237 12.3916 2.5624Z"
                    stroke="#2C64DE"
                    stroke-width="1.25"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91602 17.9166H16.2493"
                    stroke="#2C64DE"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Starting from $100/mo
              </span>
            </div>
            <h1 className="bg-gradient-to-b from-[#212121] to-[#4F5258] bg-clip-text text-transparent font-semibold text-[76px] leading-none tracking-tighter">
              All-in-One Software for
              <br />
              <span className="bg-gradient-to-r from-[#2C64DE] via-[#3273FF] via-[#0049E6] to-[#2C64DE] bg-clip-text text-transparent">
                Auto Repair Shops
              </span>
            </h1>
            <p className="text-(--color-para) text-[20px] leading-7 tracking-tight text-regular">
              Figma is a powerful design tool that allows you to create and
              manage component variants with <br /> ease. You can resize,
              arrange, and undo actions effortlessly.
            </p>
            <span className="w-fit mx-auto flex gap-[8px] text-[16px] font-semibold leading-none tracking-tight">
              <button className="rounded-[50px] border border-(--color-border) font-semibold text-black transition-all duration-300  px-[24px] py-[14px] cursor-pointer hover:bg-(--bg-chips)">
                Contact us
              </button>
              <button className="rounded-[50px] bg-(--color-primary)  text-white font-semibold transition-all duration-300 px-[24px] py-[14px] cursor-pointer hover:bg-(--color-hover-primary) ">
                Get Started
              </button>
            </span>
          </div>
          <div className="hero-bg">

          </div>
        </section>
      </main>
    </>
  );
}
