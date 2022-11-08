import mongoose from "mongoose";
import GrupoMuscular from "./GrupoMuscular.js";

const { Schema } = mongoose;

const TipoExercicioSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    pesoMinino: {
        type: Number,
        min: 0,
        max: 100,
        required: true,
    },
    pesoMaximo: {
        type: Number,
        min: 0,
        max: 200,
        required: true,
    },
    degrauPeso: {
        type: Number,
        min: 0,
        max: 25,
        required: true,
    },
    GrupoMuscular: GrupoMuscular.schema,
});

export default mongoose.model("TipoExercicio", TipoExercicioSchema);