// src/components/expositores/ExpositorCard.tsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import './expositorCard.css';

interface ExpositorCardProps {
  horaInicio: string;
  horaFin: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  redes: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

const ExpositorCard: React.FC<ExpositorCardProps> = ({
  horaInicio,
  horaFin,
  nombre,
  descripcion,
  imagen,
  redes,
}) => {
  return (
    <div className="card-expositor">
      <div className="info">
        <p className="hora">{horaInicio} - {horaFin}</p>
        <h3 className="nombre">{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <div className="redes">
          {redes.facebook && <a href={redes.facebook}><FaFacebookF /></a>}
          {redes.instagram && <a href={redes.instagram}><FaInstagram /></a>}
          {redes.linkedin && <a href={redes.linkedin}><FaLinkedinIn /></a>}
          {redes.github && <a href={redes.github}><FaGithub /></a>}
        </div>
      </div>
      <div className="imagen">
        <img src={imagen} alt={nombre} />
      </div>
    </div>
  );
};

export default ExpositorCard;
