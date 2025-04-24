// src/components/ColaboradorList.tsx
import React from "react";
import "./gptLidt.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export type Colaborador = {
  id: string;
  nombre: string;
  foto: string;
  redes: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
    [key: string]: string | undefined;
  };
};

type ColaboradorListProps = {
  colaboradores: Colaborador[];
};

const ColaboradorList: React.FC<ColaboradorListProps> = ({ colaboradores }) => {
  return (
    <div className="trajeta-container">
      {colaboradores.map((col) => (
        <div key={col.id} className="trajeta">
          <img
            src={col.foto}
            alt={col.nombre}
            className="w-24 h-24 rounded-full object-cover mb-3"
          />
          <h3 className="text-lg font-semibold mb-2 text-center">
            {col.nombre}
          </h3>
          <div className="informacion">
            {col.redes.facebook && (
              <a
                href={col.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            )}
            {col.redes.instagram && (
              <a
                href={col.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            )}
            {col.redes.linkedin && (
              <a
                href={col.redes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {col.redes.twitter && (
              <a
                href={col.redes.twitter}
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            )}
            {col.redes.github && (
              <a
                href={col.redes.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColaboradorList;
