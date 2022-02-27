import React from 'react'
// import Navbar from '../navbar'
// import Footer from '../footer'
import './about.css'

const About = () => {
  return (

    <>
  

    <div className='about'>
    {/* <Navbar /> */}
        
        <div className='flex'>
          <section className='text'>
            <h1> About Me</h1>
            <p> Hello, I'm Keno! A Software Engineer who turns basic ideas into creative solutions. </p>
              
              <p>I combine reasearch and creativity to solve problems. </p>

            <p> When I'm not coding or debugging (lol), I read books📚 (yea, my hobby😉) </p>

            <p> Love my site? don't hesitate to reach out🤝</p>
            
          </section>

          <section className='technologies'>
          <h2> Technologies:</h2>
            <div className='tech'>
         

              <div className='stack'>
                <h4> Frontend</h4>
                <p> Vuejs </p>
                <p> Nextjs </p>
                <p> Reactjs </p>
                
              
              </div>

              <div className='stack'>
              <h4> Backend </h4>
                <p> Nodejs </p>   
              </div>

              <div className='stack'>
              <h4> Databases</h4>
                <p> mySQL </p>
                <p> MongoDB </p>
                <p> PostgreSQL </p>            
              </div>
              
            </div>
          </section>

        </div>
        {/* <Footer /> */}
    </div>
    </>
  )
}

export default About