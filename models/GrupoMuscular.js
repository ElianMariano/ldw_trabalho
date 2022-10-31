import mongoose from "mongoose";

const { Schma } = mongoose;

const GrupoMuscularSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    }
});

export default mongoose.model("GrupoMuscular", GrupoMuscularSchema);