import Categoria from "../models/categoria.model";



export default defineEventHandler(async (event) => {
     const body = await readBody(event)
     // Validación de datos
  const { nombre, descripcion } = body;
  let {icono} = body;
               
  
  if (!nombre || typeof nombre !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "nombre" es obligatorio y debe ser una cadena.'
    });
  }

  if (!descripcion || typeof descripcion !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "descripcion" es obligatorio y debe ser una cadena.'
    });
  }
   if (!icono || typeof icono !== 'string') {
        icono='imagen-generica.jpg';
}

  try {
    const nuevaCategoria = await Categoria.create({
      nombre,
      descripcion,
      icono
    });

    return {
      status: 'success',
      data: nuevaCategoria
    };
  } catch (error) {
    console.error('Error al agregar Categoria:', error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error interno del servidor al agregar Categoria"
    });
  }
});