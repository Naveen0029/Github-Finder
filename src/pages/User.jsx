import React from 'react'
import {useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom';
import  GithubContext from '../context/github/GithubContext'
import {FaCodepen,FaStore,FaUserFriends,FaUsers} from 'react-icons/fa'
import Spinner from '../components/layout/Spinner';
import {Link} from 'react-router-dom'
import './User.css'

function User() {
    const {getUser,user,loading } = useContext(GithubContext);

    const match = useParams();
   
    console.log(match.login);
    useEffect(()=>{
        
        getUser(match.login);
        //getUserRepos(match.params.login)
    },[])

    const {
      name,
      type,
      avatar_url, 
      location,
      bio,
      twitter_username,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      blog,
    } = user;

    if(loading){
      return <Spinner />
    }
  return (
    <>
    <div className='Container'>
       
       <div className='Row'>
          <div>
          <Link to='/' className='userLink'>Back To Search</Link>
          </div>
          <div className='Image'>
            <img src={avatar_url} alt="" />
            <div className='Details'>
              <h2>{name}</h2>
              <p>{login}</p>
            </div>
          </div>
         
         
       </div>
        <div className='Subcontainer Row'>
          <div className='Subrow1'>
            <h1>{name}</h1>
            <p>{bio}</p>
            <a href={html_url} target='_blank'
              className='userLink'>Visit Github Profile</a>
          </div>

          <div className='Subrow2'>
            
            {location && (
            <div>
              <p>Location</p>
              <h1>{location}</h1>
              </div>
              )}

            {blog && (
            <div>
              <p>Website</p>
              <h1><a href={`https://${blog}`} 
              className='userLink' target='_blank'>{blog}</a></h1>
              </div>
              )}

            {twitter_username && (
              <div>
                <p>Twitter</p>
                <h1><a href={`https://twitter.com/${twitter_username}`}
                  className='userLink' target='_blank'>{twitter_username}</a></h1>
              </div>
            )}
          </div>

        </div>
    </div>
    </>
  )
}

export default User
