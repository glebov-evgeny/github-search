import {NavLink} from "react-router-dom";

export function Navigation(){
    return(
        <nav className="nav">
            <NavLink className="nav__link" to="/">Главная</NavLink>
            <NavLink className="nav__link" to="/favorites">Избранное</NavLink>
        </nav>
    )
}