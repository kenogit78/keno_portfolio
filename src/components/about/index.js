import React from 'react'
import Navbar from '../navbar'
import './about.css'

const About = () => {
  return (

    <>
  

    <div className='about'>
    <Navbar />
        
        <div className='flex'>
          <section className='text'>
            <h1> About Me</h1>
            <p> Hello, I'm Keno. A Software Engineer who turns basic ideas into creative solutions. 
              I combine reasearch and creativity to solve problems. </p>

            <p> When I'm not coding or debugging (lol), I read books (yea, my hobby) </p>

            <p> Love my site? do not hesitate to reach out to me.</p>
            
          </section>

          <section className='technologies'>
            <div>
              <h2> Technologies:</h2>

              <div className='stack'>
                <h4> Frontend</h4>

                <p> ReactJS </p>
                <p> VueJS </p>
                <p> NextJS </p>
              
              </div>

              <div className='stack'>
              <h4> Backend </h4>
                <p> NodeJS </p>
                
              </div>

              <div className='stack'>
              <h4> Databases</h4>
                <p> MongoDB </p>
                <p> mySQL </p>
                <p> PostgreSQL </p>            
              </div>
              
            </div>
          </section>

        </div>
    </div>
    </>
  )
}

export default About