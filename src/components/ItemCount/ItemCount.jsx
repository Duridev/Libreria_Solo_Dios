import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contenedor-contador">
                <button className="btn-contador" onClick={decrementar}> - </button>
                <p className="contador"> {contador} </p>
                <button className="btn-contador" onClick={incrementar}> + </button>
            </div>
            <button className="boton-agregar" onClick={()=> funcionAgregar(contador)}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount