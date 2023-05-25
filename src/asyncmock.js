const productos = [
    {id: 1, img: "./img/autobiografia-de-un-yogui.jpg", nombre: "Autobiografia De Un Yogui", autor: "Paramhansa Yogananda", editorial: "Crystal Clarity Publishers", precio: 20000, paginas: 562},
    {id: 2, img: "./img/secretos-revelados.jpg", nombre: "Secretos Revelados de Kriya Yoga", autor: "JC Stevens", editorial: "Golden Swan Publishing", precio: 30000, paginas: 376},
    {id: 3, img: "./img/el-nuevo-sendero.jpg", nombre: "El Nuevo Sendero", autor: "Swami Kriyananda", editorial: "Asociación Ananda Ediciones", precio: 20000, paginas: 626}
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