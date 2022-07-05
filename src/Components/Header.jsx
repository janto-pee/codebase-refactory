import React from 'react'
import Navbar from './Navbar'
import {BsArrowLeftCircleFill, BsFillArrowRightCircleFill, BsArrowDownCircleFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import hero from '../Assets/toke.png'
import blob from '../Assets/blob1.svg'

const Header = () => {
  return (
    <div className='bg-primary py-4 text-white relative overflow-hidden'>
        <div className="w-11/12 md:w-10/12 mx-auto">
          <Navbar />
          <div className='py-12 md:py-28 flex flex-col-reverse md:flex-row items-center md:justify-between text-center md:text-left'>
            <div className='hidden md:block md:w-1/6 '>
              <img src={blob} alt="" className='w-1/3' />
              <h1 className="text-sm"> <span className='text-xl'>"</span><span className='text-secondary2'>Everything</span> has beauty but not everyone can see it <span className='text-xl'>"</span> </h1>
              
              <p className='border-t-2 border-gray-600 w-3/6 my-4'></p>
              <p className='flex items-center gap-4 ' text-gra-400>
                <span>Konfuscious</span>
                <BsArrowLeftCircleFill className='text-gray-600 text-md ' />
                <BsFillArrowRightCircleFill  className='text-gray-600 text-md'/>
              </p>
            </div>
            <div className='md:w-2/6'>
              <img src={hero} alt="" className='relative top-16 md:absolute md:top-56 lg:top-32 md:w-7/12 lg:w-5/12 md:left-24 lg:left-48'  />
            </div>
            <div className='md:w-3/6'>
              <div>
                <h1 className="text-3xl md:text-4xl leading-normal font-bold max-w-sm">Make your look even <span className="text-secondary2">More Perfect</span> with our treatments</h1>
                <p className="text-gray-400 small-font md:ml-8 mt-4 max-w-sm"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eum iusto non consequuntur nisi, delectus sunt. </p>
                <p className='hidden ml-8 md:flex gap-4 my-8 flex items-center'>See our treatment <BsArrowDownCircleFill /></p>
              </div>
              <div className='hidden md:flex items-center gap-4 md:ml-8'>
                <span className='border-t-2 border-gray-600 w-3/6'></span>
                <span className='text-xl font-bold border-r-2 pr-4 border-gray-600'>9.5</span>
                <p className="flex flex-col">
                  <span>{[...Array(5)].map((item, i) => (
                    <span className="inline-flex"><AiFillStar color='yellow' fontSize={'small-font'} key={i} /></span>
                  ))}</span>
                  <span className='text-gray-400 small-font'>20k Reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header