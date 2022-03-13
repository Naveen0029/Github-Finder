import React from 'react'
import RepoItem from './RepoItem'

function RepoList({repos}) {
    let names=repos;
    console.log(names);
    console.log('my name is naveen')
    if(repos.length>0){
  return (
    <div>
      
      <h2>Latest Repositories</h2>
      
      {
          
          repos.map((repo)=>{
             return <RepoItem key={repo.div} repo={repo}/>
        
          })
      }
    </div>
  )
    }
    else return <div></div>
}

export default RepoList
