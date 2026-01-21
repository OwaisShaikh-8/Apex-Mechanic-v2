import React, { ReactNode } from "react";
type field = {
  bg: string;
  heading: ReactNode;
  detail: ReactNode;
  buttonColor: string;
  buttonTxtColor: string;
  NoCredit: ReactNode;
};

const TrialDemoCard = (props: field) => {
  return (
    <div className="p-[40px] ">
      <div>
        <h3 className="font-medium text-[32px] leading-none tracking-tight">
          {props.heading}
        </h3>
        <p className="font-regular text-[16px] leading-none tracking-tight mt-[14px]">
          {props.detail}
        </p>
      </div>
      <div className="flex gap-[16px] items-center">
        <button className="">Start free trial</button>
        <p>No credit card required</p>
      </div>
    </div>
  );
};

export default TrialDemoCard;
