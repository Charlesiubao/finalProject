import { useState, useContext } from 'react'
import axios from 'axios'
import {UserContext} from '../contexts/UserContext'

const Upload = (props) =>{
  const {userState} = useContext(UserContext)
  const [user,setUser] = userState
  const [file, setFile] = useState(null)
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('')

  const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      // previewFile(file);
      setSelectedFile(file);
      setFileInputState(e.target.value);
  };

const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            setErrMsg('something went wrong!');
        };
    };
    const uploadImage = async (base64EncodedImage) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/post`, {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage, title:title, description:description, userId:localStorage.getItem('userId') }),
                headers: { 'Content-Type': 'application/json' }
            });
            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
            console.log(res)
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };

  // const handleSubmit = async (e) =>{
  //     e.preventDefault()
  //     const picture = new FormData()
  //     picture.append('file',file)
  //     const userId = localStorage.getItem('userId')
  //     const config = {
  //         headers:{
  //             Authorization: userId,
  //             'content-type': 'multipart/form-data'
  //         }
  //     }
  //     const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/post`,picture,config)
  //     // if (res.data.message === 'image uploaded'){
  //     //     setUser(res.data.user)
  //     //     props.togglePopup()
  //     // }
  //     console.log(res)
  // }
  return(
      // <form onSubmit={(e)=>{handleSubmit(e)}}>
      //     <input type='file' onChange={(e)=>{setFile(e.target.files[0])}}  required />
      //     <input type='submit' value='Upload' />
      // </form>

      <form onSubmit={handleSubmitFile} className="form">
                
                
                <input 
                  value = {title} placeholder = 'title' onChange = {(e)=> setTitle(e.target.value)}
                />
                <input 
                  value = {description} placeholder = 'description' onChange = {(e)=> setDescription(e.target.value)}
                />
                <div>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className="button"
                />
                <input className="button" id="submit-button" type="submit" value={props.buttonText} />
                </div>
                
            </form>
  )
}

export default Upload