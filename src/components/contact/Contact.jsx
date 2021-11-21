import { useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com'

export default function Contact() {
  const [message, setMessage] = useState(false);

  function handleSubmit (e) {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_ttywqq4',
    'template_maqxxw9',
    e.target,
    'user_LXKX7BUtjyKa2uzrex14o').then(res=>{
        console.log(res);
    }).catch(err=> console.log(err))
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assests/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="subject" placeholder="Subject" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply as soon as possible.</span>}
        </form>
      </div>
    </div>
  );
}