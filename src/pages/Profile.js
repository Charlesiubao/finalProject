import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Redirect } from 'react-router-dom'
import Upload from '../components/Upload'

const Profile = () => {
  // const latestPost = () => {
    
  // }
  return (
      <div className="profile">
          <div>Profile Page</div>
        <Upload/>
      </div>
  )
}


export default Profile