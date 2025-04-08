import { IoLogoInstagram } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookSquare } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ContactModal from "../ui/contact-modal";
import { IoIosCall } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [isOpenCotactModal, setIsOpenCotactModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("+998");
  const [userMessage, setUserMessage] = useState("");
  const { t } = useTranslation();
  const handleSendContact = (e) => {
    e.preventDefault();

    const token = "8073334034:AAGoATv5ukQU29RwtKG06Wm3v6IFViZvsfk";
    const chat_id = 766849030;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = userName;
    const number = userNumber;
    const message = userMessage;
    const messageContent = `Ismi: ${name} \n Telefon raqami: ${number} \n Xabari: ${message}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        toast.success("Seccessfully send");
        setUserName("");
        setUserNumber("");
        setUserMessage("");
        setIsOpenCotactModal(false);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
        toast.success("Failed to send");
      });
  };
  return (
    <>
      <header className="mb-[25px]">
        <div className="bg-[#2E3A6B] h-[60px] flex items-center">
          <div className="max-w-[1370px] w-full mx-auto px-[20px]">
            <div className="flex items-center justify-end gap-[10px]">
              <a href="https://www.instagram.com" target="_blank">
                <IoLogoInstagram className="text-white w-4 h-4" />
              </a>
              <a href="https://telegram.org" target="_blank">
                <LiaTelegramPlane className="text-white w-4 h-4" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookSquare className="text-white w-4 h-4" />
              </a>
              <a
                className="text-white text-[16px] leading-[24px] font-normal"
                href="tel:+998998159885"
              >
                +998 99 815 98 85
              </a>
              <button
                className="text-white cursor-pointer bg-[#c3242a] max-w-[120px] w-full h-[40px] rounded-[12px] text-[16px] leading-[24px]"
                onClick={() => setIsOpenCotactModal(true)}
              >
                {t("contact")}
              </button>
            </div>
          </div>
        </div>
        <Navbar />
      </header>
      {isOpenCotactModal && (
        <ContactModal close={setIsOpenCotactModal}>
          <div className="bg-white rounded-[4px] p-[15px]">
            <div className="">
              <h3 className="text-center text-[32px] text-[#2e3a6b] font-bold">
                  {t("question_us")}
              </h3>
            </div>

            <form onSubmit={handleSendContact}>
              <div className="flex flex-col my-[25px]">
                <label className="mb-2 text-[#1a202c] text-[16px] leading-[22px] text-start">
                  {t("enter_name")} <span>*</span>
                </label>
                <input
                  className="px-4 border border-[grey] outline-none h-[48px] rounded-[8px]"
                  type="text"
                  placeholder={t("enter_name")}
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex flex-col my-[25px] relative">
                <label className="mb-2 text-[#1a202c] text-[16px] leading-[22px] text-start">
                  {" "}
                  {t("enter_number")} <span>*</span>
                </label>
                <input
                  className="pl-[40px] pr-[16px] border border-[grey] outline-none h-[48px] rounded-[8px] relative"
                  type="tel"
                  placeholder={t("enter_number")}
                  value={userNumber}
                  onChange={(e) => {
                    const input = e.target.value
                    const formatted = input.replace(/[^\d+]/g, "")

                    if (!formatted.startsWith("+998")) return;

                    if (formatted.length <= 13) {
                      setUserNumber(formatted);
                    }
                  }}
                />
                <IoIosCall className="absolute top-[45px] left-[16px] w-4 h-4" />
              </div>
              <div className="flex flex-col my-[25px]">
                <label className="mb-2 text-[#1a202c] text-[16px] leading-[22px] text-start">
                  {t("message")} <span>*</span>
                </label>
                <textarea
                  className="py-2 px-4 border border-[grey] outline-none h-[48px] rounded-[8px] h-[117px] resize-none"
                  placeholder={t("message")}
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
              </div>
              <button className="bg-[#c32a2a] h-[45px] cursor-pointer w-full text-white rounded-[10px] text-[18px] leading-[24px] font-bold">
                Sending
              </button>
            </form>
          </div>
        </ContactModal>
      )}
    </>
  );
};

export default Header;
