import React from "react";
import Title from "../Title/Title";
import rocketImage from "../../assets/images/rocket.png";
import Course from "../Course/Course";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Number = () => {
  const { t } = useTranslation()
  const numbersData = [
    {
      num: 4,
      text: t("brands"),
    },
    {
      num: 10,
      text: t("dealer"),
    },
    {
      num: 60,
      text: t("employees"),
    },
    {
      num: 1000,
      text: t("clients"),
    },
  ];
  return (
    <section className="mb-[80px] pt-[50px] md:pt-[110px]" id="product">
      <div className="max-w-[1370px] w-full mx-auto px-[20px]">
        <Course />
        <div className="md:p-[50px] p-[20px] rounded-[24px] shadow-lg bg-white">
          <div data-aos="fade-up" style={{ fontFamily: "Unbounded, cursive" }}>
            <Title title={t("numbers")} />
          </div>
          <div className="flex-row md:flex items-center justify-between">
            {numbersData?.map((item, id) => {
              const { num, text } = item;
              return (
                <div className="text-center" key={id}>
                  <div className="text-center md:flex items-center">
                    <span
                      className="text-[#1a202c] text-[32px] sm:text-[45px] md:text-[55px] lg:text-[62px] font-semibold lading-[35px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px]"
                      style={{ fontFamily: "Unbounded, cursive" }}
                    >
                      {num}
                    </span>
                    <span className="text-[#110d60] text-[32px] sm:text-[45px] md:text-[55px] lg:text-[62px] font-semibold lading-[35px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px]">
                      +
                    </span>
                  </div>
                  <p className="text-[#2a3437] text-[18px] leading-[22px] font-normal">
                    {text}
                  </p>
                </div>
              );
            })}
            <img className="hidden md:block" src={rocketImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Number;
