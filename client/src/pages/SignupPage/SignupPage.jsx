import './signupPage.css';
import {MdEmail} from 'react-icons/md';
import {FaLock} from "react-icons/fa";
import registrarse from '../../assets/Registrarse.png';

import {useForm} from 'react-hook-form';
import {useAuth} from "../../context/AuthContext.jsx";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

export const SignupPage = () => {
    const { register, handleSubmit, formState: {
        errors
    }} = useForm();
    const { signup, isAuthenticated, errors: signupErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate('/forms');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return(
        <>
            <div className={"fondo-pantalla vh-100 d-grid justify-content-center align-items-center"}>
                <div className={"contenedor-formulario container p-5 rounded-5"}>
                    <div className={"text-center"}>
                        <img
                            alt={"Titulo"}
                            src={registrarse}
                            className={"img-fluid p-5"}
                        />
                    </div>
                    <div className={""}>
                        {
                            signupErrors.map((error, index) => (
                                <div className={"text-center"} key={index}>
                                    {error}
                                </div>
                            ))
                        }
                        <form onSubmit={onSubmit}>
                            <div className={"mb-3 p-3"}>
                                <label htmlFor={"email"} className={"form-label label-formulario"}>Correo</label>
                                <div className={"input-group"}>
                                    <span className={"input-group-text entrada-formulario rounded-0"} id={"email-icon"}>
                                        <MdEmail color={"#FFA600"}/>
                                    </span>
                                    <input
                                        type={"email"}
                                        className={"form-control entrada-formulario rounded-0"}
                                        id={"email"}
                                        placeholder={"correo@ejemplo.com"}
                                        {...register("email", {required: true})}
                                        autoComplete={"off"}
                                    />
                                </div>
                                {
                                    errors.email && (
                                        <span className={"form-label error"}>El correo es requerido</span>
                                    )
                                }
                            </div>
                            <div className={"mb-3 p-3"}>
                                <label htmlFor={"password"} className={"form-label label-formulario"}>Contraseña</label>
                                <div className={"input-group"}>
                                    <span className={"input-group-text rounded-0 entrada-formulario"}>
                                        <FaLock color={"#FFA600"}/>
                                    </span>
                                    <input
                                        type={"password"}
                                        className={"form-control rounded-0 entrada-formulario"}
                                        id={"password"}
                                        {...register("password", {required: true})}
                                    />
                                </div>
                                {
                                    errors.password && (
                                        <span className={"form-label error"}>La contraseña es requerida</span>
                                    )
                                }
                            </div>
                            <div className={"row text-center my-5 align-items-center"}>
                                <div className={"col"}>
                                    <p className="question">
                                        ¿Ya tienes una cuenta?
                                        <Link to={"/signin"}>Ingresa aquí</Link>
                                    </p>
                                </div>
                                <div className={"col"}>
                                    <button type={"submit"} className={"btn btn-registrarse rounded-3 px-4"}>
                                        Registrarse
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
};