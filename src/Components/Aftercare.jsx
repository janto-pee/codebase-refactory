import React from 'react'
import blob from '../Assets/blob1.svg'
import head from '../Assets/hero1.png'
import head2 from '../Assets/img9.png'
import { IoIosArrowForward } from 'react-icons/io'
import Button from './button'

const Aftercare = () => {
    const name = 'Eye lid'
  return (
    <div className='bg-slide2bg'>
        <div className='w-10/12 mx-auto'>
            <div className='py-16 grid md:grid-cols-1 md:grid-cols-2 text-center md:text-left gap-6'>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-secondary2 small-font">AFTERCARE</h3>
                    <h3 className="text-primary font-semibold text-2xl md:text-3xl md:w-4/6 mb-2">Permanent Makeup Aftercare</h3>
                    <img src={head2} alt="" className='w-3/6' />
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-4 text-left">
                    { [...Array(4)].map((items, i) => (
                        <div className='flex flex-col gap-4 mt-8' key={i}>
                            <p className='font-bold'>Lips</p>
                            <p className='small-font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eum! Ipsam deleniti dolorum sequi.</p>
                            <a href="" className='flex items-center gap-4 '>
                                <span className='font-semibold small-font '>Read More</span>
                                <IoIosArrowForward />
                            </a>
                        </div>
                    )) }
                    </div>

                </div>

            </div>
            <div className='py-16 grid md:grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-start'>
                <div className="">
                    <h3 className="text-secondary2 small-font">TREATMENT</h3>
                    <h3 className="text-primary font-semibold text-2xl md:text-3xl md:w-4/6 mb-2">Our Featured Beauty Treatment</h3>
                    <p className='small-font mt-8 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus dignissimos magnam illo vel modi esse fuga nobis eaque quisquam hic.</p>

                    <div className="flex md:hidden lg:flex flex-col md:flex-row gap-4 my-8 relative z-10 ">
                        {
                            [...Array(3)].map((items, i) => (
                                <div className="flex flex-col gap-2 bg-white card-shadow1 p-4 ">
                                    <img src={blob} className='hidden md:flex w-1/6 text-center' alt="" />
                                    <p className="font-semibold">Permanent Lip Brush</p>
                                    <ul>
                                        <li>Connection 1</li>
                                        <li>Connection 1</li>
                                    </ul>
                                    <p className="text-center text-secondary2">$230</p>
                                </div>
                            ))
                        }
                    </div>
                    <Button buttonClass='px-6 py-2 md:mt-8 lg:mt-0 font-bold text-white bg-secondary2' name={'Contact Us'} />
                </div>
                <div className=''>
                   <img src={head} className='w-5/6 mx-auto' alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Aftercare