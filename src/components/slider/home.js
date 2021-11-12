import React from 'react'

export default function SlideShow(props) {

        const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    return (
        <div className="Slide-show">

        <div className="slideshow"></div>
        <div className="slideShowSLider">

            {colors.map((backgroundColor, index) => (
            <div className="slide" key={index} style={{ backgroundColor }}/>))}

        </div>
        <div className="slider"></div>
        
    </div>
    )
}