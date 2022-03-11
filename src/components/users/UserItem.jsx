import React from 'react'
import PropTypes from 'prop-types'
import proptypes from 'proptypes'
import {Link} from 'react-router-dom'
import './UserItem.css'

function UserItem({user}) {
   
  return (
      
      <div className='UserItem'>
          <div>
              <img src={user.avatar_url} alt='Profile' width={70} height={70} />
          </div>

          <div>
              <h1>{user.login}</h1>
              <Link to={`/user/${user.login}`} className='UserItemlink'>Visit Profile</Link>

          </div>
      </div>
    
  )
}

UserItem.propTypes={
    user: PropTypes.object.isRequired,
}
export default UserItem
