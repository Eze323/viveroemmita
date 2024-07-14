import  Producto  from "../models/producto.model"

export default defineEventHandler(async (event) => {
    const  id  = getRouterParam(event,'id');
  
    try {
      const producto = await Producto.findById(id);
      if (!producto) {
        throw new Error('Producto no encontrado');
      }
      return {
        status: 'success',
        data: producto
      };
    } catch (error) {
        throw createError({
            statusCode:400,
            statusMessage:"Error al buscar el producto",
            });
   }
  });