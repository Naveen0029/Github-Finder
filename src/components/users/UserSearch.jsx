import React from 'react'
import { useState,useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import './UserSearch.css'

function UserSearch() {
  const [text,setText] = useState('');
  const {users,searchUsers,clearUsers} = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    if(text === ''){
      setAlert('Please enter something','error');
    }
    else{
      searchUsers(text);
      setText('');
    }
  }
  
  return (
    <div className='UserSearch'>
      <div >
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='search here...'
            className='InputText' value={text} onChange={handleChange} />
          <button type='submit' className='Btn1'>Go</button>
        </form>

      </div>
      {users.length>0&&(<div>
        <button type='submit' style={{ margin: "3vh" }} onClick={clearUsers}>Clear</button>
      </div>)}
      
    </div>
  )
}

export default UserSearch
