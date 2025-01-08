import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {createAccessToken} from "../libs/jwt.js";
import {token} from "morgan";
import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js";
import { get } from 'mongoose';

import { getTemplate, sendEmail } from "../libs/mail.js";

export const signup = async (req, res) => {
    const {email, password} = req.body;
    try{
        const userFound = await User.findOne({email})
        if(userFound){
            return res.status(400).json(['El correo ya esta registrado'])
        }
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({
            id: userSaved._id
        })
        
        const Template = await getTemplate(email, token);

        await sendEmail(email, 'Verifica tu correo', Template);

        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            }
        );
        
    }catch (error){
        console.error('Hubo un error al registrar el usuario', error);
        res.status(500).json({message: 'Error al registrar el usuario: ' + error.message});
    }
};
export const verificar_correo = async (req, res) => {
    try{
        const { token }= req.params;
        const data = await getTokenData(token);

        if(!data) return res.status(400).json({
            verified: false,
            message: 'Token invalid'
        });
        console.log(data);
        const { id } = data.data;

        const user = await User.findOne({ id }) || null;
        console.log(user);

        if (!user) {
            return res.status(400).json({
            verified: false,
            message: 'Usuario no encontrado'
        })}else{
            user.verified = true;
            await user.save();

            return res.redirect('http://localhost:5173/');
        }

    }catch (error){
        console.error('Hubo un error al confirmar el usuario', error);
        res.status(500).json({message: 'Error al confirmar usuario: ' + error.message});
    }
};
export const signin = async (req, res) => {
    const {email, password} = req.body;

    try{
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json({message: 'Usuario no encontrado'})
        if(!userFound.verified) return res.status(400).json({message: 'Usuario no verificado'})

        const isMatch = await bcrypt.compare(password, userFound.password)
        if(!isMatch) return res.status(400).json({message: 'Credenciales invalidas'})

        const token = await createAccessToken({
            id: userFound._id
        })
        res.cookie('token', token)
        res.json({
                id: userFound._id,
                username: userFound.username,
                email: userFound.email,
            }
        );
    }catch (error){
        console.error('Hubo un error al iniciar sesion', error);
        res.status(500).json({message: 'Error al iniciar sesion: ' + error.message});
    }
};
export const signout = async (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
};

export const verifyToken = async (req, res) => {
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: 'No autorizado'})

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if(err) return res.status(401).json({message: 'No autorizado'})
        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json({message: 'No autorizado'})

        return res.json({
            id: userFound._id,
            email: userFound.email,
        })
    })
}
