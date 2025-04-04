import swiperImg1 from "../../assets/images/swiperImage1.jpg";
import swiperImg2 from "../../assets/images/swiperImage2.jpg";
import swiperImg3 from "../../assets/images/swiperImage3.jpg";
import swiperImg4 from "../../assets/images/swiperImage4.jpg";
import swiperImg5 from "../../assets/images/swiperImage5.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Support = () => {
  const swiperData = [
    { id: 1, img: swiperImg1, text: "Сервис" },
    { id: 2, img: swiperImg2, text: "Производство" },
    { id: 3, img: swiperImg3, text: "Комплексное оснащение" },
    { id: 4, img: swiperImg4, text: "Лизинг" },
    { id: 5, img: swiperImg5, text: "Trade-in" },
    { id: 6, img: swiperImg1, text: "Обучение" },
    { id: 7, img: swiperImg2, text: "ProVisio" },
  ];

  return (
    <section className="mb-[120px]">
      <div className="max-w-[1370px] w-full mx-auto px-[20px]">
        <div className="mb-[25px]">
          <h2 className="text-[50px] leading-[55px] max-w-[850px] w-full text-[#110d60] font-bold">
            <span className="text-[#c3242a]">Support</span> clients at all
            stages
          </h2>
        </div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {swiperData.map(({ id, img, text }) => (
            <SwiperSlide key={id} className="!w-[320px]">
              {" "}
              <div className="relative w-full">
                <img className="w-full" src={img} alt="" />
                <p className="absolute bottom-[20px] left-[10px] text-[#c3242a] text-[16px] leading-[25px] font-bold">
                  {text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Support;
