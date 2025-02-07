import { useState } from "react";
import { IoIosArrowDown, IoMdArrowRoundForward } from 'react-icons/io'
import { FaCheck } from "react-icons/fa6";

export const InquiryForm = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    budget:"",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleSelect = (value) => {
    setFormData({ ...formData, budget: value });
    setIsDropdownOpen(false);
  };

  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-20 lg:py-[160px]">
      <div className="flex flex-col lg:flex-row justify-between max-w-[375px] sm:max-w-[810px] lg:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl  font-bold text-[#0163c6]">Contact us</h2>
          <div className="text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 text-gray-400 font-bold">궁금하신 사항을 남겨주세요!<br />확인 후 빠른 답변 드리겠습니다.</div>
          <span className="block w-[50px] h-[1px] bg-[#d2d2d2] mb-6 sm:mb-8 lg:mb-10"></span>
          <ul className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 leading-[1.6]">
            <li>T. contact@en-media.kr</li>
            <li>M. 02-3429-3161</li>
          </ul>
        </div>
        <div className="py-6 px-4 sm:px-6 lg:px-10 bg-white rounded-xl w-full lg:w-[820px] h-auto lg:h-[600px] flex items-center justify-center">
        {isSubmitted ? (
          <p className="text-green-600 text-center font-semibold text-2xl flex justify-center items-center">
            <div class="w-8 h-8 sm:w-10 sm:h-10 mr-2 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold"><FaCheck /></div>
            문의가 접수되었습니다!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="text-base sm:text-lg lg:text-xl w-full p-3 sm:p-4 border-b-[3px] border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={handleChange}
              className="text-base sm:text-lg lg:text-xl w-full p-3 sm:p-4 border-b-[3px] border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Tel"
              required
              pattern="[0-9]{3}[0-9]{3,4}[0-9]{4}"
              value={formData.phone}
              onChange={handleChange}
              className="text-base sm:text-lg lg:text-xl w-full p-3 sm:p-4 border-b-[3px] border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`text-base sm:text-lg lg:text-xl w-full p-3 sm:p-4 border-b-[3px] border-gray-300 flex justify-between items-center focus:outline-none focus:border-blue-500 bg-white ${
                  formData.budget ? "text-black" : "text-gray-400"
                }`}
              >
                {formData.budget || "예산을 선택해주세요."}
                <IoIosArrowDown className="text-gray-500" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute w-full bg-white border border-gray-300 shadow-md rounded-lg mt-2 z-10">
                  {["100만원 이하", "100~500만원", "500~1000만원", "1000만원 이상"].map(
                    (option) => (
                      <li
                        key={option}
                        className="p-3 sm:p-4 text-base sm:text-lg hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelect(option)}
                      >
                        {option}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="mb-5 text-base sm:text-lg lg:text-xl w-full p-4 border-b-[3px] border-gray-300 resize-none h-32 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="w-full text-base sm:text-lg bg-white text-black border-4 border-black hover:text-white hover:bg-black tracking-wide px-5 py-4 rounded-lg font-semibold flex justify-between items-center transition-all">
              SEND
              <IoMdArrowRoundForward />
            </button>
          </form>
        )}
        </div>
      </div>
    </section>
  );
};
