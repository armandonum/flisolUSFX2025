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
        </div>
    );
}

export default PrincipalFlisol;