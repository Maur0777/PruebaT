import { useEffect, useState } from "react";
import { getProductoRequest } from "../api/producto";
import ProductoItem from "./ProductoItem";
function ProductoList() {
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    getProductoRequest()
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, []);

  return (
    <div>
      {producto.map((producto) => (
        <ProductoItem key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ProductoList;
