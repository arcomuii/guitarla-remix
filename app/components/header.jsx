import { Link } from "@remix-run/react"
import Navegacion from "./navegacion"
import Logo from '../../public/img/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to="/">
                    <img src={Logo} alt="logo" className="logo" />
                </Link>
                <Navegacion />           
            </div>
        </header>
    )
}

export default Header
