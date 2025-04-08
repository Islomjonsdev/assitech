import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Title/Title";

const Course = () => {
  const { t } = useTranslation()
  const courseData = [
    {
      body1: t("text1"),
      body2: t("text2"),
      body3: t("text3"),
      body4: t("text4"),
      body5: t("text5"),
    },
  ];

  return (
    <section className="mb-[10px] md:mb-[110px]">
      <div className="mb-[24px] md:mb-[40px]" data-aos="fade-up">
        <Title title={t("courses")} />
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
