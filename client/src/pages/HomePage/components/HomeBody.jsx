import objetivos from '../../../assets/Objetivos.png';
import descripcion from '../../../assets/Descripción.png';
import map from '../../../assets/MapaEo.png';
import '../homePage.css'
import {useNavigate} from "react-router-dom";

export const HomeBody = () => {
    const navigate = useNavigate();
    const handleStartClick = () => {
        navigate('/signin');
    };

    return (
        <div className={"container-fluid text-center h-100"}>
            <div className={"row h-100"}>
                <div className={"col-12 col-md-4 left-part align-content-center"}>
                    <img
                        alt={"Goal"}
                        src={objetivos}
                        className={"img-fluid pb-4"}
                    />
                    <img
                        alt={"Description"}
                        src={descripcion}
                        className={"img-fluid pb-4"}
                    />
                    <button className={"rounded-3 px-5 py-1 btn-empezar"} onClick={handleStartClick}>
                        Empezar
                    </button>
                </div>
                <div className={"col-12 col-md-8 right-part align-content-center position-relative"}>
                    <img
                        alt={"Map"}
                        src={map}
                        className={"img-fluid map-small"}
                    />
                    <p className={"text-end pe-5 m-3 position-absolute bottom-0 end-0"}>
                        Mapa de EO
                    </p>
                </div>
            </div>
        </div>
    )
}