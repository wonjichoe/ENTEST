import { useState } from "react";

export const InquiryForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-[#f5f5f5] p-8 rounded-2xl shadow-lg mt-10 mx-auto">
      <h2 className="text-4xl font-bold mb-6">Contact us</h2>
      <div className="text-xl">궁금하신 사항을 남겨주세요!<br />확인 후 빠른 답변 드리겠습니다.</div>
      <span className="block w-[50px] h-[1px] bg-[#d2d2d2]"></span>
      <ul>
        <li>T. contact@en-media.kr</li>
        <li>M. 02-3429-3161</li>
      </ul>
      {isSubmitted ? (
        <p className="text-green-600 text-center font-semibold">문의가 접수되었습니다!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="이름"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="문의 내용을 입력하세요"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-32"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
            문의하기
          </button>
        </form>
      )}
    </div>
  );
};
