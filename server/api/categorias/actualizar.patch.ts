import Categoria from "../models/categoria.model"




export default defineEventHandler(async (event) => {
     const body = await readBody(event)
        const categoriaActualizada = await Categoria.findByIdAndUpdate(body._id,{
            nombre: body.nombre,
            precio: body.precio,
            descripcion: body.descripcion,
            imagen: body.imagen
        })

     return categoriaActualizada
    
  })