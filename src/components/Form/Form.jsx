import React from "react";
import homeImage from "../../assets/images/home.jpeg";
import smsImage from "../../assets/images/sms.jpeg";
import callImage from "../../assets/images/call.jpeg";
import clockImage from "../../assets/images/clock.jpeg";
import SendForm from "../SendForm/SendForm";
import formImg from "../../assets/images/formImage.png";

const Form = () => {
  const contactData = [
    {
      image: homeImage,
      lines: [
        {
          street: "Massiv 11 52B, Yunusobod district",
          location: "Tashkent, Uzbekistan",
        },
      ],
    },
    {
      image: smsImage,
      lines: [
        {
          street: "sales@assitech.uz",
          location: "Ceo@assitech.uz",
          email: "Sevinch@assitech.uz",
        },
      ],
    },
    {
      image: callImage,
      lines: [
        {
          street: "+998 99 815 98 85",
        },
      ],
    },
    {
      image: clockImage,
      lines: [
        {
          street: "Пн-Пт с 09:00 до 18:00 Ташкент",
        },
      ],
    },
  ];
  return (
    <section className="py-[35px] relative">
      <div className="max-w-[1118px] w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-[464px] bg-[#8a2be2] py-[23px] px-[70px] text-white">
            <SendForm />
          </div>

          <div className="w-full md:w-[654px] bg-[#1e2e3e] py-[20px] px-[70px]">
            <div className="flex flex-col items-center">
              <h3 className="text-[30px] font-semibold leading-[35px] text-white">
                Контактная информация
              </h3>
              <p className="my-[20px] text-[18px] text-white leading-[25px] text-white">
                Вы можете получить больше информации с помощью этих контактных
                данных
              </p>
            </div>

            <div>
              {contactData?.map(({ image, lines }, index) => (
                <div
                  className="flex items-center gap-[20px] my-[10px]"
                  key={index}
                >
                  <img src={image} alt="" />
                  <div>
                    {lines?.map(({ street, location, email }, i) => (
                      <div key={i}>
                        <p className="text-white text-[16px] leading-[24px]">
                          {street}
                        </p>
                        <p className="text-white text-[16px] leading-[24px]">
                          {location}
                        </p>
                        <p className="text-white text-[16px] leading-[24px]">
                          {email}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          className="absolute top-[-140px] left-[50px]"
          src={formImg}
          alt="formImg"
          width={362}
          height={362}
        />
      </div>
    </section>
  );
};

export default Form;
