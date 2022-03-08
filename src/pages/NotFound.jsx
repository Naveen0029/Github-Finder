import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div class='notfound'>
        <h1>
            Oops!
        </h1>
        <h2>
            404-Page Not Found!
        </h2>
        <Link to='/' className='notfoundLink'>Back To Home</Link>
    </div>
  )
}

export default NotFound
