import React, {useState} from 'react'
import Button from './button'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
        <div className="text-white flex items-center justify-between">
            <div className='flex items-center gap-16'>
              <h2 className="text-2xl font-semibold">beauty <span style={{color: 'secondary2'}}>.</span> </h2>
              <div className='hidden md:flex items-center gap-8 text-gray-300'>
                  <a href="" >About</a>
                  <a href="">Skincare</a>
                  <a href="">Hair</a>
                  <a href="">News</a>
              </div>
            </div>
            <Button buttonClass='hidden md:flex px-6 py-2 font-bold bg-secondary2' name={'Contact Us'} />

             {/* mobile menu-icon */}
             <span
              className="md:hidden text-xl"
              onClick={() => setMenu(!menu)}
            >
              <AiOutlineMenu />
            </span>

            {/* mobile menu nav */}

          {menu ? (
          <div className=" absolute z-10 w-1/2 right-0 bg-primary top-0 flex flex-col  space-y-12 h-screen md:hidden">
            <div className='flex flex-col gap-8 text-gray-100 ml-4 '>
                <a
                  className="pt-6 text-white text-xl mb-4 text-gray-300 "
                  onClick={() => setMenu(!menu)}
                >
                  <AiOutlineClose />
                </a>
                  <a href="" >About</a>
                  <a href="">Skincare</a>
                  <a href="">Hair</a>
                  <a href="">News</a>
              </div>
          </div>
        ) : (
          ""
        )}


        </div>
    </div>
  )
}

export default Navbar