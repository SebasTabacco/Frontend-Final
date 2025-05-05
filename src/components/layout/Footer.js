import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import '../../styles/components/layaout/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h3>Síguenos en</h3>
            <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-skype"></i>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitch"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-youtube"></i>
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-discord"></i>
                </a>
            </div>
            <p>&copy; 2025 Núcleo Web. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;
