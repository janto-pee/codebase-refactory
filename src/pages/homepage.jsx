import React from 'react'
import Aftercare from '../Components/Aftercare'
import Banner from '../Components/Banner'
import Customers from '../Components/Customers'
import Header from '../Components/Header'

const Homepage = () => {
  return (
    <div>
          <Header />
          <Aftercare />
          <Banner />
          <Customers />
    </div>
  )
}

export default Homepage