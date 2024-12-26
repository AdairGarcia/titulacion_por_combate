import mongoose from "mongoose";
import {questionSchema} from "./questions.model.js";

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    color: {
        type: String,
        default: "#FFFFFF",
    },
    questions: {
        type: [questionSchema],
        default: [],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

export default mongoose.model('Form', formSchema);