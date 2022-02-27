import React from 'react'
import { CgArrowLongLeft } from 'react-icons/cg'
import { CgArrowRight } from 'react-icons/cg'


const HomepageWork = ({ prevSlide, nextSlide, slides }) => {

  return slides ? (

    
    <div id='work'>

        
          <div className='circle'>
            <img src={ slides.shape } alt={ 'Shape' } />
          </div>
          

          <section className='ballgecko'>
              <div className='text'>
                <div className='titleDiv'>
                  <h3 className='title'> { slides.title } </h3>
                </div>

                  <div className='typeDiv'>
                    <p className='type'> { slides.type} </p>
                    <p> View project </p>
                  </div>
              </div>
              
              <div className='design'>
                  <img src={ slides.design } alt={ 'Design' } />
              </div>
              
              
                <CgArrowLongLeft className='left-arrow' onClick={prevSlide}  />
                <CgArrowRight className='right-arrow' onClick={nextSlide} />
              
          </section>
     
    </div>
  
  
  ): 'no data'
}

export default HomepageWork