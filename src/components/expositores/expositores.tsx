// src/components/expositores/Expositores.tsx
import React from "react";
import ExpositorCard from "./expositorCard";
import refrigerio from "../../assets/refrigerio.png";
import Ariel from "../../assets/expositores/Ariel_Guzman.png";
import Roger from "../../assets/expositores/Roger.png";
import Andrea from "../../assets/expositores/Andrea.png";
import Adriana from "../../assets/expositores/Adriana.png";
import Porcel from "../../assets/expositores/Porcel.png";
import instalacion from "../../assets/instalacion.png";
const Expositores: React.FC = () => {
  const expositores = [
    {
      horaInicio: "9:00   ",
      horaFin: " 10:45",
      nombre: "instalacion",
      descripcion: "instalacion de software libre",
      imagen: instalacion, 
      redes: {
        
        instagram: "https://www.instagram.com/andreacoding/",
        linkedin: "https://www.linkedin.com/in/andrea-cornejo-m/",
      
      },
    },
    {
      horaInicio: "11:00   ",
      horaFin: " 11:45",
      nombre: "Ing. Andrea Cornejo",
      descripcion: "¿Sigues usando Windows? Hablemos de Linux...",
      imagen: Andrea, 
      redes: {
        
        instagram: "https://www.instagram.com/andreacoding/",
        linkedin: "https://www.linkedin.com/in/andrea-cornejo-m/",
      
      },
    },
    {
      horaInicio:"12:00 ",
      horaFin: "13:45",
      nombre: "Ing. Ariel Gusman Gonzales",
      descripcion: "Técnicas avanzadas de Pentesting Web y Explotación de Vulnerabilidades",
      imagen: Ariel, 
      redes: {
        facebook: "https://www.facebook.com/share/1DSc49F2zH/",
        instagram: "https://www.instagram.com/1412rocker?igsh=dGdreWJwdGZ0djd4",
        linkedin: "https://www.linkedin.com/in/ariel-esteban-guzman-gonzales-24655715b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "",
      },
    },
    {
      horaInicio: "14:00",
      horaFin: "14:45",
      nombre: "Ing. Roger David Barja Montellano",
      descripcion: "Comunidad de Software Libre - Distribuciones",
      imagen: Roger, 
      redes: {
        facebook: "",
        instagram: "https://www.instagram.com/rogerbarja/",
        linkedin: "",
        github: "",
      },
    },
    {
      horaInicio: "15:00",
      horaFin: "15:45",
      nombre: "Ing. Juan Carlos Porcel Aramayo",
      descripcion: "El futuro de GNU, IA local en la terminal",
      imagen: Porcel, 
      redes: {
        facebook: "",
        instagram: "https://www.instagram.com/jcapax/",
        linkedin: "",
        github: "",
      },
    },
    {
      horaInicio: "16:00",
      horaFin: "16:40",
      nombre: "refrigerio ",
      descripcion: "",
      imagen: refrigerio, 
      redes: {
        facebook: "",
        instagram: "",
        linkedin: "",
        github: "",
      },
    },
    {
      horaInicio: " 16:40",
      horaFin: "17:40",
      nombre: "Ing. Adriana Calvo",
      descripcion: "Me cansé de la innovación ",
      imagen: Adriana, 
      redes: {
        facebook: "",
        instagram: "https://www.instagram.com/adri.js_?igsh=MWdsaHJ2cHd0azVzbA%3D%3D&utm_source=qr",
        linkedin: "",
        github: "",
      },
    },
    

    {
      horaInicio:"17:40 ",
      horaFin: "18: 40",
      nombre: "Ing. Ariel Gusman Gonzales",
      descripcion: "Flipper Zero, El Tamagotchi Hacker que debes conocer",
      imagen: Ariel, 
      redes: {
        facebook: "https://www.facebook.com/share/1DSc49F2zH/",
        instagram: "https://www.instagram.com/1412rocker?igsh=dGdreWJwdGZ0djd4",
        linkedin: "https://www.linkedin.com/in/ariel-esteban-guzman-gonzales-24655715b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: "",
      },
    },
    {
      horaInicio: "19:00   ",
      horaFin: " . . .",
      nombre: "instalacion",
      descripcion: "instalacion de software libre",
      imagen: instalacion, 
      redes: {
        
        instagram: "",
        linkedin: "",
      
      },
    },


  ];

  return (
    <section className="bg-black py-10 min-h-screen">
      <h2 className="text-3xl text-white text-center font-bold mb-10">Cronograma</h2>
      <div className="flex flex-col items-center gap-8">
        {expositores.map((expositor, idx) => (
          <ExpositorCard key={idx} {...expositor} />
        ))}
      </div>
    </section>
  );
};

export default Expositores;


