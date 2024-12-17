import mongoose from "mongoose";

export const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true,
        trim: true,
    },
    correctAnswer: {
        type: String,
        required: true,
        trim: true,
    },
    incorrectAnswers: {
        type: [String],
        required: true,
        validate: [array => array.length === 3, 'Solo debe haber 3 respuestas incorrectas']
    }
});

export default mongoose.model('Question', questionSchema);