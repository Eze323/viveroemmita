import Ingreso from "../models/ingreso.model"


export default defineEventHandler(async (event) => {
   const body = await readBody(event)
   const ingresoActualizado = await Ingreso.findByIdAndUpdate(body._id, {
      fecha: body.fecha,
      monto: body.monto,
      descripcion: body.descripcion,
      tipo: body.tipo
   })

   return ingresoActualizado

})