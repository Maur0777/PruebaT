
import { CreateProducto} from "../interface/producto.interface"

const API= 'http://localhost:3000'


export const createProductoRequest = (producto:CreateProducto)=>
    fetch(`${API}/productos`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    })
export const getProductoRequest = ()=> fetch(`${API}/productos`)
export const deleteProductoRequest = (id:string)=> fetch(`${API}/productos/${id}`,{
    method: 'DELETE'
})

export const updateProductoRequest = (id:string, producto:CreateProducto)=> fetch(`${API}/productos/${id}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(producto)
})