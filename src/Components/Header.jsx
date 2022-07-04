import React from 'react'
import Navbar from './Navbar'
import {BsArrowLeftCircleFill, BsFillArrowRightCircleFill, BsArrowDownCircleFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import hero from '../Assets/toke.png'
import blob from '../Assets/blob1.svg'

const Header = () => {
  return (
    <div className='bg-primary p-2 text-white'>
        <div className="w-10/12 mx-auto">
          <Navbar />
          <div className='py-28 md:flex items-center justify-between'>
            <div className='md:w-1/6'>
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
              <img src={hero} alt="" className='w-120' />
            </div>
            <div className='md:w-3/6'>
              <div>
                <h1 className="text-4xl leading-normal font-bold max-w-sm">Make your look even <span className="text-secondary2">More Perfect</span> with our treatments</h1>
                <p className="text-gray-400 small-font ml-8 mt-4"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem eum iusto non consequuntur nisi, delectus sunt. </p>
                <p className='ml-8 flex gap-4 my-8 flex items-center'>See our treatment <BsArrowDownCircleFill /></p>
              </div>
              <div className='flex items-center gap-4 md:ml-8'>
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