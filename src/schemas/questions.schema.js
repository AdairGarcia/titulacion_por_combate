import {z} from 'zod';

export const createQuestionSchema = z.object({
    questionText: z.string({
        required_error: "Texto de la pregunta es requerido",
    }).min(1, "Texto de la pregunta necesita al menos 1 caracter"),
    correctAnswer: z.string({
        required_error: "Respuesta correcta es requerida",
    }).min(1, "Respuesta correcta necesita al menos 1 caracter"),
    incorrectAnswers: z.array(
        z.string({
            required_error: "Respuestas incorrecta es requerida",
        }).min(1, "Respuesta incorrecta necesita al menos 1 caracter")
    ).length(3, "Se requieren 3 respuestas incorrectas"),
})

export const updateQuestionSchema = z.object({
    questionText: z.string({
        required_error: "Texto de la pregunta es requerido",
    }),
    correctAnswer: z.string({
        required_error: "Respuesta correcta es requerida",
    }),
    incorrectAnswers: z.array(
        z.string({
            required_error: "Respuestas incorrecta es requerida",
        }).min(1, "Respuesta incorrecta necesita al menos 1 caracter")
    ).length(3, "Se requieren 3 respuestas incorrectas"),
})