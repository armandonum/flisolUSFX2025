import React from "react";
import ColaboradorList, { Colaborador } from "./gptList";
import gerson from "../../../assets/gpt/gerson.png";
import jacha from "../../../assets/gpt/jacha.png";
import jhamil from "../../../assets/gpt/jhamil.png";
import jhonny from "../../../assets/gpt/jhonny.png";
import joel from "../../../assets/gpt/joel.png";
import luis from "../../../assets/gpt/luis.png";
import rayner from "../../../assets/gpt/rayner.png";
import shariel from "../../../assets/gpt/shariel.png";
import tatiana from "../../../assets/gpt/tatiana.png";
import vane from "../../../assets/gpt/vane.png";
const colaboradores: Colaborador[] = [
  {
    id: "1",
    nombre: "Mamani Mendoza Gerson ",
    foto: gerson,
    redes: {
      facebook: "https://www.facebook.com/profile.php?id=61557489206625",
      instagram: "https://www.instagram.com/fox_gr123321",
      github :"https://github.com/gerok123"
    },
    },
  {
    id:"2",
    nombre: "Jachacollo Andia Josue David",
    foto: jacha,
    redes: {
      facebook: "https://www.facebook.com/share/1ATDxuyEos/",
      instagram: "https://www.instagram.com/josuedavid.andia",
      linkedin :"https://www.linkedin.com/in/josue-david-jachacollo-andia-415061361"
    }
  
},
{
    id:"3",
    nombre: "Bejarano Bruno Jhamil",
    foto: jhamil,
    redes: {
      facebook: "https://www.facebook.com/share/1C34CM1eaP/",
      instagram: "https://www.instagram.com/bejaranoyamil",
      linkedin :"https://www.linkedin.com/in/bejarano-bruno-jhamil-5ba331361"
    }
  
},
{
    id:"4",
    nombre: "Ckuno Torihuano Jhonny Rodrigo",
    foto: jhonny,
    redes: {
      facebook: "https://www.facebook.com/share/1FU8EQAJ6E/",
      instagram: "https://www.instagram.com/jhonnyckuno",
      linkedin :"www.linkedin.com/in/jhonny-ckuno-b799571ab",
 
    }
  
},
{
    id:"5",
    nombre: "Salinas Quispe Joel Edilson",
    foto: joel,
    redes: {
      facebook: "https://www.facebook.com/share/1Dh4TDcwgn/",
      linkedin:"https://www.linkedin.com/in/joel-edilson-salinas-quispe-a30ba9191",
      
    }
  
},
{
    id:"6",
    nombre: "Pastrana Quispe Luis Fernando",
    foto: luis,
    redes: {
      facebook: "https://www.facebook.com/share/16UpqYJpRv/",
      instagram: "https://www.instagram.com/fernan__139",
      linkedin : "https://www.linkedin.com/in/luis-pastrana-3b6002241",
    }
  
},
{
    id:"7",
    nombre: "Caba Condori Rayner",
    foto: rayner,
    redes: {
      facebook: "https://www.facebook.com/profile.php?id=100086614297090",
      instagram: "https://www.instagram.com/caba4.7",
      linkedin :"https://www.facebook.com/profile.php?id=100086614297090",
         }
  
},
{
    id:"8",
    nombre: "Verduguez Choquevillca Shariel Aylin",
    foto: shariel,
    redes: {
      facebook: "https://www.facebook.com/share/1CNeyf7cGN/",
      instagram: "https://www.instagram.com/shariel_verduguez",
      linkedin:"https://www.linkedin.com/in/shariel-aylin-verduguez-choquevillca-a7a050361",
      github :"https://github.com/SharielAylinVerduguezChoquevillca"
    }
  
},
{
    id:"9",
    nombre: "Muraña Pizarro Nayda Thatiana",
    foto: tatiana,
    redes: {
      instagram: "https://www.instagram.com/tatiana_murana",
      github :"https://github.com/NaydaThatiana"
    }
  
},
{
    id:"10",
    nombre: "Villarroel Choque Vanessa",
    foto: vane,
    redes: {
      facebook: "https://www.facebook.com/rosario.choque.58555",
      instagram: "https://www.instagram.com/vane_v_ch",
     
    }
  
},

];

const GPT: React.FC = () => (
  <div className="container ">

    <ColaboradorList colaboradores={colaboradores} />
  </div>
);

export default GPT;
