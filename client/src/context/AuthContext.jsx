import {createContext, useContext, useState, useEffect} from "react";
import {signupRequest, signinRequest} from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try{
            const res = await signupRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (err) {
            console.error(err.response);
            setErrors(err.response.data || ['Error al registrar el usuario']);
        }
    };

    const signin = async (user) => {
        try {
            const res = await signinRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (err) {
            if(Array.isArray(err.response.data)) {
                return setErrors(err.response.data);
            }
            console.error(err.response);
            setErrors([err.response.data.message] || ['Error al iniciar sesión']);
        }
    }

    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    return (
        <AuthContext.Provider value ={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}