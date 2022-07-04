import React from 'react'
import Button from './button'

const Navbar = () => {
  return (
    <div>
        <div className="text-white flex items-center justify-between">
            <div className='flex items-center gap-16'>
              <h2 className="text-2xl font-semibold">beauty <span style={{color: 'secondary2'}}>.</span> </h2>
              <div className='flex items-center gap-8 text-gray-300'>
                  <a href="" >About</a>
                  <a href="">Skincare</a>
                  <a href="">Hair</a>
                  <a href="">News</a>
              </div>
            </div>
            <Button buttonClass='px-6 py-2 font-bold bg-secondary2' name={'Contact Us'} />
        </div>
    </div>
  )
}

export default Navbar