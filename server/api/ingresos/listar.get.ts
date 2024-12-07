import Ingreso from '../models/ingreso.model';

export default defineEventHandler(async () => {

  try {
    return {
      ingresos: await Ingreso.find()

    };


  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error al listar los ingresos",
    });
  }
})