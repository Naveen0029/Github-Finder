import React from 'react'
import {FaEye,FaInfo,FaLink,FaStar,FaUtensils} from 'react-icons/fa'
import PropTypes from 'proptypes'
import './RepoItem.css'

function RepoItem({repo}) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo

  return (
    <div className='BigContainer'>
      <div>
          <a href={html_url} target={'_blank'} className='repoLink'><FaLink />{name}</a>
          <p>{description}</p>
      </div>
      <div className='Container'>
      <div className='Row'>
          <FaEye style={{fontSize:'3vh',color:'blue'}}/>{watchers_count}
      </div>
      <div className='Row'>
          <FaStar style={{fontSize:'3vh',color:'green'}} />{stargazers_count}
      </div>
      <div className='Row'>
          <FaInfo style={{fontSize:'3vh',color:'red'}}/>{open_issues}
      </div>
      <div className='Row'>
          <FaUtensils style={{fontSize:'3vh',color:'yellow'}} />{forks}
      </div>
      </div>
      
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
