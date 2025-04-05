import React from "react";
import { IoIosCall } from "react-icons/io";

const SendForm = () => {
  return (
    <div>
      <div className="mb-[15px]">
        <h3 className="text-[30px] font-semibold leading-[35px] text-white text-center">
          What questions do you have for us?
        </h3>
      </div>

      <form>
          <div className="flex flex-col my-[25px]">
              <label className="mb-2 text-white text-[16px] leading-[22px] text-start">Enter your name <span>*</span></label>
              <input className="px-4 border border-white outline-none h-[48px] rounded-[12px]" type="text" placeholder="Enter your name" />
          </div>
          <div className="flex flex-col my-[25px] relative">
              <label className="mb-2 text-white text-[16px] leading-[22px] text-start"> Phone number <span>*</span></label>
              <input className="pl-[40px] pr-[16px] border border-white outline-none h-[48px] rounded-[12px] relative" type="tel" placeholder="Phone number" />
              <IoIosCall className="absolute top-[45px] left-[16px] w-4 h-4"/>
          </div>
          <div className="flex flex-col my-[25px]">
              <label className="mb-2 text-white text-[16px] leading-[22px] text-start">Your message <span>*</span></label>
              <textarea className="py-2 px-4 border border-white outline-none h-[48px] rounded-[12px] h-[117px]" placeholder="Your message " />
          </div>
          <button className="bg-white h-[45px] cursor-pointer w-full text-[#8a2be2] rounded-[20px] text-[18px] leading-[24px]font-bold">Sending</button>
      </form>
    </div>
  );
};

export default SendForm;
