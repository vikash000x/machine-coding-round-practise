import React, { useState } from 'react'
import "./styles.css";

const Carousel = () => {
    
 const [activeIndices, setActiveIndices] = useState(0);

 const images = [
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg",
 ]

  const handleprev = () =>{
    if(activeIndices === 0) {
        setActiveIndices((prev)=> images.length-1)
    } else {
        setActiveIndices((prev)=> prev-1)
    }
  }

  const handlenext = () =>{
    if(activeIndices === images.length-1){
        setActiveIndices((prev)=> 0);
    } else {
        setActiveIndices((prev)=>prev+1);
    }
  }

  return (
    <div className="container">

     <div className="imageContainer">

     <img src={images[activeIndices]}  />
     </div>

     <button  onClick={handleprev} > prev </button>
     <button onClick={handlenext} > next </button>

     <div className="textContainer">
          <span className="text">{`${activeIndices+1} of ${images.length}`}</span>
        </div>
    </div>
  )
}

export default Carousel