import './fast.css';
import Fst1 from '../Images/fast1.png';
import Fst2 from '../Images/fast2.png';
import Fst3 from '../Images/fast3.png';
import React, {useEffect, useState} from 'react';

function Fast(){
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([Fst1, Fst2, Fst3])
  
  return(
    <>
      <h1 style={{fontSize:'60px', textAlign:'center'}}>The fast way to do<br/>things online</h1>
      <div className='carousel'>
        <img width={1300} height={500} src={allImages[selectedImage]}/>
        <div className='buttons'>
          <button onClick={()=>{
            if (selectedImage>0)
              setSelectedImage(selectedImage - 1)
          }}>Prev</button>

          <button onClick={()=>{
            if (selectedImage<allImages.length - 1)
              setSelectedImage(selectedImage + 1)
          }}>Next</button>
        </div>
      </div>
    </>
  )
}
export default Fast;