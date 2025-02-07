import { useState } from "react"
import { motion } from "framer-motion";

export const FAQSection = () => {
  const faqs = [
    { question: "우리 회사는 어떤 서비스를 제공하나요?", answer: "고객 맞춤형 IT 솔루션, 웹 개발, 모바일 앱 개발 및 클라우드 서비스를 제공합니다." },
    { question: "상담 및 문의는 어떻게 하나요?", answer: "문의 사항은 홈페이지의 ‘문의하기’ 페이지를 통해 남겨주시거나, 대표 이메일(info@yourcompany.com)로 연락 주시면 됩니다." },
    { question: "프로젝트 진행 과정은 어떻게 되나요?", answer: "초기 상담 → 기획 및 디자인 → 개발 → 테스트 및 배포 → 유지보수 단계로 진행됩니다." },
    { question: "서비스 비용은 어떻게 책정되나요?", answer: "프로젝트 범위, 기능 및 기간에 따라 달라지며, 상담 후 맞춤형 견적을 제공합니다." },
    { question: "A/S 및 유지보수는 어떻게 지원하나요?", answer: "서비스 출시 후에도 유지보수 계약을 통해 지속적인 기술 지원을 제공합니다." },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="bg-gray-100 p-10 rounded-2xl shadow-lg mt-10 mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-3">
              <button
                className="w-full text-left font-semibold text-lg flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      
    </>
  )
}