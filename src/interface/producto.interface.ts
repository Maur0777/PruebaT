export interface Producto {
    _id?: string;
    name: string;
    description?: string;
    price?: number;
    createdAt?: string;
    updatedAt?: string;
}
export type CreateProducto = Omit<Producto, '_id'  | 'createdAt' | 'updatedAt'>