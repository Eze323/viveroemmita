import Producto from "../models/producto.model"



export default defineEventHandler(async (event) => {
     const body = await readBody(event)
     // Validación de datos
  const { nombre, descripcion } = body;
  let { precio,imagen} = body;
    if (typeof precio === 'string') {
        precio = parseFloat(precio);
    }
           
  
  if (!nombre || typeof nombre !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "nombre" es obligatorio y debe ser una cadena.'
    });
  }
  if (!precio || typeof precio !== 'number') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "precio" es obligatorio y debe ser un número.'
    });
  }
  if (!descripcion || typeof descripcion !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "descripcion" es obligatorio y debe ser una cadena.'
    });
  }
   if (!imagen || typeof imagen !== 'string') {
        imagen='imagen-generica.jpg';
}
//     throw createError({
//       statusCode: 400,
//       statusMessage: 'El campo "imagen" es obligatorio y debe ser una cadena.'
//     });
//   }

  try {
    const nuevoProducto = await Producto.create({
      nombre,
      precio,
      descripcion,
      imagen
    });

    return {
      status: 'success',
      data: nuevoProducto
    };
  } catch (error) {
    console.error('Error al agregar el producto:', error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error interno del servidor al agregar el producto"
    });
  }
});