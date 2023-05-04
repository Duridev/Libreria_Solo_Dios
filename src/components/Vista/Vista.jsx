import "./Vista.css"
import { useState } from "react"

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);
    const cambiarModo = () => {
        setModoOscuro(!modoOscuro)
    };
    const estilo = modoOscuro ? "oscuro" : "claro";
    return (
        <div className={estilo}>
            <button onClick={cambiarModo}>{modoOscuro ? "Modo Claro" : "Modo Oscuro"}</button>
            <h2>Componente Vista</h2>
            <p>lorem jsndasnnk sd nasdnsnanlkasndn dnsan ld nssanna lnlnsan sdnsandanlsa ndlaknsdknasadn kanskdnas knadsndaslnskdnas n nns nsnask dnsa nkdlandklan skns dklanknskanadklnsk nasndkansnkalsndkasndknasknasndiajsidohashdashd asdh a shdhasuhd;ah sjhasdnjas asjnjskandkmsans anjsdji</p>
        </div>
    )
    }

export default Vista