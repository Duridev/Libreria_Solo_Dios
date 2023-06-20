import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to="/" className="link h1">
                <h1>Librería Solo Dios</h1>
            </Link>

            <nav>
                <li><NavLink to="/" className="link"> Todos Nuestros Libros</NavLink></li>
                <ul className='dropdown'>
                    <li className='dropdown__list'>
                        <Link to='#' className='dropdown__link'>
                            Autores
                            <input type='checkbox' className='dropdown__check'/>
                        </Link>
                        <div className='dropdown__content'>
                            <ul className='dropdown__sub'>
                                <li className='dropdown__li'><NavLink to="/categoria/1" className="dropdown__item">Paramahansa Yogananda</NavLink></li>
                                <li className='dropdown__li'><NavLink to="/categoria/2" className="dropdown__item">Swami Kriyananda</NavLink></li>
                                <li className='dropdown__li'><NavLink to="/categoria/3" className="dropdown__item">Self-Realization Fellowship</NavLink></li>
                                <li className='dropdown__li'><NavLink to="/categoria/4" className="dropdown__item">Otros Autores</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar