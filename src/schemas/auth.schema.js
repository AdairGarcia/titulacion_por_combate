import {z} from 'zod';

export const signUpSchema = z.object({
    email: z
        .string({
            required_error: "Correo es requerido",
        })
        .email({
            message: "Correo invalido",
        }),
    password: z
        .string({
            required_error: "Password es requerido",
        })
        .min(8, {
            message: "Password necesita al menos 8 caracteres",
        }),
});

export const signInSchema = z.object({
    email: z
        .string({
            required_error: "Correo es requerido",
        })
        .email({
            message: "Correo invalido",
        }),
    password: z
        .string({
            required_error: "Password es requerido",
        })
        .min(8, {
            message: "Password necesita al menos 8 caracteres",
        }),
})