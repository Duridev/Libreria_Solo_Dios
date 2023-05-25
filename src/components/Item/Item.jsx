import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({img, id, nombre,autor,editorial,precio,paginas}) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre}/>
            <h3>Nombre: {nombre}</h3>
            <p>Autor: {autor}</p>
            <p>Editorial: {editorial}</p>
            <p>Precio: {precio}</p>
            <p>Páginas: {paginas}</p>
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item