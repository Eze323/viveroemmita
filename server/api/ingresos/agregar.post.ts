import Ingreso from "../models/ingreso.model"



export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // Validación de datos
  const { fecha, tipo, descripcion } = body;
  let { monto } = body;

  // Validación de fecha
  if (!fecha || !Date.parse(fecha)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "fecha" es obligatorio y debe ser una fecha válida.'
    });
  }

  if (typeof monto === 'string') {
    monto = parseFloat(monto);
  }


  if (!descripcion || typeof descripcion !== 'string') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "descripcion" es obligatorio y debe ser una cadena.'
    });
  }
  if (!monto || typeof monto !== 'number') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El campo "monto" es obligatorio y debe ser un número.'
    });
  }


  try {
    const nuevoIngreso = await Ingreso.create({
      fecha,
      monto,
      tipo,
      descripcion
    });

    return {
      status: 'success',
      data: nuevoIngreso
    };
  } catch (error) {
    console.error('Error al agregar el Ingreso:', error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error interno del servidor al agregar el Ingreso"
    });
  }
});