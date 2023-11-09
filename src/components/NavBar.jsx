import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="flex flex-col gap-3 text-center">
            <hr className="m-4"/>
            <ul>
                <li>
                    <NavLink to={'/orders'}>Pedidos</NavLink>
                </li>
                <hr className="m-4"/>
                <li>
                    <NavLink to={'/'}>Dashboard</NavLink>
                </li>
            </ul>
            <hr className="m-4"/>
        </nav>
    )
}

export default NavBar;