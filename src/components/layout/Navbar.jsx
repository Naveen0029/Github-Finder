import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'

function Navbar({title}) {
  return (
    <nav className='navbar'>
      <div>
        <FaGithub />
        <Link to='/' className='navLink'>{title}</Link>

      </div>

      <div>
        <Link to='/' className='navLink'>Home</Link>
        <Link to='/about' className='navLink'>About</Link>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
