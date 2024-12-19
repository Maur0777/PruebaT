import { Producto } from "../interface/producto.interface";
import { deleteProductoRequest } from "../api/producto";
interface Props {
  producto: Producto;
}

function TaskItem({ producto }: Props) {

  const handleDelete = async (id) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");
    if (!confirmed) return;

    try {
      const response = await deleteProductoRequest(id);

      if (response.ok) {
        alert("Elemento eliminado correctamente");
      } else {
        alert("Error al eliminar el elemento");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Hubo un problema con la solicitud");
    }
  };
  return (
    <div
      key={producto._id}
      className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
      </div>
      <div className="flex gap-x-2">
        <button> Update</button>
        <button
        onClick={()=>hanleDelete(producto._id)} 
        > Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
