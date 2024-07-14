import Producto from '../models/producto.model';

export default defineEventHandler(async () => {
 
    try {
        return { 
          productos: await Producto.find()

        };
        

      } catch (error) {
        throw createError({
          statusCode:400,
          statusMessage:"Error al listar los productos",
          });
      }
  })