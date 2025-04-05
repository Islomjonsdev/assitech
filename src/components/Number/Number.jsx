import React from "react";
import Title from "../Title/Title";
import rocketImage from "../../assets/images/rocket.png";
import Course from "../Course/Course";

const Number = () => {
  const numbersData = [
    {
      num: 4,
      text: "Brand",
    },
    {
      num: 10,
      text: "Dealers",
    },
    {
      num: 60,
      text: "Employees",
    },
    {
      num: 1000,
      text: "Clients",
    },
  ];
  return (
    <section className="mb-[80px]" id="product">
      <div className="max-w-[1370px] w-full mx-auto px-[20px]">
        <Course />
        <div className="p-[50px] rounded-[24px] shadow-lg bg-white">
          <div className="mb-[40px]" data-aos="fade-up" style={{ fontFamily: "Unbounded, cursive" }}>
            <Title title="We are in numbers" />
          </div>
          <div className="flex items-center justify-between">
            {numbersData?.map((item, id) => {
              const { num, text } = item;
              return (
                <div className="text-center" key={id}>
                  <div className="flex items-center">
                    <span className="text-[#1a202c] text-[62px] font-semibold leading-[80px]" style={{ fontFamily: "Unbounded, cursive" }}>
                      {num}
                    </span>
                    <span className="text-[#110d60] text-[62px] font-semibold leading-[80px]">
                      +
                    </span>
                  </div>
                  <p className="text-[#2a3437] text-[18px] leading-[22px] font-normal">
                    {text}
                  </p>
                </div>
              );
            })}
            <img src={rocketImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Number;
