import React from 'react'
import Shape from '../../../assets/images/shape.png'

const HomeScreen = () => {
  return (
    <div className='homescreen'>

        <div className='text'> 
            <h1> Hello! </h1>
            
            <p> I'm Paul Keno</p>

            <p> a Fullstack Software Engineer 👨‍💻 </p>

        </div>

        <div className='shape'>
            <img src={Shape} alt={Shape} />
        </div>
    </div>  
  )
}

export default HomeScreen