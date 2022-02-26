import React, { useState, useEffect } from 'react'
import HomepageWork from './sub_components/HomepageWork'
import Navbar from '../navbar'
import Shape from '../../assets/images/shape.png'
import Pentfort from '../../assets/images/pentfort.png'
import Circle from '../../assets/images/circle.png'
import OrangeSquare from '../../assets/images/orangeSquare.png'
import purpleSquare from '../../assets/images/purpleSquare.png'
import Ballgecko from '../../assets/images/ballgecko.png'


import './homepage.css'
const data = [
  { title: 'Pentfort', type: 'Architectural Website', shape: OrangeSquare, design: Pentfort  },
  { title: 'Ballgecko', type: 'Sport Website', shape: Circle, design: Ballgecko  },
  { title: 'Pentfort', type: 'Architectural Website', shape: purpleSquare, design:  Pentfort   },
  { title: 'Ballgecko', type: 'Sport Website', shape: OrangeSquare, design: Ballgecko },
  { title: 'Pentfort', type: 'Architectural Website', shape: purpleSquare, design:  Pentfort   },
  { title: 'Ballgecko', type: 'Sport Website', shape: Circle, design: Ballgecko  },
 
]

const Homepage = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const length = data.length;
console.log(length)

   useEffect(() => {
            setSlides(data[current]);
            
   }, [current, slides]);

   const nextSlide = ()=> {
    
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current)
}
const prevSlide = ()=> {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current)
}

if(!Array.isArray(data) || data.length <= 0){
  return null;
}


  return (
    <div className='homepage'>
      <Navbar />
  
      <section className='homescreen'>

        <div className='text'> 
            <h1> Hello! </h1>
            
            <p> I'm Paul Keno</p>

            <p> a Fullstack Software Engineer 👨‍💻 </p>

        </div>

        <div className='shape'>
            <img src={Shape} alt={Shape} />
        </div>

    </section>  


       < HomepageWork prevSlide={prevSlide} nextSlide={nextSlide} slides={slides} />
       
    </div>
  )
}

export default Homepage