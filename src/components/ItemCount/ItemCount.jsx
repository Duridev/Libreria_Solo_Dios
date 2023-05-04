import "./ItemCount.css"
//1.-Importar funcion para trabajar con el ESTADO (es un Hook)
import { useState } from "react"

const ItemCount = () => {
    let maximoStock = 10;
    const incrementar = () => {
        if (contador < maximoStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }
    //Aca en la parte superior de los componentes voy a trabajar siempre con los Hooks
    //"useState" me vav a retornar un array con dos vALORES, que desestructurare de la siguiente forma:
    //["el estado", "funcion para cambiar el valor del estado" ("set" + "nombre del estado")] 
    //entre los parentesis de "useState()" va el valor inicial del estado
    const [contador, setContador] = useState(1)

    return (
        <div className="contenedor-contador">
            <button className="btn-contador" onClick={decrementar}> - </button>
            <p className="contador"> {contador} </p>
            <button className="btn-contador" onClick={incrementar}> + </button>
        </div>
    )
}
// si a onClick={decrementar} le pongo el parentesis, decrementar(), se va a disparar en cuanto cargue la pagina,
//o, se renderice la pagina

export default ItemCount