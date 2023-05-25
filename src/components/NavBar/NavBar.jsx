import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
        <Link to="/" className="link">
            <h1>Librería Solo Dios</h1>
        </Link>

        <nav>
            <ul>
                <li><NavLink to="/" className="link">Nuestros Libros</NavLink></li>
                <li>Autores</li>
                <li><NavLink to="/categoria/1" className="link">Paramahansa Yogananda</NavLink></li>
                <li><NavLink to="/categoria/2" className="link">Swami Kriyananda</NavLink></li>
                <li><NavLink to="/categoria/3" className="link">Self-Realization Fellowship</NavLink></li>
                <li><NavLink to="/categoria/4" className="link">Otros Autores</NavLink></li>
            </ul>
        </nav>

        <CartWidget/>
        </header>
    )
}

export default NavBar