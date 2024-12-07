import mongoose, { Schema, model } from "mongoose";

const IngresoSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    monto: { type: Number, required: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
})

const Ingreso = mongoose.model('Ingreso', IngresoSchema);

export default Ingreso;