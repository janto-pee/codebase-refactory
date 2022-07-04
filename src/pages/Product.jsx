import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar';
import hero from '../Assets/toke.png'
import ProductBanner from '../Components/ProductBanner';
import feeder from '../Assets/feeder.jpg'

const Product = () => {
    const [skincare, setSkinCare] = useState(null)

    useEffect(() => {
      async function fetchAPI(){
        const {data} = await axios.get('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&q=skincare', {
              headers: {
                  'X-RapidAPI-Key': '567ba7ddcbmsh1610340a21e73abp15ac7cjsn8a3813e9e8e1',
                  'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
                }
          });
          setSkinCare(data.products)
      }
      fetchAPI()
    }, []);

    console.log(skincare)
    
  return (
    <div className='bg-slide2bg'>
      <div className="bg-primary">
        <div className="w-10/12 mx-auto py-4">
          <Navbar />
        </div>
      </div>
      <div className="w-10/12 mx-auto mt-8">
        <ProductBanner mainBanner={'relative h-52 p-4 rounded-lg bg-red-300 flex flex-col justify-between'} headerText={'Order Your Favourite Coffee'} bannerImg={hero} />
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border text-center gap-8">
            {[...Array(20)].map((items, i) => (
              <div className="p-8 rounded-md text-center flex flex-col gap-4 items-center  border border-red-500" key={i} >
                <img src={feeder} alt="" className='w-2/3 text-center' />
                <h2 className=''>Hi</h2>
              </div>
            ))}
          </div>
        </div>
        <ProductBanner mainBanner={'relative h-48 p-4  rounded-lg bg-red-300 flex flex-col justify-between'} headerText={'Order Your Favourite Coffee'} bannerImg={hero} />
        
    </div>
    </div>
  )
}

export default Product

