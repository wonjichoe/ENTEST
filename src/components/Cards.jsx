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
    <section className="grid grid-cols-4 gap-4 p-[160px] max-w-[1440px] mx-auto">
      {cardData.map((card, index) => (
        <div 
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img 
            src={card.image}
            alt={card.title}
            className='w-full h-48 object-cover'
          />
          <div className='p-5'>
            <h3 className='text-xl font-bold mb-2'>{card.title}</h3>
            <p className='mb-14'>{card.description}</p>
            <p className='text-gray-400'>{card.description2}</p>
          </div>
        </div>
      ))}
    </section>
  )
}