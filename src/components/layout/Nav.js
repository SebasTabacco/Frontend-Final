import { Link } from "react-router-dom";
import '../../styles/components/layaout/Nav.css';

var Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="novedades">Novedades</Link> </li>
                    <li><Link to="staff">Staff</Link> </li>
                    <li><Link to="servicios">Servicios</Link> </li>
                    <li><Link to="contacto">Contacto</Link> </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;