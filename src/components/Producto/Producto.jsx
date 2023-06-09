import React from 'react'

const Producto = ({id, img, nombre,autor,editorial,precio,paginas}) => {
    return (
        <div>
            <img className='imgProducto' src={img} alt={nombre}/>
            <p>Nombre: {nombre}</p>
            <p>Id: {id}</p>
            <p>Autor: {autor}</p>
            <p>Editorial: {editorial}</p>
            <p>Precio: {precio}</p>
            <p>Páginas: {paginas}</p>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Producto