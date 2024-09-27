import mongoose, { Schema,model } from "mongoose";

const CategoriaSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    icono: {type: String, required: false}
})
const Categoria= mongoose.model('Categoria',CategoriaSchema);

export default Categoria;
