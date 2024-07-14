import mongoose, { Schema,model } from "mongoose";

const ProductoSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: true}
})
const Producto= mongoose.model('Producto',ProductoSchema);

export default Producto;
