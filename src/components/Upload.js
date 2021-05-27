import { useState, useContext } from 'react'
import axios from 'axios'
import {UserContext} from '../contexts/UserContext'

const Upload = (props) =>{
  const {userState} = useContext(UserContext)
  const [user,setUser] = userState
  const [file, setFile] = useState(null)
  const handleSubmit = async (e) =>{
      e.preventDefault()
      const picture = new FormData()
      picture.append('file',file)
      const userId = localStorage.getItem('userId')
      const config = {
          headers:{
              Authorization: userId,
              'content-type': 'multipart/form-data'
          }
      }
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/upload`,picture,config)
      if (res.data.message === 'image uploaded'){
          setUser(res.data.user)
          props.togglePopup()
      }
  }
  return(
      <form onSubmit={(e)=>{handleSubmit(e)}}>
          <input type='file'onChange={(e)=>{setFile(e.target.files[0])}}  required />
          <input type='submit' value='Upload' />
      </form>
  )
}

export default Upload