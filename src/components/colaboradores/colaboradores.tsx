import React, { useState } from "react";
import "./colaboradores.css";
import Colaborador from "./colaborador";
import centro from "../../assets/img_colaboradores/centro.png";
import fcyT from "../../assets/img_colaboradores/fcyT.png";
import full from "../../assets/img_colaboradores/full.png";
import sucrelibre from "../../assets/img_colaboradores/sucrelibre.png";
import GPT from "./chatgpt/List";

const Colaboradores: React.FC = () => {
  const [mostrarGPT, setMostrarGPT] = useState(false);

  const manejarClickColaborador = () => {
    setMostrarGPT(prev => !prev);
  };

  const cerrarFlotante = () => {
    setMostrarGPT(false);
  };

  return (
    <div className="colaboradores-wrapper">
      <h2 className="text-2xl text-center my-6">Colaboradores</h2>
      <div className="colaboradores-container">
        <Colaborador
          nombre="Centro de Estudiantes Chat GPT"
          foto={centro}
          onClick={manejarClickColaborador}
        />
        <Colaborador
          nombre="Facultad de Ciencias y Tecnología"
          foto={fcyT}
          onClick={() => {}}
        />
        <Colaborador 
          nombre="Full Nacer" 
          foto={full} 
          onClick={() => {}} 
        />
        <Colaborador 
          nombre="Comunidad Sucre Libre" 
          foto={sucrelibre} 
          onClick={() => {}} 
        />
      </div>

      {mostrarGPT && (
        <>
          <div className="modal-backdrop" onClick={cerrarFlotante} />
          <div className="modal-flotante">
            <div className="modal-contenido">
              <div className="modal-header">
                <h3 className="text-xl font-bold">Chat GPT</h3>
                <button 
                  onClick={cerrarFlotante}
                  className="modal-close-btn"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <GPT />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Colaboradores;