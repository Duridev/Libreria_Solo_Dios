import './CartWidget.css'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/998/998653.png"
  return (
    <div className='contenedor-carrrito'>
      <Link to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <span>{cantidadTotal}</span>
        }
      </Link>

    </div>
  )
}

export default CartWidget