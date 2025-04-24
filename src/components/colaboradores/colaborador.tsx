import Card from "./componente_animado/SpotlightCard";

const Colaborador = (
    { nombre, foto, onClick }: { 
        nombre: string; 
        foto: string;
        onClick: (e: React.MouseEvent) => void
    }) => {
    return (
        <div className="colaborador-card" onClick={onClick}>
            <Card className="custom-spotlight-card" spotlightColor="rgba(0, 68, 255, 0.65)">
                <img src={foto} alt="Colaborador" />
                <p>{nombre}</p>
            </Card>
        </div>
    );
}

export default Colaborador;