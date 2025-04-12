// src/components/expositores/Expositores.tsx
import React from "react";
import ExpositorCard from "./expositorCard";

const Expositores: React.FC = () => {
  const expositores = [
    {
      horaInicio: "14:30   ",
      horaFin: " 15:00",
      nombre: "Ing. Andrea Cornejo",
      descripcion: "¿Sigues usando Windows? Hablemos de Linux...",
      imagen: "/src/assets/Armand.png", 
      redes: {
        
        instagram: "https://www.instagram.com/andreacoding/",
        linkedin: "https://www.linkedin.com/in/andrea-cornejo-m/",
      
      },
    },
    {
      horaInicio: "..",
      horaFin: "000",
      nombre: "Ing. Roger David Barja Montellano",
      descripcion: "......................",
      imagen: "/src/assets/Armand.png", 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      horaInicio: " ...",
      horaFin: "..",
      nombre: "Ing. Adriana Calvo",
      descripcion: "................",
      imagen: "/src/assets/Armand.png", 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      horaInicio: "...",
      horaFin: "...",
      nombre: "Ing. Juan Carlos Porcel",
      descripcion: "................",
      imagen: "/src/assets/Armand.png", 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },

    {
      horaInicio:"...",
      horaFin: "...",
      nombre: "Ing. Ariel Gusman Gonzales",
      descripcion: "Técnicas Avanzadas de Pentesting en un Dominio Corporativo.",
      imagen: "/src/assets/Armand.png", 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },

    // Puedes duplicar este objeto para más expositores
  ];

  return (
    <section className="bg-black py-10 min-h-screen">
      <h2 className="text-3xl text-white text-center font-bold mb-10">Expositores</h2>
      <div className="flex flex-col items-center gap-8">
        {expositores.map((expositor, idx) => (
          <ExpositorCard key={idx} {...expositor} />
        ))}
      </div>
    </section>
  );
};

export default Expositores;


