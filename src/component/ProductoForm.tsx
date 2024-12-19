import { ChangeEvent, FormEvent, useState } from "react";
import { createProductoRequest } from "../api/producto";
function ProductoForm() {
  const [task, setTask] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const handleChange = (
    e: ChangeEvent <HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    const res = await createProductoRequest(task);
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="border border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Write a Name"
          onChange={handleChange}
        />

        <textarea
          name="description"
          rows={3}
          className="border border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Write a description"
          onChange={handleChange}
        ></textarea>

        <input
          type="number"
          name="price"
          className="border border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
          placeholder="Write a price"
          onChange={handleChange}
        />

        <button className="bg-indigo-500 px-3 block py-2 w-full rounded-full">
          Save
        </button>
      </form>
    </div>
  );
}

export default ProductoForm;
