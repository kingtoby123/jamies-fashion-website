import React from 'react'
import AboutMe from '../../../static/assets/img/about/AboutMe.jpg'

export default function about(props) {
    return (
        <div className="about-wrapper">

            <div className="image">
                <img src={AboutMe} alt="About Me Img" />
            </div>

            <div className="about-content">
                <div className="heading">
                    <h3>
                        JAMIE DOMRUDE, OWNER AND DESIGNER
                    </h3>
                </div>

                <div className="text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellat, ullam cupiditate suscipit quia quis minima amet, repellendus accusamus dolorum blanditiis commodi, recusandae officia! Cum, dignissimos quis consequuntur deserunt esse quia optio earum vero, corrupti at sit soluta, repellendus eius!

                    </p>
                </div>
            </div>

            
        </div>
    )
}