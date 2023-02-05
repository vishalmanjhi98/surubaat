import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '350px',
}
const slideImages = [
  {
    url:
      'https://img.freepik.com/premium-vector/realistic-black-friday-horizontal-sale-banner-template_23-2149821007.jpg?size=626&ext=jpg&ga=GA1.2.980704101.1675334322',
  },
  {
    url:
      'https://img.freepik.com/free-psd/summer-sale-70-discount_23-2148476960.jpg?w=1060&t=st=1675422338~exp=1675422938~hmac=a6a7209f85d9584744c9a30b325644af2f7405778811f29ea978965950e226c5',
  },
  {
    url:
      'https://img.freepik.com/free-vector/black-friday-super-sale-website-banner-with-red-splash_1361-2935.jpg?size=626&ext=jpg&ga=GA1.2.980704101.1675334322',
  },
]

const Imageslider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
export default Imageslider
