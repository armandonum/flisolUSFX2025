import { useRef, useEffect } from "react";
import "./carrucel.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import personas from "../../data/personas";

const Organizadores = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const radius = 340;
  const autoRotate = true;
  const rotateSpeed = -60;
  const imgWidth = 190;
  const imgHeight = 230;
  let tX = 0, tY = 10, desX = 0, desY = 0;

  useEffect(() => {
    const ospin = spinRef.current;
    const odrag = dragRef.current;
    if (!ospin || !odrag) return;

    
    const aImg = ospin.getElementsByClassName("card");
    const aEle = Array.from(aImg) as HTMLElement[];

    ospin.style.width = `${imgWidth}px`;
    ospin.style.height = `${imgHeight}px`;

    const ground = document.getElementById("ground");
    if (ground) {
      ground.style.width = `${radius * 3}px`;
      ground.style.height = `${radius * 3}px`;
    }

   
    const init = (delayTime?: string) => {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || `${(aEle.length - i) / 4}s`;
      }
    };

    
    const applyTransform = (obj: HTMLElement) => {
      if (tY > 90) tY = 90;
      if (tY < -90) tY = -90;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    
    const playSpin = (play: boolean) => {
      if (ospin) {
        ospin.style.animationPlayState = play ? "running" : "paused";
      }
    };


    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

   
    setTimeout(() => init(), 1000);


    let isDragging = false;
    let startX: number, startY: number;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

    
      playSpin(false);
      if (timerRef.current) clearInterval(timerRef.current);

      e.preventDefault(); 
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;

      const currentX = e.clientX;
      const currentY = e.clientY;


      desX = currentX - startX;
      desY = currentY - startY;


      tX += desX * 0.1;
      tY += desY * 0.1;

      if (odrag) {
        applyTransform(odrag);
      }

   
      startX = currentX;
      startY = currentY;

      e.preventDefault(); 
    };

    const handlePointerUp = () => {
      isDragging = false;


      timerRef.current = setInterval(() => {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;

        if (odrag) {
          applyTransform(odrag);
        }

      
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          if (timerRef.current) clearInterval(timerRef.current);
          playSpin(true);
        }
      }, 17);
    };


    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);

   
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="carruel">
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