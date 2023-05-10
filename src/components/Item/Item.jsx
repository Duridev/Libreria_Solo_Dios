import './Item.css'

const Item = ({img, id, nombre,autor,editorial,precio,paginas}) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={img} alt={nombre}/>
            <h3>Nombre: {nombre}</h3>
            <p>Id: {id}</p>
            <p>Autor: {autor}</p>
            <p>Editorial: {editorial}</p>
            <p>Precio: {precio}</p>
            <p>Páginas: {paginas}</p>
            <button className='btnProducto'>Ver Detalle</button>
        </div>
    )
}

export default Item