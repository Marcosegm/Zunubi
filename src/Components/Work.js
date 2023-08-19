import React from "react";
import PickMeals from "../Assets/whatsapp-logo.png";
import ChooseMeals from "../Assets/ubicacion.png";
import DeliveryMeals from "../Assets/correo-logo.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Whatsapp",
      text: "+593-098 040 1170.",
    },
    {
      image: ChooseMeals,
      title: "Ubicación",
      text: "Guayaquil-Ecuador ",
    },
    {
      image: DeliveryMeals,
      title: "Correo",
      text: "zunubi@gmail.com",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Contactanos</p>
        <h1 className="primary-heading">Tu opinión es muy importante</h1>
        <p className="primary-text">
        Prestar un buen servicio es fundamental para nosotros, por eso te ofrecemos diferentes medios para responder a cada una de tus solicitudes e inquietudes en cualquier momento..
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export {Work};