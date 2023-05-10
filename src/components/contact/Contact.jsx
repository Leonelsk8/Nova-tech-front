/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = (props) => {
  const { modeDL, textDL, lang } = props;
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
    <div className={`d-flex justify-content-center vh-100 bg${modeDL}`}>
      <form className={`contact contactForm bg-${modeDL} text${textDL}`} ref={refForm} action='' onSubmit={handleSubmit}>
        <div className='header-contact'>
          <h2>{lang.Contact.title}</h2>
          <p>{lang.Contact.subtitle}</p>
        </div>
        <fieldset className='field-name'>
          <label className='symbol-required name' htmlFor=' Name'>
          {lang.Contact.nombre}
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
          {lang.Contact.email}
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
          <label className='symbol-required'>
          {lang.Contact.mensaje}
            </label>
          <textarea className='textareaResponsive'
            maxLength='500'
            placeholder='ej: mensaje message'
            name='message'
            id=''
            cols='30'
            rows=''
          />
        </fieldset>
        <button className='btn-send'>{lang.Contact.enviar}</button>
      </form>
    </div>
  );
};

export default Contact;
