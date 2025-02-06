import cardImage1 from '@assets/images/img1.jpg'
import cardImage2 from '@assets/images/img2.jpg'
import cardImage3 from '@assets/images/img3.jpg'
import cardImage4 from '@assets/images/img4.jpg'

const cardData = [
  {
    image: cardImage1,
    title: '타이틀',
    description: '설명',
    description2: '설명'
  },
  {
    image: cardImage2,
    title: '타이틀',
    description: '설명',
    description2: '설명'
  },
  {
    image: cardImage3,
    title: '타이틀',
    description: '설명',
    description2: '설명'
  },
  {
    image: cardImage4,
    title: '타이틀',
    description: '설명',
    description2: '설명'
  },
]

export function Cards() {
  return (
    <section className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 py-12 sm:py-20 lg:py-[160px] max-w-[375px] sm:max-w-[810px] lg:max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-0">
      {cardData.map((card, index) => (
        <div 
          key={index}
          className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-24px)] border rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer hover:bg-gray-900 hover:text-white"
        >
          <img 
            src={card.image}
            alt={card.title}
            className='w-full h-48 object-cover hover:scale-110 transition-all duration-300'
          />
          <div className='p-5'>
            <h3 className='text-lg sm:text-xl font-bold mb-2'>{card.title}</h3>
            <p className='mb-4 sm:mb-8 md:mb-14'>{card.description}</p>
            <div>
              <p className='text-gray-400 text-sm sm:text-base'>{card.description2}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}