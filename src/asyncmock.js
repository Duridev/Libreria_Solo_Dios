/*
const Productos = ({id, img, nombre,autor,editorial,precio,paginas}) => {
    
    <div>
    <Productos id="1" img="./img/" nombre="Autobiografia De Un Yogui" autor="Paramhansa Yogananda" editorial="Crystal Clarity Publishers" precio={20000} paginas={562} />
    <Productos id="2" img="./img/" nombre="Secretos Revelados de Kriya Yoga" autor="JC Stevens" editorial="Golden Swan Publishing" precio={30000} paginas={376} />
    <Productos id="3" img="./img/" nombre="El Nuevo Sendero" autor="Swami Kriyananda" editorial="Asociación Ananda Ediciones" precio={20000} paginas={626} />
    </div>
}
    
const contenedorProductos (Productos()) => {
        <div>
            <h2>Producto </h2>
            <p>{img}</p>
            <p>Nombre: {nombre}</p>
            <p>Autor: {autor}</p>
            <p>Editorial: {editorial}</p>
            <p>Precio: {precio}</p>
            <p>Páginas: {paginas}</p>
            <button>Agregar al Carrito</button>
        </div>
}
*/

const Productos = [
    {id: 1, img: "./img/autobiografia-de-un-yogui.jpg", nombre: "Autobiografia De Un Yogui", autor: "Paramhansa Yogananda", editorial: "Crystal Clarity Publishers", precio: 20000, paginas: 562},
    {id: 2, img: "./img/secretos-revelados.jpg", nombre: "Secretos Revelados de Kriya Yoga", autor: "JC Stevens", editorial: "Golden Swan Publishing", precio: 30000, paginas: 376},
    {id: 3, img: "./img/el-nuevo-sendero.jpg", nombre: "El Nuevo Sendero", autor: "Swami Kriyananda", editorial: "Asociación Ananda Ediciones", precio: 20000, paginas: 626}
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 2000);
    });
}