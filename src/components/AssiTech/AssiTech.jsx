import AOS from "aos";
import React, { useEffect } from "react";
import Title from "../Title/Title";
// import "aos/dist/aos.css";
import assiTechImage from "../../assets/images/assiTech.jpg";
import { useTranslation } from "react-i18next";

const AssiTech = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  const { t } = useTranslation();

  const textData = [
    {
      text1: t("assaTech1"),
      text2: t("assatech2"),
    },
    {
      text1: t("assaTech3"),
      text2: t("assaTech4"),
      text3: t("assaTech5"),
      text4: t("assaTech6"),
    },
  ];

  return (
    <section className="py-[35px] mb-[15px] md:mb-[100px]" id="about_us">
      <div className="max-w-[1370px] w-full mx-auto px-[20px]">
        <div className="mb-[40px]" data-aos="fade-up">
          <Title title={"ASSI Tech"} />
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
          <div data-aos="fade-up" className="w-full max-w-[400px]">
            <img
              src={assiTechImage}
              alt="assiTechImage"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="w-full lg:max-w-[900px] flex flex-col lg:flex-row justify-between gap-6">
            {textData?.map((item, id) => (
              <div className="w-full" key={id} data-aos="fade-up">
                {item?.text1 && (
                  <p className="text-base leading-6 font-normal my-2 tracking-wide text-[#2E3A6B]">
                    {item.text1}
                  </p>
                )}
                {item?.text2 && (
                  <p className="text-base leading-6 font-normal my-2 tracking-wide text-[#2E3A6B]">
                    {item.text2}
                  </p>
                )}
                {item?.text3 && (
                  <p className="text-base leading-6 font-normal my-2 tracking-wide text-[#2E3A6B]">
                    {item.text3}
                  </p>
                )}
                {item?.text4 && (
                  <p className="text-base leading-6 font-normal my-2 tracking-wide text-[#2E3A6B]">
                    {item.text4}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssiTech;
