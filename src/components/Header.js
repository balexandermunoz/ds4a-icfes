import '../assets/styles/Header.css';
import {NavLink} from "react-router-dom";
import {ReactComponent as HomeIcon} from "../assets/images/home.svg";
import {ReactComponent as ScatterIcon} from "../assets/images/scatter-plot.svg";

const Header = () => {
    const title = "Education analysis Colombia"
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
            <div className="header__links">
                <div className={"header__links__button"}>
                    <HomeIcon className={"header__links__icon"}/>
                    <NavLink className="header__links__link" to="/"> Home</NavLink>
                </div>
                <div className={"header__links__button"}>
                    <ScatterIcon className={"header__links__icon"}/>
                    <NavLink className="header__links__link" to="/analysis">Analysis</NavLink>
                </div>
                <div className={"header__links__button"}>
                    <img className={"header__links__icon"} src={require("../assets/images/model.png")} alt="Group icon"/>
                    <NavLink className="header__links__link" to="/models">Models</NavLink>
                </div>
                <div className={"header__links__button"}>
                    <img className={"header__links__icon"} src={require("../assets/images/group.png")} alt="Group icon"/>
                    <NavLink className="header__links__link" to="/about">About</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;