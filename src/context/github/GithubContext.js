import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children})=>{
    const initialState = {
        users:[],
        user:{},
        loading:true
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)

    //Get Search Results
const searchUsers = async(text)=>{
    setLoading();

    const params = new URLSearchParams({
        q: text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers: {
                Authorization:`token ${GITHUB_TOKEN}`
            }//no of time for fetching data would increase
        })

    const {items} = await response.json()

    dispatch({
        type: 'GET_USERS',
        payload: items
    })
 
}


  //Get Single User
  const getUser = async(login)=>{
      console.log(login);
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`,{
            headers: {
                Authorization:`token ${GITHUB_TOKEN}`
            }//no of time for fetching data would increase
        })

        if(response.status===404){
            window.location = '/notfound'
        }
        else{
            const data = await response.json()
            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
 
}




//Clear users from state
const clearUsers = ()=> dispatch({type:'CLEAR_USERS'})

//set loading
const setLoading = () => dispatch({type:'SET_LOADING'});

return (
    <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        user:state.user,
        searchUsers,
        clearUsers,
        getUser
    }}>
        {children}
    </GithubContext.Provider>
    )
}




export default GithubContext