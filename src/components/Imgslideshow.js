import React from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';

 
const slideImages = [
  './imgshow/laptop.png',
  './imgshow/girl.png',
  './imgshow/dientu.png',
  './imgshow/beachsea.png'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Imgslideshow = () => {
    return (
      <Imgcontent >
      <Slide {...properties} >
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span> </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span> </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span> </span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <span> </span>
          </div>
        </div>
      </Slide>
      </Imgcontent>
    )
}
 
const Imgcontent = styled.nav`


.each-slide > div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 300px;
}

.each-slide span {
  padding: 20px;
  font-size: 20px;
  
  
}


`;


export default Imgslideshow;