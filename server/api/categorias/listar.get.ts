import Categoria from '../models/categoria.model';

export default defineEventHandler(async () => {
 
    try {
        return { 
          categorias: await Categoria.find()

        };
        

      } catch (error) {
        throw createError({
          statusCode:400,
          statusMessage:"Error al listar categorias",
          });
      }
  })