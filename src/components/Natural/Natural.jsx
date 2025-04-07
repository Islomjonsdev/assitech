import React from "react";
import naturalImage from "../../assets/images/natural.png";

const Natural = () => {
  return (
    <section className="bg-[#f7f7f7] py-[50px]">
      <div className="max-w-[1370px] w-full mx-auto px-[20px]">
        <div className="flex items-center justify-between relative mb-[180px]">
          <div className="max-w-[900px] w-full">
            <h2
              className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[65px] leading-[38px] sm:leading-[48px] md:leading-[55px] lg:leading-[60px] font-medium text-[#110d60]"
              data-aos="fade-up"
            >
              <span className="text-[#c3242a] font-bold">Supply</span> medical
              equipment directly from the manufacturer
            </h2>
          </div>
          <div>
            <img
              className="absolute bottom-[-70px] right-0"
              src={naturalImage}
              alt=""
            />
          </div>
        </div>
        <div className="flex items-end justify-end">
          <div className="max-w-[900px] w-full">
            <h2
              className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[65px] leading-[38px] sm:leading-[48px] md:leading-[55px] lg:leading-[60px] font-medium text-[#110d60]"
              data-aos="fade-up"
            >
              <span className="text-[#c3242a] font-bold">Solve</span> tasks of
              comprehensive medical equipment and service maintenance
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Natural;
