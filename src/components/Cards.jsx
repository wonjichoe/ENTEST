import cardImage1 from '@assets/images/img1.jpg'
import cardImage2 from '@assets/images/img2.jpg'
import cardImage3 from '@assets/images/img3.jpg'
import cardImage4 from '@assets/images/img4.jpg'

const cardData = [
  {
    image: cardImage1,
    title: '타이틀',
    description: '설명'
  },
  {
    image: cardImage2,
    title: '타이틀',
    description: '설명'
  },
  {
    image: cardImage3,
    title: '타이틀',
    description: '설명'
  },
  {
    image: cardImage4,
    title: '타이틀',
    description: '설명'
  },
]

export function Cards() {
  return (
    <section>
      {cardData.map((card, index) => (
        <div>
          <img 
            src={card.image}
            alt={card.title}
          />
          <div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}