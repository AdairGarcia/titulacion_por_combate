import './signinPage.css'
import iniciarSesion from '../../assets/Iniciar sesión.png';
import {MdEmail} from "react-icons/md";
import {FaLock} from "react-icons/fa";

export const SigninPage = () => {
    return(
        <>
            <div className={"fondo-pantalla vh-100 d-grid justify-content-center align-items-center"}>
                <div className={"contenedor-formulario container p-5 rounded-5"}>
                    <div className={"text-center"}>
                        <img
                            alt={"Titulo"}
                            src={iniciarSesion}
                            className={"img-fluid m-5"}
                        />
                    </div>
                    <div className={""}>
                        <form>
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
                                    />
                                </div>
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
                                    />
                                </div>
                            </div>
                            <div className={"row text-center my-5 align-items-center"}>
                                <div className={"col"}>
                                    <p className="question">
                                        ¿No tienes una cuenta?
                                        <a href={"/signup"}> Ingresa aquí</a>
                                    </p>
                                </div>
                                <div className={"col"}>
                                    <button type={"submit"} className={"btn btn-registrarse rounded-3 px-4"}>
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}