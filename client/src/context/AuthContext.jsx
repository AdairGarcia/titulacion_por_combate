import {createContext, useContext, useState, useEffect} from "react";
import {signupRequest, signinRequest, verifiTokenRequest} from "../api/auth.js";
import Cookies from 'js-cookie';

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
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        async function checkLogin () {
            const cookies = Cookies.get();
            if(!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res =  await verifiTokenRequest(cookies.token);
                if(!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);

            } catch (err) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);

            }

        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider value ={{
            signup,
            signin,
            loading,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}