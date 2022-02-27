import React from 'react'
import { Link } from 'react-router-dom'
import { MdLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'
import './navbar.css'

const Navbar = ( {toggle, handleToggle}) => {
  console.log(toggle)
  return (
    <div className='header'>
            <h1> Ken🙂 </h1>

           { toggle === false ?  <MdDarkMode onClick={handleToggle} size='1.5em' /> : <MdLightMode onClick={handleToggle} size='1.5em' /> }
           
           <ul className={ toggle === false ? 'ul-light' : 'ul-dark'}>
                <li> <Link to='/'> Home </Link>  </li>
                <li> <Link to='/work'> Work </Link>  </li>
                <li> <Link to='/about'> About </Link>  </li>
               
            </ul>
     
    </div>
  )
}

export default Navbar