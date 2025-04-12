import "./colaboradores.css";
import Colaborador from "./colaborador";
import centro from "../../assets/img_colaboradores/centro.png";
import fcyT from "../../assets/img_colaboradores/fcyT.png";
import itgroup from "../../assets/img_colaboradores/itgroup.jpg";
const colaboradores = () => {
  return (
    <>
    <br /><br /> <h2>Colaboradores</h2> <br /><br />
    <div className="colaboradores-container">
    <Colaborador nombre={"Centro de Estudiantes Chat GPT"} foto={centro}/>
    <Colaborador nombre={"Facultad de Ciencias y Tecnologia"} foto={fcyT}/>
    <Colaborador nombre={"IT-group Sucre"} foto={itgroup}/>
    </div>
    

    </>
  );
};

export default colaboradores;