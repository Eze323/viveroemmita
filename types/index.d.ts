export{}


declare global{

    interface IProducto{
        _id: string,
        nombre: string,
        precio: number,
        descripcion: string,
        imagen: string
    }
}