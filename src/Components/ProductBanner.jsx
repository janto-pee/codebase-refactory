import React from 'react'

const ProductBanner = ({mainBanner, headerText, bannerImg}) => {
  return (
    <div className={mainBanner}>
        <h1 className="text-2xl text-white font-bold w-3/12">{headerText}</h1>
        <p className='border-t-2 border-gray-200 w-1/6 my-4 mt-4'></p>
        <img src={bannerImg} alt="" className='absolute right-0 w-1/12 bottom-12' />
    </div>
  )
}

export default ProductBanner