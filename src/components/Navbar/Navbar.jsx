import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import headerLogo from "../../assets/images/logo.jpg";
import uzbekFlag from "../../assets/images/uzbek.png";
import russFlag from "../../assets/images/russ.png";
import engFlag from "../../assets/images/eng.png";
import i18n from "../../locales/i18next";
import { useTranslation } from "react-i18next";
import HeaderModal from "../ui/header-modal";
import { FiX } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookSquare } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(russFlag);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const linkData = [
    { label: t("about_us"), to: "#about_us" },
    { label: t("product"), to: "#product" },
    { label: t("services"), to: "#services" },
    { label: t("contact"), to: "#contact" },
    { label: t("install"), to: "/" },
  ];

  const languages = [
    { flag: uzbekFlag, lang: "Uzbek", code: "uz" },
    { flag: russFlag, lang: "Russian", code: "ru" },
    { flag: engFlag, lang: "English", code: "en" },
  ];

  const changeLanguage = (langCode, flag) => {
    i18n.changeLanguage(langCode);
    setSelectedFlag(flag);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="pt-[20px] pb-[8px]">
        <div className="max-w-[1370px] w-full mx-auto px-[20px]">
          <div className="flex items-center justify-between">
            <Link>
              <img
                className="md:w-[220px] h-[65px]"
                src={headerLogo}
                alt="headerLogo"
              />
            </Link>

            <div className="flex items-center gap-[25px]">
              <ul className="hidden md:flex items-center gap-[25px]">
                {linkData.map((link, id) => (
                  <li key={id}>
                    <a
                      href={link.to}
                      className="relative text-[#2E3A6B] font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#2E3A6B] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-white p-2 rounded-md cursor-pointer"
                >
                  <img
                    src={selectedFlag}
                    alt="Selected Language"
                    className="w-6 h-6"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code, lang.flag)}
                        className="flex items-center gap-2 p-2 hover:bg-gray-200 w-full cursor-pointer"
                      >
                        <img
                          src={lang.flag}
                          alt={lang.lang}
                          className="w-6 h-6"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="text-white bg-[#c3242a] py-[5px] px-[10px] w-[35px] rounded-[5px] cursor-pointer flex items-center justify-center md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <IoMdMenu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <HeaderModal close={setIsOpen}>
          <div className="bg-[#2E3A6B] h-[100%] pt-[20px] pl-[40px]">
            <div
              className="bg-[#181864] w-[35px] h-[35px] flex items-center justify-center rounded-[50%] cursor-pointer mb-[50px]"
              onClick={() => setIsOpen(false)}
            >
              <FiX className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-[25px]">
              <ul className="flex flex-col gap-[25px]">
                {linkData.map((link, id) => (
                  <li key={id}>
                    <a
                      href={link.to}
                      className="relative text-white font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-[25px]">
                <a href="https://www.instagram.com" target="_blank">
                  <IoLogoInstagram className="text-white w-[26px] h-[26px]" />
                </a>
                <a href="https://telegram.org" target="_blank">
                  <LiaTelegramPlane className="text-white w-[26px] h-[26px]" />
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookSquare className="text-white w-[26px] h-[26px]" />
                </a>
              </div>
              <a
                className="text-white text-[16px] leading-[24px] font-normal"
                href="tel:+998998159885"
              >
                +998 99 815 98 85
              </a>
            </div>
          </div>
        </HeaderModal>
      )}
    </>
  );
};

export default Navbar;
