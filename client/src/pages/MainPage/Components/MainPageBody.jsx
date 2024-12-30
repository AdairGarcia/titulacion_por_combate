import '../mainPage.css';
import misFormularios from '../../../assets/Mis cuestionarios.png';
import {Form} from './Form.jsx';
import {useForms} from "../../../context/FormsContext.jsx";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";


export const MainPageBody = () => {
    const {getForms, forms} = useForms();
    console.log(forms);

    useEffect(() => {
        getForms();
    }, []);

    return (
        <div className="container-fluid fondo-pantalla-principal h-100">
            <div className="row pt-5">
                <div className="col">
                    <img
                        alt="Formularios"
                        src={misFormularios}
                        className="img-fluid img-formularios ps-5"
                    />
                </div>
                <div className="col text-end align-content-center pe-5">
                    <Link to={"/forms/quiz"}>
                        <button className="btn-crear-cuestionario rounded-4 p-3">
                            Crear cuestionario
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row m-5 d-flex justify-content-evenly forms-container flex-wrap rounded-5">
                {
                    forms.length === 0 ? (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                            <div className="rounded-4 d-flex flex-column p-4 m-3 text-center align-items-center">
                                <RiCheckboxMultipleBlankLine size={"50px"}/>
                                <p className={"vacio"}>
                                    Aquí se mostrarán tus cuestionarios
                                </p>
                            </div>
                        </div>
                    ) : (
                        forms.map((form) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2" key={form._id} >
                                <Form form={form}/>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};