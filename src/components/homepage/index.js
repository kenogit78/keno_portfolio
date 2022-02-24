import React from 'react'
import './index.css'
import Header from './sub_components/Header'
import HomeScreen from './sub_components/HomeScreen'

const Homepage = () => {
  return (
    <div className='homepage'>
  
       <Header />
       <HomeScreen />
       
    </div>
  )
}

export default Homepage