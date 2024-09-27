import Categoria from "../models/categoria.model";


export default defineEventHandler(async (event) => {
    const  id  = getRouterParam(event,'id');
  
    try {
      const categoria = await Categoria.findById(id);
      if (!categoria) {
        throw new Error('Categoria no encontrada');
      }
      return {
        status: 'success',
        data: categoria
      };
    } catch (error) {
        throw createError({
            statusCode:400,
            statusMessage:"Error al buscar la categoria",
            });
   }
  });