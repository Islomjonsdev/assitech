import axios from "axios";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCall } from "react-icons/io";
import { toast } from "react-toastify";

const SendForm = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("+998");
  const [userMessage, setUserMessage] = useState("");
  const SendMessage = (e) => {
    setLoading(true);
    e.preventDefault();
    const token = "8073334034:AAGoATv5ukQU29RwtKG06Wm3v6IFViZvsfk";
    const chat_id = -1002582630743;
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
        setUserName("");
        setUserNumber("");
        setUserMessage("");
        toast.success("Successfully send");
      })
      .catch((err) => {
        console.log("Failed to send", err);
        toast.error("Failed to send");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="mb-[15px]">
        <h3 className="text-[30px] font-semibold leading-[35px] text-white text-center">
          {t("question_us")}
        </h3>
      </div>

      <form onSubmit={SendMessage}>
        <div className="flex flex-col my-[25px]">
          <label className="mb-2 text-white text-[16px] leading-[22px] text-start">
            {t("enter_name")} <span>*</span>
          </label>
          <input
            className="px-4 border border-white outline-none h-[48px] rounded-[12px]"
            type="text"
            required
            placeholder={t("enter_name")}
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-[25px] relative">
          <label className="mb-2 text-white text-[16px] leading-[22px] text-start">
            {" "}
            {t("enter_number")} <span>*</span>
          </label>
          <input
            className="pl-[40px] pr-[16px] border border-[grey] outline-none h-[48px] rounded-[8px] relative"
            type="tel"
            required
            placeholder={t("enter_number")}
            value={userNumber}
            onChange={(e) => {
              const input = e.target.value;
              const formatted = input.replace(/[^\d+]/g, "");

              if (!formatted.startsWith("+998")) return;

              if (formatted.length <= 13) {
                setUserNumber(formatted);
              }
            }}
          />
          <IoIosCall className="absolute top-[45px] left-[16px] w-4 h-4" />
        </div>
        <div className="flex flex-col my-[25px]">
          <label className="mb-2 text-white text-[16px] leading-[22px] text-start">
            {t("message")} <span>*</span>
          </label>
          <textarea
            className="py-2 px-4 border border-white outline-none h-[48px] rounded-[12px] h-[117px] resize-none"
            placeholder={t("message")}
            id="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
        </div>
        <button
          className="bg-white h-[45px] cursor-pointer w-full text-[#8a2be2] rounded-[20px] text-[18px] leading-[24px]font-bold"
          type="submit"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default SendForm;
