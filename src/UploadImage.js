import React, { useState } from "react";
// import { storage } from "./firebase"
import { app } from "./firebase"
import { getStorage, ref, uploadBytes } from "firebase/storage";

function UploadImage() {
  const [ imageAsFile, setImageAsFile ] = useState();
  const storage = getStorage(app);

  const handleImageAsFile = e => {
      const image = e.target.files[0];
      setImageAsFile(image)
      console.log(imageAsFile);
  }

  const handleFiebaseUpload = e => {
      e.preventDefault();
      console.log('start of upload')
      if(imageAsFile === '' ) {
        console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      }
      const storageRef = ref(storage, 'images/photo')
      uploadBytes(storageRef, imageAsFile).then((snapshot) => {
        console.log('Uploaded Image!')
      })
  }
  return (
    <div className="container">
      <form onSubmit={handleFiebaseUpload}>
        <input type="file" id="upload" onChange={handleImageAsFile} />
        <button type="submit" className="btn btn-info">Submit</button>
      </form>
    </div>
  );
}

export default UploadImage;
