import { useEffect, useState } from "react"
import { Image } from 'cloudinary-react'
import axios from 'axios'


const Home = () => {
  const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/post/all`);
            // const data = await res.json();
            setImageIds(data.data.publicIds);
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
      console.log('bonjour')
        loadImages();
    }, []);

  return (
      <div className="galleryHolder">
          Home Page

          <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    ))}
            </div>

            
      </div>
  )
}


export default Home