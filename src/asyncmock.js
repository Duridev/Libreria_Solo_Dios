const productos = [
    {id: "1", img: "../img/autobiografia-de-un-yogui.jpg", nombre: "Autobiografia De Un Yogui", autor: "Paramhansa Yogananda", editorial: "Crystal Clarity Publishers", precio: 20000, stock: 5, paginas: 562, idCat:"1"},
    {id: "2", img: "../img/secretos-revelados.jpg", nombre: "Secretos Revelados de Kriya Yoga", autor: "JC Stevens", editorial: "Golden Swan Publishing", precio: 30000, stock: 10, paginas: 376, idCat:"4"},
    {id: "3", img: "../img/el-nuevo-sendero.jpg", nombre: "El Nuevo Sendero", autor: "Swami Kriyananda", editorial: "Ananda Ediciones", precio: 20000, stock: 10, paginas: 626, idCat:"2"},
    {id: "4", img: "../img/solodios.jpg", nombre: "Sólo Dios", autor: "Self-Realization Fellowship", editorial: "Self-Realization Fellowship", precio: 13000, stock: 10, paginas: 341, idCat:"3"},
    {id: "5", img: "../img/raja-yoga-el-manual-completo-de-yoga-y-meditacion.jpg", nombre: "Raya Yoga", autor: "Swami Kriyananda", editorial: "Ananda Ediciones", precio: 25000, stock: 10, paginas: 442, idCat:"2"},
    {id: "6", img: "../img/elvinomistico.jpg", nombre: "El vino del místico", autor: "Paramahansa Yogananda", editorial: "Self-Realization Fellowship", precio: 20000, stock: 10, paginas: 280, idCat:"1"},
    {id: "7", img: "../img/dosranas.jpg", nombre: "Dos Ranas en Apuros", autor: "Paramahansa Yogananda", editorial: "Self-Realization Fellowship", precio: 26000, stock: 10, paginas: 26, idCat:"1"},
    {id: "8", img: "../img/rajarsi.jpg", nombre: "Rajarsi Janakananda", autor: "Self-Realization Fellowship", editorial: "Self-Realization Fellowship", precio: 12000, stock: 10, paginas: 304, idCat:"3"},
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id ===
                id);
                resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },  2000 )
    })
} 