import Ingreso from "../models/ingreso.model"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  try {
    const ingreso = await Ingreso.findById(id);
    if (!ingreso) {
      throw new Error('Ingreso no encontrado');
    }
    return {
      status: 'success',
      data: ingreso
    };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Error al buscar el ingreso",
    });
  }
});