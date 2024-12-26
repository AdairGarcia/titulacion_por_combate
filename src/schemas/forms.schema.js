import {z} from 'zod';

export const createFormSchema = z.object({
    title: z.string({
        required_error: "Titulo es requerido",
    }).min(1, "Titulo necesita al menos 1 caracter"),
    color: z.string({
        required_error: "Color es requerido",
    }).min(7, "Color necesita al menos 7 caracteres"),
})

export const updateFormSchema = z.object({
    title: z.string({
        required_error: "Titulo es requerido",
    }).min(1, "Titulo necesita al menos 1 caracter"),
    color: z.string({
        required_error: "Color es requerido",
    }).min(7, "Color necesita al menos 7 caracteres"),
})