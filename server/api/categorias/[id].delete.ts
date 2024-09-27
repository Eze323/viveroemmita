import Categoria from "../models/categoria.model";


export default defineCachedEventHandler(async (event) =>{
    const id = getRouterParam(event,'id')
    try{
    const categoriaEliminada = await Categoria.findByIdAndDelete(id)
    console.log(id);
    if(!categoriaEliminada){
        throw createError({
            statusCode:400,
            statusMessage:"El id no existe",
        })
    }
    return categoriaEliminada
    
    }catch(error){
        throw createError({
            statusCode:400,
            statusMessage:"Error al eliminar la catgegoria",
            })

    }
})