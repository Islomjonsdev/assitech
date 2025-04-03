import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookSquare } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation()
  return (
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
            <button className="text-white cursor-pointer bg-[#c3242a] max-w-[120px] w-full h-[40px] rounded-[12px] text-[16px] leading-[24px]">
              {t("contact")}
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
