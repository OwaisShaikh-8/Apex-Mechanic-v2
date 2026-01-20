import Image from "next/image";
import gReview from "../assets/images/g-review.webp";
import FeaturesList from "@/components/FeaturesList";
import BrandsMarque from "@/components/BrandsMarque";
import StepsCard from "@/components/StepsCard";
const features = [
  {
    name: "Google Review",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M12.9482 7.05491C12.1941 6.30014 11.1519 5.83325 10.0007 5.83325C7.69947 5.83325 5.83398 7.69874 5.83398 9.99992C5.83398 12.3011 7.69947 14.1666 10.0007 14.1666C12.3018 14.1666 14.1673 12.3011 14.1673 9.99992H10.0007"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6024 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39697 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6024 5.39697 18.3334 9.99935 18.3334Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Online Booking",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6025 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39698 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6025 5.39698 18.3334 9.99935 18.3334Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.25 10.0001C6.25 15.0001 10 18.3334 10 18.3334C10 18.3334 13.75 15.0001 13.75 10.0001C13.75 5.00008 10 1.66675 10 1.66675C10 1.66675 6.25 5.00008 6.25 10.0001Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3327 10H1.66602"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    name: "Invoicing",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M6.66667 8.33325H5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6667 5H5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.666 1.66675H3.33268C2.41221 1.66675 1.66602 2.41294 1.66602 3.33341V17.9167L4.99935 16.2501L8.33268 18.3334L11.666 16.2501L14.9993 17.9167V6.66675"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1428 9.92509C11.3316 10.2141 11.7189 10.2953 12.0079 10.1065C12.2968 9.91767 12.378 9.53034 12.1892 9.24142L11.1428 9.92509ZM9.68929 11.7414C9.50046 11.4524 9.11321 11.3713 8.82421 11.56C8.53529 11.7488 8.45404 12.1362 8.64288 12.4251L9.68929 11.7414ZM9.79104 8.95825C9.79104 9.30342 10.0709 9.58325 10.416 9.58325C10.7612 9.58325 11.041 9.30342 11.041 8.95825H9.79104ZM11.041 8.33325C11.041 7.98808 10.7612 7.70825 10.416 7.70825C10.0709 7.70825 9.79104 7.98808 9.79104 8.33325H11.041ZM11.041 12.7083C11.041 12.3631 10.7612 12.0833 10.416 12.0833C10.0709 12.0833 9.79104 12.3631 9.79104 12.7083H11.041ZM9.79104 13.3333C9.79104 13.6784 10.0709 13.9583 10.416 13.9583C10.7612 13.9583 11.041 13.6784 11.041 13.3333H9.79104ZM10.443 9.58325C10.769 9.58325 11.0218 9.73992 11.1428 9.92509L12.1892 9.24142C11.822 8.67934 11.1622 8.33325 10.443 8.33325V9.58325ZM10.443 8.33325C10.0396 8.33325 9.59579 8.43259 9.23204 8.66784C8.85179 8.91375 8.54104 9.32817 8.54104 9.89575H9.79104C9.79104 9.83834 9.80804 9.784 9.91096 9.71742C10.0303 9.64017 10.225 9.58325 10.443 9.58325V8.33325ZM8.54104 9.89575C8.54104 10.1828 8.60229 10.4514 8.73863 10.6865C8.87554 10.9226 9.06671 11.0877 9.26854 11.1999C9.64738 11.4104 10.0901 11.4478 10.3952 11.4579L10.4369 10.2086C10.1583 10.1993 9.97613 10.1631 9.87579 10.1073C9.83813 10.0863 9.82621 10.0702 9.81988 10.0593C9.81313 10.0476 9.79104 10.0039 9.79104 9.89575H8.54104ZM10.389 12.0833C10.063 12.0833 9.81029 11.9266 9.68929 11.7414L8.64288 12.4251C9.01004 12.9872 9.66988 13.3333 10.389 13.3333V12.0833ZM10.389 13.3333C10.7925 13.3333 11.2363 13.2339 11.6 12.9987C11.9803 12.7528 12.291 12.3383 12.291 11.7708H11.041C11.041 11.8282 11.024 11.8825 10.9211 11.9491C10.8018 12.0263 10.6071 12.0833 10.389 12.0833V13.3333ZM12.291 11.7708C12.291 11.4837 12.2298 11.2151 12.0935 10.98C11.9565 10.7439 11.7654 10.5788 11.5635 10.4666C11.1847 10.2561 10.742 10.2188 10.4369 10.2086L10.3952 11.4579C10.6738 11.4672 10.856 11.5034 10.9563 11.5592C10.994 11.5802 11.0059 11.5963 11.0122 11.6072C11.019 11.6189 11.041 11.6626 11.041 11.7708H12.291ZM11.041 8.95825V8.33325H9.79104V8.95825H11.041ZM9.79104 12.7083V13.3333H11.041V12.7083H9.79104Z"
          fill="currentColor"
        />
        <path
          d="M15 6.66675H18.3333V3.33341C18.3333 2.41294 17.5872 1.66675 16.6667 1.66675C15.7462 1.66675 15 2.41294 15 3.33341V6.66675Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Estimates",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M15 7.08341V3.33341C15 2.41294 14.2538 1.66675 13.3333 1.66675H4.16667C3.24619 1.66675 2.5 2.41294 2.5 3.33341V13.3334C2.5 14.2539 3.24619 15.0001 4.16667 15.0001H9.58333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 5H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8.33325H5.83333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33398 8.33325H9.16732"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.666 8.33325H12.4993"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 11.6667H5.83333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33398 11.6667H9.16732"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 10V11.1363M15 11.1363C13.7343 11.1363 12.7083 11.8399 12.7083 12.7077C12.7083 13.5755 13.3333 14.0545 15 14.0545C16.6667 14.0545 17.5 14.5034 17.5 15.6258C17.5 16.7481 16.3807 17.197 15 17.197M15 11.1363C16.2657 11.1363 17.2917 11.8399 17.2917 12.7077M15 17.197V18.3333M15 17.197C13.6192 17.197 12.5 16.4935 12.5 15.6258"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Inventory",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M9.99996 8.33341L17.5 5.00008L9.99996 1.66675L2.5 5.00008L9.99996 8.33341Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.75 3.33325L6.25 6.66659"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 5V15L9.99671 18.3333M9.99671 18.3333L17.5 15V5.01131M9.99671 18.3333V8.33333"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 9.16675L7.08333 10.0001"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Appointments",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M13.75 1.66675V5.00008M6.25 1.66675V5.00008"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 8.33325H17.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.33789 13.75L9.00458 15.4167L13.1712 11.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Record Payments",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M13.7493 6.25H16.666C17.5865 6.25 18.3327 6.99619 18.3327 7.91667V16.25C18.3327 17.1705 17.5865 17.9167 16.666 17.9167H3.33268C2.41221 17.9167 1.66602 17.1705 1.66602 16.25V7.91667C1.66602 6.99619 2.41221 6.25 3.33268 6.25H6.24935"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 12.0833C12.5 13.464 11.3807 14.5833 10 14.5833C8.61925 14.5833 7.5 13.464 7.5 12.0833C7.5 10.7025 8.61925 9.58325 10 9.58325C11.3807 9.58325 12.5 10.7025 12.5 12.0833Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 9.58333C16.4924 9.58333 15 8.09095 15 6.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66602 9.58333C3.50697 9.58333 4.99935 8.09095 4.99935 6.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 14.5833C16.4924 14.5833 15 16.0757 15 17.9166"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66602 14.5833C3.50697 14.5833 4.99935 16.0757 4.99935 17.9166"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0827 4.58325L9.99935 6.66659L7.91602 4.58325M9.99935 2.08325V6.15927"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Reporting",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M5.83398 14.1666V10.8333M10.0007 14.1666V5.83325M14.1673 14.1666V9.16659"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9173 3.74992V16.2499C17.9173 17.1704 17.1712 17.9166 16.2507 17.9166H3.75065C2.83018 17.9166 2.08398 17.1704 2.08398 16.2499V3.74992C2.08398 2.82944 2.83018 2.08325 3.75065 2.08325H16.2507C17.1712 2.08325 17.9173 2.82944 17.9173 3.74992Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Messaging",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path
          d="M17.4993 7.50008C17.0827 4.3691 14.4598 1.93225 11.3011 1.72286C10.1713 1.64797 8.99176 1.64812 7.86429 1.72286C4.55274 1.94238 1.91492 4.61021 1.69787 7.95941C1.6554 8.61482 1.6554 9.29365 1.69787 9.94907C1.77692 11.1688 2.3179 12.2982 2.95477 13.252C3.32456 13.9196 3.08051 14.7529 2.69535 15.4808C2.41763 16.0056 2.27877 16.2681 2.39026 16.4576C2.50176 16.6471 2.7508 16.6532 3.2489 16.6653C4.23391 16.6892 4.89813 16.4107 5.42538 16.023C5.72441 15.8031 5.87393 15.6931 5.97699 15.6806C6.06083 15.6702 6.21072 15.7235 6.48214 15.8334"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2487 18.0396C10.1572 17.9055 8.49116 16.2751 8.35407 14.2284C8.32729 13.8279 8.32729 13.4131 8.35407 13.0125C8.49116 10.9658 10.1572 9.33539 12.2487 9.2013C12.9622 9.15547 13.7072 9.15564 14.4193 9.2013C16.5108 9.33539 18.1768 10.9658 18.3139 13.0125C18.3407 13.4131 18.3407 13.8279 18.3139 14.2284C18.2639 14.9738 17.9222 15.6641 17.5201 16.2468C17.2865 16.6549 17.4407 17.1641 17.6839 17.6089C17.8593 17.9296 17.947 18.09 17.8766 18.2059C17.8062 18.3217 17.6488 18.3254 17.3342 18.3328C16.7122 18.3474 16.2927 18.1772 15.9597 17.9402C15.7708 17.8059 15.6763 17.7387 15.6112 17.731C15.5462 17.7232 15.4181 17.7741 15.162 17.876C14.9318 17.9674 14.6645 18.0239 14.4193 18.0396C13.7072 18.0853 12.9622 18.0854 12.2487 18.0396Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-section container border-x border-(--color-border) pt-[100px] pb-[20px] px-[20px] flex flex-col gap-[50px]">
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
                    strokeWidth="1.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.91602 17.9166H16.2493"
                    stroke="#2C64DE"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
          <div className="hero-bg h-[643px] p-[28px] ">
            <FeaturesList />
            <Image
              className="absolute z-10 top-20 -right-55"
              src={gReview}
              alt="review-img"
              width={1000}
              height={420}
            />
          </div>
        </section>
        <BrandsMarque />
        <section className="container border-x border-(--color-border) py-[100px] !px-[40px] flex flex-col gap-[30px]">
          <div className="text-center flex flex-col gap-[16px]">
            <span className="flex gap-[4px] bg-(--bg-chips) p-[8px] mx-auto w-fit">
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
              User Journey
            </span>
            <h2 className="font-medium text-[48px] leading-tight tracking-tight text-black">
              From Booking to 5-Star Reviews,
              <br />
              <span className="bg-gradient-to-r from-[#2C64DE] via-[#3273FF] via-[#0049E6] to-[#2C64DE] bg-clip-text text-transparent">
                Done Automatically
              </span>
            </h2>
            <p className="text-(--color-para) text-[20px] leading-7 tracking-tight text-regular">
              Figma is a powerful design tool that allows you to create and
              manage component
              <br /> variants with ease. You can resize, arrange, and undo
              actions effortlessly.
            </p>
          </div>
          <div className="flex gap-[30px] ">
            <StepsCard/>
            <StepsCard/>
            <StepsCard/>
          </div>
        </section>
      </main>
    </>
  );
}
