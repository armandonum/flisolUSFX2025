import { useRef, useEffect } from "react";
import "./carrucel.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import tuxImage from "../../assets/tux.png"; 
import Rocisela from "../../assets/Rocisela.png"; 
import Armando from "../../assets/Armando.png"; 
import Sebastian from "../../assets/Sebastian.png"; 
import Sergio from "../../assets/Sergio.png"; 
import Fernanda from "../../assets/Fernanda.png"; 
import Samuel from "../../assets/Samuel.png"; 
import Max from "../../assets/Max.png"; 
import Danner from "../../assets/Danner.png"; 

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
      if (tY > 30) tY = 30;
      if (tY < -30) tY = -30;
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

    const handlePointerDown = (e: PointerEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.closest("a")) {
        return;
      }
      if (e instanceof TouchEvent) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      } else {
        startX = e.clientX;
        startY = e.clientY;
      }

      e.stopPropagation();
      
      isDragging = true;
      playSpin(false);
      if (timerRef.current) clearInterval(timerRef.current);
      e.preventDefault();
    };

    const handlePointerMove = (e: PointerEvent | TouchEvent) => {
      if (!isDragging) return;

      const currentX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const currentY = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;

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

    const dragElement = dragRef.current;
    if (dragElement) {
      dragElement.addEventListener("touchstart", handlePointerDown);
      dragElement.addEventListener("touchmove", handlePointerMove);
      dragElement.addEventListener("touchend", handlePointerUp);

      dragElement.addEventListener("pointerdown", handlePointerDown);
      dragElement.addEventListener("pointermove", handlePointerMove);
      dragElement.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      if (dragElement) {
        dragElement.removeEventListener("touchstart", handlePointerDown);
        dragElement.removeEventListener("touchmove", handlePointerMove);
        dragElement.removeEventListener("touchend", handlePointerUp);

        dragElement.removeEventListener("pointerdown", handlePointerDown);
        dragElement.removeEventListener("pointermove", handlePointerMove);
        dragElement.removeEventListener("pointerup", handlePointerUp);
      }

      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
    <h2>Organizadores</h2>

    <div className="carruel">
      <div id="drag" ref={dragRef}>
        <div id="spin" ref={spinRef}>
          <div>
            <img src={tuxImage} alt="Tux" />
          </div>

          <div className="card">
            <img src={Rocisela} alt="Rocisela Pinedo" />
            <div className="card-buttons">
              Rocisela Pinedo
              <div className="social-icons">
                <a href="https://www.facebook.com/share/1JovyHKpJC/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Armando} alt="Armando Nuñez" />
            <div className="card-buttons">
              Armando Nuñez
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=100072802530579" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaFacebookF />
                </a>
                <a href="https://github.com/armandonum" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/armando-nu%C3%B1ez-condori-727487290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={Sebastian} alt="Sebastian" />
            <div className="card-buttons">
              Juan Sebastian Delgadillo 
              <div className="social-icons">
                <a href="https://www.facebook.com/share/15NnZ3jMJ5/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaFacebookF />
                </a>
                <a href="https://github.com/sebastianDLL" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/delgadillo-llanos-juan-sebastian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/sebastian_d_ll?igsh=MWc5eWNnZGh3bHlwdQ==" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Sergio} alt="Sebastian" />
            <div className="card-buttons">
            Sergio Alejandro
              <div className="social-icons">
                <a href="https://www.facebook.com/share/12LwBkJmRM3/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaFacebookF />
                </a>
               
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Fernanda} alt="Sebastian" />
            <div className="card-buttons">
            Fernanda Jeanette Flores
              <div className="social-icons">
                <a href="https://www.facebook.com/share/16KWjo6CkL/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/in/fernanda-flores-gallo-775406269/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/delgadillo-llanos-juan-sebastian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/floresgallofernanda?igsh=M2Z6MXA4OHdwd2V0" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>


          <div className="card">
            <img src={Samuel} alt="Sebastian" />
            <div className="card-buttons">
            Samuel Dayler Amonzabel
              <div className="social-icons">
             
                <a href="https://github.com/zohan22/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/samuel-amonzabel-b63748231/" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/zohanae77?igsh=c3MxMjF3bmwyc2c3" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>




          <div className="card">
            <img src={Max} alt="Sebastian" />
            <div className="card-buttons">
            Max Jherzon Rodas 
              <div className="social-icons">
             
                <a href="https://www.linkedin.com/in/max-jherzon-rodas-palacios-5b0948254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="icon">
                  <FaLinkedinIn />
                </a>
             
              </div>
            </div>
          </div>


          <div className="card">
            <img src={Danner} alt="Sebastian" />
            <div className="card-buttons">
            Aly Delgado Danner
            
              <div className="social-icons">
                           <a href="https://linktr.ee/aly_danner" target="_blank" rel="noopener noreferrer" className="icon">
                  <svg 
                    width="50%" 
                    height="100%" 
                    viewBox="65 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "block", maxWidth: "40px", maxHeight: "40px", margin: "auto" }} 
                  >
                    <path 
                      d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z" 
                      fill="#1da1f2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        <div id="ground"></div>
      </div>
    </div>
    </>
  );
};

export default Organizadores;
