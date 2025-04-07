import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation()
  const data = {
    location: "Tashkent, Olmazor Yunusobod, massiv 11 52B",
    phone: "+998 99 815 98 85",
    mail: "sales@assitech.uzCeo@assitech.uz",
    mail1: "Sevinch@assitech.uz",
    schedule: "Monday - Friday: 9:00 - 18:00",
  };
  return (
    <footer className="mt-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full py-6 px-6 md:px-20 bg-[#110d60] ">
          <div className="mt-[20px] mb-[50px]">
            <h3 className="text-[36px] text-white font-bold ">{t("contact")}</h3>
          </div>

          <ul className="mb-[60px]">
            <li className="mb-[25px]">
              <span className="font-semibold text-[#edcb3f] text-[18px] my-2 leading-[24px]">
                {t("company")}
              </span>
              <p className="text-white text-[16px]">{data?.location}</p>
            </li>
            <li className="mb-[25px]">
              <span className="font-semibold text-[#edcb3f] text-[18px] my-2 leading-[24px]">
                {t("phone")}
              </span>
              <p className="text-white text-[16px]">{data?.phone}</p>
            </li>
            <li className="mb-[25px]">
              <span className="font-semibold text-[#edcb3f] text-[18px] my-2 leading-[24px]">
                {t("mail")}
              </span>
              <p className="text-white text-[16px]">{data?.mail}</p>
              <p className="text-white text-[16px]">{data?.mail1}</p>
            </li>
            <li className="mb-[25px]">
              <span className="font-semibold text-[#edcb3f] text-[18px] my-2 leading-[24px]">
                {t("schedule")}
              </span>
              <p className="text-white text-[16px]">{data?.schedule}</p>
            </li>
            <li>
              <span className="font-semibold text-[#edcb3f] text-[18px] my-2 leading-[24px]">
                {t("networks")}
              </span>
              <div className="flex items-center gap-[15px] ">
                <a className="text-white" href="#">
                  <IoLogoInstagram className="w-[26px] h-[26px]" />
                </a>
                <a className="text-white" href="#">
                  <BsTelegram className="w-[26px] h-[26px]" />
                </a>
                <a className="text-white" href="#">
                  <FaFacebookSquare className="w-[26px] h-[26px]" />
                </a>
              </div>
            </li>
          </ul>

          <p className="text-[grey] text-4 leading-[24px] font-normal">© 2024 ASSI Tech. All rights reserved.</p>
        </div>

        <div className=" w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17933859.238832366!2d51.87532884400479!3d41.31249160280759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6c3db31fc3%3A0x79cba4505393ff63!2sUzbekistan!5e0!3m2!1sen!2s!4v1712308624472!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Uzbekistan Map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
