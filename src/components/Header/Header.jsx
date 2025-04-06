import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookSquare } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ContactModal from "../ui/contact-modal";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  const [isOpenCotactModal, setIsOpenCotactModal] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <header className="mb-[25px]">
        <div className="bg-[#2E3A6B] h-[60px] flex items-center">
          <div className="max-w-[1370px] w-full mx-auto px-[20px]">
            <div className="flex items-center justify-end gap-[10px]">
              <a href="https://www.instagram.com" target="_blank">
                <IoLogoInstagram className="text-white w-4 h-4" />
              </a>
              <a href="https://telegram.org" target="_blank">
                <LiaTelegramPlane className="text-white w-4 h-4" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookSquare className="text-white w-4 h-4" />
              </a>
              <a
                className="text-white text-[16px] leading-[24px] font-normal"
                href="tel:+998998159885"
              >
                +998 99 815 98 85
              </a>
              <button
                className="text-white cursor-pointer bg-[#c3242a] max-w-[120px] w-full h-[40px] rounded-[12px] text-[16px] leading-[24px]"
                onClick={() => setIsOpenCotactModal(true)}
              >
                {t("contact")}
              </button>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
      {isOpenCotactModal && (
        <ContactModal close={setIsOpenCotactModal}>
          <div className="bg-white rounded-[4px] p-[15px]">
            <div className="">
              <h3 className="text-center text-[32px] text-[#2e3a6b] font-bold">
                What questions do you have for us?
              </h3>
            </div>

            <form>
              <div className="flex flex-col my-[25px]">
                <label className="mb-2 text-[#1a202c] text-[16px] leading-[22px] text-start">
                  Enter your name <span>*</span>
                </label>
                <input
                  className="px-4 border border-[grey] outline-none h-[48px] rounded-[8px]"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col my-[25px] relative">
                <label className="mb-2 text-[#1a202c] text-[16px] leading-[22px] text-start">
                  {" "}
                  Phone number <span>*</span>
                </label>
                <input
                  className="pl-[40px] pr-[16px] border border-[grey] outline-none h-[48px] rounded-[8px] relative"
                  type="tel"
                  placeholder="Phone number"
                />
                <IoIosCall className="absolute top-[45px] left-[16px] w-4 h-4" />
              </div>
              <div className="flex flex-col my-[25px]">
                <label className="mb-2 text-[#1a202c] text-[16px] leading-[22px] text-start">
                  Your message <span>*</span>
                </label>
                <textarea
                  className="py-2 px-4 border border-[grey] outline-none h-[48px] rounded-[8px] h-[117px]"
                  placeholder="Your message "
                />
              </div>
              <button className="bg-[#c32a2a] h-[45px] cursor-pointer w-full text-white rounded-[10px] text-[18px] leading-[24px] font-bold">
                Sending
              </button>
            </form>
          </div>
        </ContactModal>
      )}
    </>
  );
};

export default Header;
