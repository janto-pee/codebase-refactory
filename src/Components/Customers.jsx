import React from 'react'
import HorizontalScrollMenu from './HorizontalScrollingMenu'
import img from '../Assets/hero1.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'
import img8 from '../Assets/img8.jpg'

const Customers = () => {
    const photos = [img1, img2, img3, img4, img5, img6, img7, img8]
  return (
    <div className='text-center py-20'>
        <p className="text-secondary2">OUR CUSTOMERS</p>
        <h1 className="text-2xl font-semibold mb-16">Treatment Process From Our Customers</h1>
        <div>
            <HorizontalScrollMenu photos={photos} />
        </div>
    </div>
  )
}

export default Customers