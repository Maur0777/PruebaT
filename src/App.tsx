import ProductList from "./component/ProductList";
import ProductoForm from "./component/ProductoForm";
function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      
        <h1 className="text-3xl font-bold text-center block my-2 justify-center ">Productos</h1>
        <br></br>
        <br></br>
        <br></br>
        <ProductList/>
        <ProductoForm/>
      
    </div>
  );
}

export default App;
