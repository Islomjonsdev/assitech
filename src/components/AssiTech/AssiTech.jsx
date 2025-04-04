import AOS from "aos";
import React, { useEffect } from "react";
import Title from "../Title/Title";
import "aos/dist/aos.css";
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

        <div className="flex items-center justify-between">
          <div className="max-w-[900px] w-full flex justify-between">
            {textData?.map((item, id) => (
              <div className="max-w-[430px] w-full" key={id} data-aos="fade-up">
                <p className="text-4 leading-6 font-normal my-[10px] tracking-[0.3px] text-[#2E3A6B]">
                  {item?.text1}
                </p>
                <p className="text-4 leading-6 font-normal my-[10px] tracking-[0.3px] text-[#2E3A6B]">
                  {item?.text2}
                </p>
                <p className="text-4 leading-6 font-normal my-[10px] tracking-[0.3px] text-[#2E3A6B]">
                  {item?.text3}
                </p>
                <p className="text-4 leading-6 font-normal my-[10px] tracking-[0.3px] text-[#2E3A6B]">
                  {item?.text4}
                </p>
              </div>
            ))}
          </div>
          <div data-aos="fade-up">
            <img
              src={assiTechImage}
              alt="assiTechImage"
              width={400}
              height={136}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssiTech;
