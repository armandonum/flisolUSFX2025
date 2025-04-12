// src/components/expositores/Expositores.tsx
import React from "react";
import ExpositorCard from "./expositorCard";
import user from "../../assets/user.png";
import refrigerio from "../../assets/refrigerio.png";

const Expositores: React.FC = () => {
  const expositores = [
    {
      horaInicio: "14:30   ",
      horaFin: " 15:00",
      nombre: "Ing. Andrea Cornejo",
      descripcion: "¿Sigues usando Windows? Hablemos de Linux...",
      imagen: user, 
      redes: {
        
        instagram: "https://www.instagram.com/andreacoding/",
        linkedin: "https://www.linkedin.com/in/andrea-cornejo-m/",
      
      },
    },
    {
      horaInicio: "15:10",
      horaFin: "15:40",
      nombre: "Ing. Roger David Barja Montellano",
      descripcion: "......................",
      imagen: user, 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      horaInicio: "15:50",
      horaFin: "16:20",
      nombre: "Ing. Juan Carlos Porcel",
      descripcion: "................",
      imagen: user, 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      horaInicio: "16:30",
      horaFin: "17:00",
      nombre: "refrigerio ",
      descripcion: "un sandwich de mortadela + soda",
      imagen: refrigerio, 
      redes: {
        facebook: "",
        instagram: "",
        linkedin: "",
        github: "",
      },
    },
    {
      horaInicio: " 17:10",
      horaFin: "17:40",
      nombre: "Ing. Adriana Calvo",
      descripcion: "................",
      imagen: user, 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },
    

    {
      horaInicio:"17:50 ",
      horaFin: "17: 40",
      nombre: "Ing. Ariel Gusman Gonzales",
      descripcion: "Flipper Zero: Hacking Ético con un Dispositivo Open Source",
      imagen: user, 
      redes: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        github: "#",
      },
    },


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


