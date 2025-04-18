import "./colaboradores.css";
import Colaborador from "./colaborador";
import centro from "../../assets/img_colaboradores/centro.png";
import fcyT from "../../assets/img_colaboradores/fcyT.png";
import full from "../../assets/img_colaboradores/full.png";
import sucrelibre from "../../assets/img_colaboradores/sucrelibre.png";
const colaboradores = () => {
  return (
    <>
    <br /><br /> <h2>Colaboradores</h2> <br /><br />
    <div className="colaboradores-container">
    <Colaborador nombre={"Centro de Estudiantes Chat GPT"} foto={centro}/>
    <Colaborador nombre={"Facultad de Ciencias y Tecnologia"} foto={fcyT}/>
    <Colaborador nombre={"Full Nacer"} foto={full}/>
    <Colaborador nombre={"Comunidad Sucre Libre"} foto={sucrelibre}/>

    </div>
    </>
  );
};

export default colaboradores;