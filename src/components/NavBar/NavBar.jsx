import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaGolfBall } from "react-icons/fa";
import styles from "./navBar.module.css"

export const NavBar = () => {
return (
<nav className="d-flex justify-content-around mt-2">
    <Link to={"/"}>
    <FaGolfBall color="#198754" size={30} />
    </Link>
    <div>
    <Link to={"/"}>
        <button className="btn btn-outline-success mx-2">Home</button>
    </Link>
    <Link to={"/category/accesorios"}>
        <button className="btn btn-outline-success mx-2">Accesorios</button>
    </Link>
    <Link to={"/category/Bolsas y palos"}>
        <button className="btn btn-outline-success mx-2">Bolsas</button>
    </Link>
    </div>
    <div className="d-flex">
    <CartWidget />
    <p className={styles.colorP}>0</p>
    </div>
</nav>
);
};