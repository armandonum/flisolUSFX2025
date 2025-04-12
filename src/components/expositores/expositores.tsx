// src/components/expositores/Expositores.tsx
import React from "react";
import ExpositorCard from "./expositorCard";

const Expositores: React.FC = () => {
  const expositores = [
    {
      horaInicio: "8:15",
      horaFin: "8:45",
      nombre: "Andrea Cornejo",
      descripcion: "........",
      imagen: "/src/assets/Armand.png", 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      horaInicio: "8:55",
      horaFin: "9:25",
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
      horaInicio: " 9:35",
      horaFin: "10:05",
      nombre: "Adriana Calvo",
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
      horaInicio: "10:15",
      horaFin: "10:45",
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
      horaInicio:"11:15",
      horaFin: "11:45",
      nombre: "Ing. bergman",
      descripcion: "montar servidor git lab en un SO linux",
      imagen: "/src/assets/Armand.png", 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      horaInicio:"11:55",
      horaFin: "12:25",
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


