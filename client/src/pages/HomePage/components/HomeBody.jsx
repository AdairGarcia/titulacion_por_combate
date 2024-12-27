import objetivos from '../../../assets/Objetivos.png';
import descripcion from '../../../assets/Descripción.png';
import map from '../../../assets/MapaEo.png';
import '../homePage.css'

export const HomeBody = () => {
    return (
        <div className={"container-fluid text-center h-100"}>
            <div className={"row h-100"}>
                <div className={"col left-part align-content-center"}>
                    <img
                        alt={"Goal"}
                        src={objetivos}
                        className={"img-fluid"}
                    />
                    <img
                        alt={"Description"}
                        src={descripcion}
                        className={"img-fluid"}
                    />
                    <button className={"rounded-3 px-5 py-1"}>
                        Empezar
                    </button>
                </div>
                <div className={"col-8 right-part align-content-center"}>
                    <img
                        alt={"Map"}
                        src={map}
                        className={"img-fluid map"}
                    />
                </div>
            </div>
        </div>
    )
}