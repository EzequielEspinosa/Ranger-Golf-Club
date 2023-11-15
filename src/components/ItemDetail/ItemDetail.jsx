import { ItemCount } from "../ItemCount/ItemCount"
import styles from "./itemDetail.module.css"
export const ItemDetail = ( {description, price, stock, name, img} ) => {

const onAdd = (items) => { 
alert(`Se agregaron ${items} al carrito`)
}

return (
<div className="m-2">
    <div className={styles.cartDetail}>
    <div className={`${styles.cartDetail}`}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> {description} </p>
        <p>Precio: {price} </p>
        <ItemCount stock={stock} onAdd={onAdd} />
    </div>
    </div>
</div>
)
}