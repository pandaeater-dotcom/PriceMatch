import React, { useState } from "react";
// import { storage } from "./firebase"
import { app } from "./firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import './price-match-new.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function UploadImage() {
  const [imageAsFile, setImageAsFile] = useState();
  const storage = getStorage(app);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
    console.log(imageAsFile);
  };

  const handleFirebaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const storageRef = ref(storage, "photo");
    uploadBytes(storageRef, imageAsFile).then((snapshot) => {
      console.log("Uploaded Image!");
    });
  };
  return (
    <div className="container">
      <div className="section-main">
        <div className="section-title-main">
          <h2 className="display-4">Show your product.</h2>
        </div>
        <div className="section-description-main">
          <p>
            Please give us a picture of your product and we will tell you where
            to get it.
          </p>
        </div>
      </div>
      <form onSubmit={handleFirebaseUpload}>
        <div class="wrapper">
          <div class="file-upload">
            <input type="file" onChange={handleImageAsFile} />
            <ArrowUpwardIcon color="secondary" />
          </div>
        </div>
        <button type="submit" className="btn btn-outline-info">Submit</button>
      </form>
      <div className="image">
        {
          imageAsFile? 
          <h2>Image uploaded {imageAsFile.name}</h2>:
          null
        }
      </div>
    </div>
  );
}

export default UploadImage;
