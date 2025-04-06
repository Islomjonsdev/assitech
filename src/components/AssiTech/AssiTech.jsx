import AOS from "aos";
import React, { useEffect } from "react";
import Title from "../Title/Title";
// import "aos/dist/aos.css";
import assiTechImage from "../../assets/images/assiTech.jpg";

const AssiTech = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const textData = [
    {
      text1:
        "Наша компания ASSITECHBIO специализируется на: продаже и обслуживании ультразвуковых аппаратов и организации курсов УЗД.",
      text2:
        "Мы предлагаем широкий ассортимент оборудования различных производителей и ценовых категорий: от компактных портативных узи аппаратов для мобильных услуг до высокоточных стационарных установок для медицинских учреждений.",
    },
    {
      text1:
        "Мы работаем с проверенными поставщиками и гарантируем качество продукции, а также предоставляем гарантийное и послегарантийное обслуживание ультразвуковых аппаратов.",
      text2:
        "Наши специалисты имеют большой опыт в области медицинского оборудования и всегда готовы помочь с выбором и установкой необходимого оборудования.",
      text3:
        "Наша цель - обеспечить клиентов наилучшими ультразвуковыми аппаратами, помочь им оптимизировать свою работу и повысить эффективность диагностики и лечения пациентов.",
      text4:
        "Мы стремимся к долгосрочным отношениям с нашими клиентами, предлагая им только лучшее оборудование и сервис.",
    },
  ];

  return (
    <section className="mb-[100px]" id="about_us">
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
