import React from 'react'

const Producto = ({nombre,autor,editorial,precio,paginas}) => {
    return (
        <div>
            <h2>Producto </h2>
            <p>Nombre: {nombre}</p>
            <p>Autor: {autor}</p>
            <p>Editorial: {editorial}</p>
            <p>Precio: {precio}</p>
            <p>Páginas: {paginas}</p>
            <button>Agregar al Carrito</button>
        </div>
    )
}

export default Producto