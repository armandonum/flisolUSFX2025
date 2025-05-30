import { useThemeDetector } from '../../hooks/useThemeDetector';
import decorativeElement from '../../assets/decorative-element.png';
import './sobreEvento.css';

const SobreEvento = () => {
  const isDarkMode = useThemeDetector();
  
  // Aplicamos clases condicionales basadas en el tema
  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';
  
  return (
    <div className={`sobre-evento-container ${themeClass}`}>
      <div className="evento-header">
        <hr className="line-left" />
        <h2>Sobre el evento</h2>
        <hr className="line-right" />
      </div>
      
      <div className="evento-content">
        <p>
          El Festival Latinoamericano de Instalación de Software Libre (FLISoL).
          Este 26 de abril, FLISoL Sucre 2025 se llevará a cabo en el Salón de la Facultad de
          Tecnología, donde se realizarán instalaciones gratuitas de sistemas y programas libres,
          además de charlas, talleres y demostraciones prácticas sobre herramientas, seguridad
          digital, cultura libre, concursos, y mucho más.
        </p>
        
        <p>
          El evento está dirigido a estudiantes, profesionales, docentes, emprendedores y
          entusiastas de la tecnología que deseen conocer más sobre el mundo del software libre.
        </p>
        
        <p className="invitation">
          ¡Te invitamos a ser parte de esta experiencia única de aprendizaje y comunidad!
        </p>
        
        <button
          className="register-button"
          onClick={() => window.open('https://docs.google.com/forms/d/1lVAyWQFTcHnChPHs6WQORf0pa_ORjdkhmdZ8PsSVFpg/viewform?edit_requested=true', '_blank')}
        >
          registra tu asistencia
        </button>
      </div>
      
      <div className="decorative-elements">
        <img 
          src={decorativeElement} 
          alt="Elemento decorativo" 
          className="decorative-bottom-left"
        />
        <img 
          src={decorativeElement} 
          alt="Elemento decorativo" 
          className="decorative-bottom-right"
        />
      </div>
    </div>
  );
}

export default SobreEvento;