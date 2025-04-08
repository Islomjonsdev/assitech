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
    <section className="mb-[10px] md:mb-[110px]">
      <div className="mb-[24px] md:mb-[40px]" data-aos="fade-up">
        <Title title="Курсы, которые у нас есть" />
      </div>
      <div>
        {courseData?.map((item, id) => {
          const { body1, body2, body3, body4, body5 } = item;
          return (
            <div key={id}>
              {[body1, body2, body3, body4, body5].map((text, index) => (
                <p
                  key={index}
                  className="text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#1a202c] my-[8px] md:my-[10px]"
                >
                  {text}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Course;
