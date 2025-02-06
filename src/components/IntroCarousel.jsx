import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useState } from "react";
import img1 from '@assets/images/main.jpg'
import img2 from '@assets/images/main.jpg'
import img3 from '@assets/images/main.jpg'
import img4 from '@assets/images/main.jpg'


const slides = [
  { image: img1, caption: 'Forest'},
  { image: img2, caption: 'Second'},
  { image: img3, caption: 'Third'},
  { image: img4, caption: 'Fourth'}
]

export function IntroCarousel() {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  return (
    <section className="relative h-[746px] overflow-hidden">
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
          <div key={index}>
            <img src={slide.image} alt={slide.caption} className="w-full" />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
              {slide.caption}
            </p>
          </div>
        ))}
      </Carousel>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
      >
        &#10095;
      </button>
    </section>
  )
}

