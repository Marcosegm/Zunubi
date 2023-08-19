import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-form-container">
        <input type="text" placeholder="tucorreo@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export  {Contact};