import React from 'react'
import HorizontalScrollMenu from './HorizontalScrollingMenu'
import img from '../Assets/hero1.png'
import img1 from '../Assets/img1.png'
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
    <div className='w-10/12 mx-auto'>
      <div className='text-center py-20'>
        <p className="text-secondary2">OUR CUSTOMERS</p>
        <h1 className="text-2xl font-semibold mb-16">Treatment Process From Our Customers</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
            <img src={img3} alt="" />
            <img src={img6} alt="" />
            <img src={img5} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Customers