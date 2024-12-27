import './header.css'

import titulo from '../../assets/Titulo.png';

export const Header = () => {
    return (
        <nav className={"navbar mx-auto headerColor"}>
            <div className={"container-fluid row"}>
                <div className={"col-6"}>
                    <a className={"navbar-brand"} href="#">
                        <img
                            alt={"AppName"}
                            src={titulo}
                            className={"header-img"}
                        />
                    </a>
                </div>
                <div className={"col"}>

                </div>
            </div>
        </nav>
    )
}