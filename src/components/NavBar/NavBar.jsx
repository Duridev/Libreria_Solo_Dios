import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
        <h1>Librería Solo Dios</h1>

        <nav>
            <ul>
                <li>Nuestros Libros</li>
                <li>Autores</li>
                <li>Quienes Somos</li>
            </ul>
        </nav>

        <CartWidget/>
        </header>
    )
}

export default NavBar