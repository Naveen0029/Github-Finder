import React, { useContext } from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import './UserResults.css'
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
   const {users,loading} = useContext(GithubContext)
   
    //console.log('called again');
    if(!loading){
        return (
            <div className='UserResults'>
                
                    {users.map((user) => (
                        <UserItem user={user} />
                    ))}
                

            </div>
          )
    }
    else{
        return <h1><Spinner /></h1>
    }
  
}

export default UserResults
