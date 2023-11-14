import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ msj }) => {
const { category } = useParams();

const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {

    setIsLoading(true);
    getProducts()
    .then((resp) => {
        if(category) {
        const productosFilter = resp.filter(product => product.category === category);
        setProducts(productosFilter);
        setIsLoading(false);
        
        } else {
        setProducts(resp);
        setIsLoading(false);
        }
        })
    .catch((error) => console.log(error));
    }, [category]); 


return (
    <>
    <div> {msj} </div>
    { isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products} /> }
    </>
);
};