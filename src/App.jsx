import './App.css';
//import Producto from './components/Producto/Producto';
import ContenedorProducto from './components/ContenedorProductos/ContenedorProducto';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hay libros que parecen casi vivos por su poder para transmitir, no sólo ideas, sino un nuevo estado de conciencia."/>
      <ContenedorProducto />
    </>
  );
}

export default App;

