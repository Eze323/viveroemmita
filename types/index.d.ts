export { }


declare global {

    interface IProducto {
        _id: string,
        nombre: string,
        precio: number,
        descripcion: string,
        imagen: string
    }

    interface ICategoria {
        _id: string,
        nombre: string,
        descripcion: string;
        icono: string,

    }

    interface IIngreso {
        _id: string,
        fecha: Date,
        monto: number,
        tipo: string,
        descripcion: string,
    }
}