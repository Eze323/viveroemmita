import Ingreso from "../models/ingreso.model";

export default defineCachedEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    try {
        const IngresoAEliminar = await Ingreso.findByIdAndDelete(id)
        console.log(id);
        if (!IngresoAEliminar) {
            throw createError({
                statusCode: 400,
                statusMessage: "El id no existe",
            })
        }
        return IngresoAEliminar

    } catch (error) {
        throw createError({
            statusCode: 400,
            statusMessage: "Error al eliminar el ingreso",
        })

    }
})