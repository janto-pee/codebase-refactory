import React from 'react'
import heroImg from '../Assets/hero1.png'

const Banner = () => {
  return (
    <div className='bg-secondary2'>
        <div className='w-10/12 mx-auto py-20'>
            <p className='text-xl border-l-2 border-white pl-8 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repudiandae deserunt doloremque obcaecati, repellendus nobis dolore iste cum similique quos.</p>
           <div className="mt-8 flex gap-8 items-center">
                <img src={heroImg} alt="" className=" w-1/12 border rounded-full border-2" />
                <div className='text-white '>
                    <p className='font-semibold'>Philip Andrew</p>
                    <span>CIO</span>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Banner