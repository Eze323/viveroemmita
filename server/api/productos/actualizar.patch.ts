import  Producto  from "../models/producto.model"


export default defineEventHandler(async (event) => {
     const body = await readBody(event)
        const productoActualizado = await Producto.findByIdAndUpdate(body._id,{
            nombre: body.nombre,
            precio: body.precio,
            descripcion: body.descripcion,
            imagen: body.imagen
        })

     return productoActualizado
    
  })