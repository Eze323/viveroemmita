import Producto from "../models/producto.model";

export default defineCachedEventHandler(async (event) =>{
    const id = getRouterParam(event,'id')
    try{
    const productoEliminado = await Producto.findByIdAndDelete(id)
    console.log(id);
    if(!productoEliminado){
        throw createError({
            statusCode:400,
            statusMessage:"El id no existe",
        })
    }
    return productoEliminado
    
    }catch(error){
        throw createError({
            statusCode:400,
            statusMessage:"Error al eliminar el producto",
            })

    }
})