import React from 'react'
import AboutMe from '../../../static/assets/img/about/AboutMe.jpg'



export default function Slideshow() {


  return (
    <div class="slider">
    <span id="slide-1"></span>
    <span id="slide-2"></span>
    <span id="slide-3"></span>
    <div class="image-container">
      <img src= {AboutMe} class="slide" width="500" height="300" />
      <img src= {AboutMe} class="slide" width="500" height="300" />
      <img src= {AboutMe} class="slide" width="500" height="300" />
    </div>
    <div class="buttons">
      <a href="#slide-1"></a>
      <a href="#slide-2"></a>
      <a href="#slide-3"></a>
    </div>
  </div>
  );
}
  
