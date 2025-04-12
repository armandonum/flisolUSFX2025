import Card from "./componente_animado/SpotlightCard";
const Colaborador = ({ nombre, foto }: { nombre: string; foto: string }) => {
    return (

        
            <div className="colaborador-card">
                <Card className="custom-spotlight-card" spotlightColor="rgba(0, 68, 255, 0.65)">
                    <img src={foto} alt="Colaborador" width="200" height="200" />
                    <p>{nombre}</p>
                </Card>
            </div>
       
    );
}
export default Colaborador;