import { useRef, useEffect } from "react";
import "./carrucel.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import personas from "../../data/personas";

const Organizadores = () => {

  const dragRef = useRef<{ timer?: ReturnType<typeof setTimeout> } | null>(null);
  const spinRef = useRef<HTMLDivElement | null>(null);
  const radius = 340;
  const autoRotate = true;
  const rotateSpeed = -60;
  const imgWidth = 190;
  const imgHeight = 230;
  let tX = 0, tY = 10, desX = 0, desY = 0;

  useEffect(() => {
    const odrag = dragRef.current;
    
    const ospin = spinRef.current;
    if (!ospin) return;
    const aImg = ospin.getElementsByClassName("card");
    const aEle = Array.from(aImg) as HTMLElement[];

    ospin.style.width = `${imgWidth}px`;
    ospin.style.height = `${imgHeight}px`;

    const ground = document.getElementById("ground");
    if (ground) {
      ground.style.width = `${radius * 3}px`;
      ground.style.height = `${radius * 3}px`;
    }

    function init(delayTime: string | undefined) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || `${(aEle.length - i) / 4}s`;
      }
    }

    function applyTransform(obj: HTMLElement) {
      if (tY > 90 || tY < -90) tY = 0;
      obj.style.transform = `rotateX(${tY}deg) rotateY(${tX}deg)`;
    }

    function playSpin(yes: boolean) {
      if (ospin) {
        ospin.style.animationPlayState = yes ? "running" : "paused";
      }
    }

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    setTimeout(() => init(undefined), 1000);

    let sX: number, sY: number;

    document.onpointerdown = function (e) {
      clearInterval(odrag?.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      document.onpointermove = function (e) {
        e = e || window.event;
        const nX = e.clientX;
        const nY = e.clientY;

        desX = nX - sX;
        desY = sY - nY;
        tX += desX * 0.1;
        tY += desY * 0.1;

        if (odrag) {
          applyTransform(odrag as HTMLElement);
        }

        sX = nX;
        sY = nY;
      };

      document.onpointerup = function () {
        odrag.timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;

          if (odrag && odrag instanceof HTMLElement) {
            applyTransform(odrag);
          }

          playSpin(false);

          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            if (odrag?.timer) clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);

        document.onpointermove = document.onpointerup = null;
      };

      return false;
    };
  }, []);
  return (
    
    <div className="carruel" >
    
      <div id="drag" ref={dragRef}>
        <div id="spin" ref={spinRef}>
          <div>
            <img src="src/assets/tux.png" alt="" />
          </div>
          {personas.map((persona, index) => (
  <div className="card" key={index}>
    <img src={`src/assets/${persona.imagen}`} alt={persona.nombre} />
    <div className="card-buttons">
     {persona.nombre}
      <div className="social-icons">
        
        {persona.redes.facebook && (
          <a href={persona.redes.facebook} target="_blank" rel="noopener noreferrer" className="icon">
            <FaFacebookF />
            
          </a>
        )}
        {persona.redes.github && (
          <a href={persona.redes.github} target="_blank" rel="noopener noreferrer" className="icon">
            <FaGithub />
           
          </a>
        )}
        {persona.redes.linkedin && (
          <a href={persona.redes.linkedin} target="_blank" rel="noopener noreferrer" className="icon">
            <FaLinkedinIn />
           
          </a>
        )}
        {persona.redes.instagram && (
          <a href={persona.redes.instagram} target="_blank" rel="noopener noreferrer" className="icon">
            <FaInstagram />
         
          </a>
        )}
      </div>
    </div>
  </div>
))}

        </div>
        <div id="ground"></div>
      </div>
    </div>
  );
};

export default Organizadores;