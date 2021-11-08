import React from 'react'
// import emailjs from "emailjs-com"

export default function contact (props) {


  function sendEmail(e) {
     e.preventDefault();

    emailjs.sendForm('service_4cx74uu', 'template_hrb5jsi', e.target, 'user_6MfeK5RxUPXBPqV9Mvq2V')
      .then((result) => {
          console.log(result.text); window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

    return (
        <div className="contact-wrapper">

            <div className="contact-area-wrapper">

                <div className="contact-area-heading">
                  <h3>Contact Me</h3>

                </div>


                <form className="form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <input type="text" name="name" id="FullName" placeholder="Your name"/>
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Your email"/>
                    </div>

                    <div className="form-group">
                        <textarea name="message" name="message" id="message" placeholder="Message"></textarea>
                    </div>


                    <div className="centered-btn-wrapper">
                        <button type="submit" className="btn" value="Send">Send</button>
                    </div>
                </form>

                <div className="text-contact-area">


                  <div className="my-information">

                      <div className="email">
                          <h3>Email</h3>
                          jamiemdomrude@gmail.com
                      </div>
                  </div>

                </div>
            </div>
        </div>
    )
}