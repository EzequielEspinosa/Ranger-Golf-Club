import { Link } from "react-router-dom";
import styles from "./item.module.css"

export const Item = ({ id, name, description }) => {
return (
<div className="    m-2">
    <div className={styles.cart}>
    <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> {description} </p>
        <Link to={`/item/${id}`}>
        <button className="btn btn-outline-success">Detalles</button>
        </Link>
    </div>
    </div>
</div>
);
};