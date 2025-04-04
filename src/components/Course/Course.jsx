import React from "react";
import Title from "../Title/Title";

const Course = () => {
  const courseData = [
    {
      body1: "НЕЙРОСОНОГРАФИЯ",
      body2: "НЕЙРОВЗРОСЛАЯ ЭХОКАРДИОГРАФИЯОНОГРАФИЯ",
      body3: "ДЕТСКАЯ ЭХОКАРДИОГРАФИЯ",
      body4: "АКУШЕРСТВО И ГИНЕКОЛОГИЯ",
      body5: "ФЕТАЛЬНАЯ ЭХОКАРДИОГРАФИЯ",
    },
  ];
  return (
    <section className="mb-[110px]">
      <div className="max-w-[1370px] w-full mx-auto px-[20px]">
        <div className="mb-[40px]" data-aos="fade-up">
          <Title title="Курсы, которые у нас есть" />
        </div>
        <div>
          {courseData?.map((item, id) => {
            const { body1, body2, body3, body4, body5 } = item;
            return (
              <div key={id}>
                <p className="text-[20px] leading-[28px] text-[#1a202c] my-[10px]">
                  {body1}
                </p>
                <p className="text-[20px] leading-[28px] text-[#1a202c] my-[10px]">
                  {body2}
                </p>
                <p className="text-[20px] leading-[28px] text-[#1a202c] my-[10px]">
                  {body3}
                </p>
                <p className="text-[20px] leading-[28px] text-[#1a202c] my-[10px]">
                  {body4}
                </p>
                <p className="text-[20px] leading-[28px] text-[#1a202c] my-[10px]">
                  {body5}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Course;
