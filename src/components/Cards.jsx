import cardImage1 from '@assets/images/img1.jpg'
import cardImage2 from '@assets/images/img2.jpg'
import cardImage3 from '@assets/images/img3.jpg'
import cardImage4 from '@assets/images/img4.jpg'
import { IoMdArrowRoundForward } from 'react-icons/io'

const cardData = [
  {
    image: cardImage1,
    title: '광고방향 설정',
    description: '경쟁사의 광고유형과 광고주의 현재 상황을 비교분석하여 광고전략 수립을 설정합니다.',
    description2: '이엔미디어'
  },
  {
    image: cardImage2,
    title: '광고전략 기획',
    description: '유형별로 축적된 데이터를 통합적 분석으로 전략을 제시합니다',
    description2: '이엔미디어'
  },
  {
    image: cardImage3,
    title: '광고진행 관리',
    description: '브랜드에 최적화 된 키워드를 선정하여 최대 효율성의 솔루션을 제공합니다.',
    description2: '이엔미디어'
  },
  {
    image: cardImage4,
    title: '분석 및 컨설팅',
    description: '진행중인 광고를 재분석 하여 목표 수립을 위한 철저한 관리에 들어갑니다.',
    description2: '이엔미디어'
  },
]

export function Cards() {
  return (
    <section className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 py-12 sm:py-20 lg:py-[160px] max-w-[375px] sm:max-w-[810px] lg:max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-0">
      {cardData.map((card, index) => (
        <div 
          key={index}
          className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-24px)] border rounded-lg overflow-hidden shadow-lg cursor-pointer group"
        >
          <div className="overflow-hidden">
            <img 
              src={card.image}
              alt={card.title}
              className='w-full h-48 object-cover transition-all duration-300 group-hover:scale-110'
            />
          </div>
          <div className='p-5 transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white'>
            <h3 className='text-lg sm:text-xl font-bold mb-2'>
              {card.title}
            </h3>
            <p className='mb-4 sm:mb-8 md:mb-14 break-keep'>
              {card.description}
            </p>
            <div className='flex items-center justify-between'>
              <p className='text-gray-400 text-sm sm:text-base'>
                {card.description2}
              </p>
              <IoMdArrowRoundForward className="text-white font-bold"/>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}