import React from "react";
import "./Contact.css";

const Contact = () => {
  return (

   <section id="contact">
     <div className="form-wrapper">
      <div class="container-form">
    <div class="illustration">
        <img src="https://colorlib.com/etc/cf/ContactFrom_v12/images/img-01.png" alt="Illustration"/>
    </div>
    <div class="contact-form">
        <h2>Get in touch</h2>
        <form>
            <input type="text" placeholder="Name" required/>
            <input type="email" placeholder="Email" required/>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
</div>
    </div>

   </section>
  );
};

export default Contact;
