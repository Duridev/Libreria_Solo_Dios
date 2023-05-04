import Producto from "../Producto/Producto"

const ContenedorProducto = () => {
    return (
        <div>
            <Producto nombre="Autobiografia De Un Yogui" autor="Paramhansa Yogananda" editorial="Crystal Clarity Publishers" precio={20000} paginas={562} />
            <Producto nombre="Secretos Revelados de Kriya Yoga" autor="JC Stevens" editorial="Golden Swan Publishing" precio={30000} paginas={376} />
            <Producto nombre="El Nuevo Sendero" autor="Swami Kriyananda" editorial="Asociación Ananda Ediciones" precio={20000} paginas={626} />
        </div>
    )
}

export default ContenedorProducto