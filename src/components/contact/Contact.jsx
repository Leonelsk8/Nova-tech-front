import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const refForm = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = 'service_53aniis';
    const templateId = 'template_pdtmwf7';
    const apikey = 'HnteRGamNFUVntOte';

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
  };

  return (
    <div className='d-flex justify-content-center'>
      <form className='contact' ref={refForm} action='' onSubmit={handleSubmit}>
        <div className='header-contact'>
          <h2>Contact Us </h2>
          <p>Please fill this form</p>
        </div>
        <fieldset className='field-name'>
          <label className='symbol-required name' htmlFor=' Name'>
            Name
          </label>
          <input
            name='username'
            type='text'
            placeholder='Ej: Nova Tech'
            required
          />
        </fieldset>
        <fieldset className='field-email'>
          <label className='symbol-required' name='email'>
            Email
          </label>
          <input
            placeholder='Ej:novatech068@gmail.com'
            type='email'
            name='email'
            id='email'
            required
          />
        </fieldset>
        <fieldset className='field-message'>
          <label className='symbol-required'>Email</label>
          <textarea
            maxLength='500'
            placeholder='type yout message'
            name='message'
            id=''
            cols='30'
            rows=''
          />
        </fieldset>
        <button className='btn-send'>SEND</button>
      </form>
    </div>
  );
};

export default Contact;
