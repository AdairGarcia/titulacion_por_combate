import '../formQuizPage.css';
import crearCuestionario from '../../../assets/CrearCuestionario.png';
import testGame from '../../../assets/TestGame.png';
import {FaIdCard} from 'react-icons/fa';
import {useState} from 'react';
import {useForm} from "react-hook-form";
import {useForms} from "../../../context/FormsContext.jsx";
import {useNavigate} from "react-router-dom";

export const FormQuizBody = () => {
    const [color, setColor] = useState('#000000');
    const navigate = useNavigate();


    const {register, handleSubmit} = useForm();
    const {createForm} = useForms();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        createForm(data);
    });

    const handleCancel = () => {
        navigate('/forms');
    }

    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-12 col-md-5 left-part d-flex flex-column align-items-center">
                    <img
                        alt="Goal"
                        src={crearCuestionario}
                        className="img-fluid pb-4 crear-cuestionario-img m-5"
                    />
                    <form className="w-100 px-3" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="formName" className="form-label label-formulario">Nombre del cuestionario</label>
                            <div className="input-group">
                                <FaIdCard className="nombre-icono entrada-formulario" />
                                <input
                                    type="text"
                                    className="form-control entrada-formulario rounded-0"
                                    id="formName"
                                    {...register("title")}
                                    autoComplete={"off"}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formColor" className="form-label label-formulario">Color del cuestionario</label>
                            <div className="input-group">
                                <input
                                    type="color"
                                    className="form-control-color entrada-formulario rounded-0"
                                    id="formColor"
                                    value={color}
                                    name={"color"}
                                    {...register("color")}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="form-control entrada-formulario rounded-0 texto-color"
                                    value={color.toUpperCase()}
                                    readOnly={true}
                                     id={"formColorText"}

                                />
                            </div>
                        </div>
                        <div className="btn-group-vertical mt-5 d-flex align-items-center">
                            <button className="mb-3 rounded-4 btns btn-crear py-3 w-75 w-md-50">
                                Crear cuestionario
                            </button>
                            <button className="mb-3 rounded-4 btns btn-cancelar py-3 w-75 w-md-50" type={"button"} onClick={handleCancel}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-md-7 right-part d-flex flex-column align-items-center justify-content-center position-relative">
                    <img
                        alt="Map"
                        src={testGame}
                        className="img-fluid map"
                    />
                    <p className="text-end pe-5 position-absolute bottom-0 end-0">
                        Pregunta del cuestionario en el videojuego
                    </p>
                </div>
            </div>
        </div>
    );
};