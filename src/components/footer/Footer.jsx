
import './StyleFooter.css'

// Componente Footer
export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <p>&copy; 2024 GreenCircle. Todos os direitos reservados. Marca Registrada ®</p>
                </div>
                <div className="footer-section">
                    <p>Contato:</p>
                    <p>info@greencircle.com</p>
                    <p>(123) 456-7890</p>
                </div>  
                <div className="footer-section">
                    <img src="./src/assets/logo.png" alt="Logo da GreenCircle" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;