import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='header'>
            <h1> Ken🙂 </h1>

            <ul>
                <li> <Link to='/'> Home </Link>  </li>
                <li> <Link to='/work'> Work </Link>  </li>
                <li> <Link to='/about'> About </Link>  </li>
               
            </ul>
     
    </div>
  )
}

export default Navbar