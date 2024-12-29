import './header.css'

import titulo from '../../assets/Titulo.png';
import {Link} from "react-router-dom";

export const Header = ({optionalComponent}) => {
    return (
        <nav className={"navbar mx-auto headerColor"}>
            <div className={"container-fluid row"}>
                <div className={"col-6"}>
                    <Link to={"/"}>
                        <img
                            alt={"AppName"}
                            src={titulo}
                            className={"header-img"}
                        />
                    </Link>
                </div>
                <div className={"col"}>
                    {optionalComponent}
                </div>
            </div>
        </nav>
    )
}