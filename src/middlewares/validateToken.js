import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    console.log("token: ", token);
    if (!token) {
        return res.status(401).json({message: 'Autorizacion denegada'});
    }

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if(err){
            return res.status(403).json({message: 'Token invalido'});
        }
        req.user = decoded;
        next();
    });
}