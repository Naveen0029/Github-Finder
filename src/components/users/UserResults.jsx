import React, { useState } from 'react'
import {useEffect} from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import './UserResults.css'

function UserResults() {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] =useState(true);
    useEffect(()=>{
        fetchUsers()
    },[]);

    const fetchUsers = async()=>{
        const response = await fetch(`${process.env.
            REACT_APP_GITHUB_URL}/users`,{
                headers: {
                    Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
                }//no of time for fetching data would increase
            })

        const data = await response.json()

        setUsers(data);
        setLoading(false);
    }
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
