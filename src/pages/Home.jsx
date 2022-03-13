import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import './Home.css'

function Home() {
  return (
    <div className='Global'>
    <UserSearch />
    <UserResults />
    </div>
  )
}

export default Home
