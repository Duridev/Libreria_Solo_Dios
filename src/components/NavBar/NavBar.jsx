import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
        <Link to="/">
            <h1>Librería Solo Dios</h1>
        </Link>

        <nav>
            <ul>
                <li><NavLink to="/">Nuestros Libros</NavLink></li>
                <li>Autores</li>
                <li><NavLink to="/categoria/1">Paramahansa Yogananda</NavLink></li>
                <li><NavLink to="/categoria/2">Swami Kriyananda</NavLink></li>
                <li><NavLink to="/categoria/3">Self-Realization Fellowship</NavLink></li>
                <li><NavLink to="/categoria/4">Otros Autores</NavLink></li>
            </ul>
        </nav>

        <CartWidget/>
        </header>
    )
}

export default NavBar