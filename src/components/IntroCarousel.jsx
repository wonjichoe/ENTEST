import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useState } from "react";
import img1 from '@assets/images/main.jpg'
import img2 from '@assets/images/main2.jpg'
import img3 from '@assets/images/main3.jpg'
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

const slides = [
  { image: img1, caption: '전문적이고 체계적인 최적의 솔루션을 제공합니다.', caption2: 'Ver.2025 Company Introduction | 이엔미디어'},
  { image: img2, caption: '창의적인 생각과 Creative한 아이디어로 확실한 성과를 만들고,', caption2: 'Ver.2025 Company Introduction | 이엔미디어'},
  { image: img3, caption: '성장으로 가기 위한 모든 길을 만들어 갑니다', caption2: 'Ver.2025 Company Introduction | 이엔미디어'},
]

export function IntroCarousel() {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }

  const prev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[700px] lg:h-[746px] overflow-hidden">
      <Carousel 
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
        autoPlay 
        infiniteLoop 
        showArrows={false}
        showThumbs={false} 
        showStatus={false}
        showIndicators={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px] sm:h-[600px] md:h-[746px]">
            <img src={slide.image} alt={slide.caption} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="w-full max-w-[280px] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[1000px] 2xl:max-w-[1440px] mx-auto text-left">
                <p className="text-white text-2xl sm:text-3xl md:text-5xl md:leading-[1.4] lg:text-6xl lg:leading-[1.4] font-bold mb-4 sm:mb-8 md:mb-14 max-w-full sm:max-w-[80%] md:max-w-[60%] break-keep">
                  {slide.caption}
                </p>
                <p className="text-gray-50 text-sm sm:text-base md:text-xl">
                  {slide.caption2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <button
        onClick={prev}
        className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={next}
        className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        <IoIosArrowForward />
      </button>
    </section>
  )
}

