import { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

export const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xsmycek",
        "template_yz714tv",
        form.current,
        "lZ0fvQ-7vtf2YNZwr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">LISTO PARA </span>
          <span>SUBIR DE NIVEL</span>
        </div>
        <div>
          <span>TU CUERPO</span>
          <span className="stroke-text">CON NOSOTROS?</span>
        </div>
      </div>
      <div className="right-j">
        <form
          ref={form}
          action=""
          className="email-container"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            name="user_email"
            placeholder="Ingresa tu Correo"
          />
          <button className="btn btn-j">Ingresa Ahora</button>
        </form>
      </div>
    </div>
  );
};
