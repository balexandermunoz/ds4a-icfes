import '../assets/styles/Header.css';
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/images/home.svg";
import { ReactComponent as ScatterIcon } from "../assets/images/scatter-plot.svg";

const Header = () => {
    const title = "Education analysis Colombia";
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
            <div className="header__links">
                <div className={"header__links__button"}>
                    <HomeIcon className={"header__links__icon"} />
                    <NavLink className="header__links__link" to="/" > Home</NavLink>
                </div>
                <div className={"header__links__button"}>
                    <ScatterIcon className={"header__links__icon"} />
                    <NavLink className="header__links__link" to="/analysis">Analysis</NavLink>
                </div>
                <div className={"header__links__button"}>
                    <img className={"header__links__icon"} src={require("../assets/images/model.png")} alt="Group icon" />
                    <NavLink className="header__links__link" to="/models">Model</NavLink>
                </div>
                <div className={"header__links__button"}>
                    <img className={"header__links__icon"} src={require("../assets/images/group.png")} alt="Group icon" />
                    <Link className="header__links__link" to="/about">About</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;