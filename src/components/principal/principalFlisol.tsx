import logoFlisol from '../../assets/flisol-logo.png';
import decorativeElement from '../../assets/decorative-element.png';
import './principalFlisol.css';
// import linuxPenguin from '../../assets/linux-penguin.png';

const PrincipalFlisol = () => {
    return (
        <div className="principal-container">
            <div className="header-container">
                <img src={logoFlisol} alt="FLISOL Sucre 2025" className="main-logo" />
                {/* <img src={linuxPenguin} alt="Linux" className="penguin-logo" /> */}
            </div>

            <div className="scroll-indicator">
                <div className="arrow-down"></div>
            </div>

            <div className="decorative-elements">
                <img src={decorativeElement} alt="decorative-element" className="decorative-top-left" />
                <img src={decorativeElement} alt="decorative-element" className="decorative-top-right" />
                <img src={decorativeElement} alt="decorative-element" className="decorative-bottom-left" />
                <img src={decorativeElement} alt="decorative-element" className="decorative-bottom-right" />
            </div>
     <div className="information ">
        <p>únete 
            <br /> a la comunidad</p>
            <div className="icon-row">
        <a href="https://chat.whatsapp.com/Lr7Vuf5DJGdGdCvxbiHcqg" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="WhatsApp Icon" className="whatsapp-icon" />
        </a>
        <a href="https://www.facebook.com/usfxnucleolinux" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook Icon" className="facebook-icon" />
        </a>
        <a href="https://t.me/+4RAOFey05Q5iMjZh" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/telegram-app.png" alt="Telegram Icon" className="telegram-icon" />        
        </a>
    </div>
        
    </div>
        </div>
    );
}

export default PrincipalFlisol;