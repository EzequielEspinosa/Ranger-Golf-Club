import { useState } from "react";

export const Formulario = () => {
    const [name, setName] = useState("");
    const [products, setProducts] = useState([]);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleProducts = (e) => {
        e.preventDefault();
        
        const newProduct = {
            name
        };

        setProducts([...products, newProduct])
        setName("")

    };

    return (
        <div className="container mt-4">
            <hr />
            <h3 className="text-uppercase text-white">Ingrese aquí si quiere agregar algun producto que no tengamos</h3>
            <form onSubmit={handleProducts} className="col-5 mt-3">
                <label className="mb-3 text-uppercase text-white" htmlFor="">Nombre</label>
                <input
                    className="form-control" type="text" value={name} onChange={handleName}/>

                <input className="btn btn-dark m-3" type="submit" value="Agregar"/>
            </form>
            <ul>
                {products.map((product, i) => (
                <li className="text-white fs-3 text-uppercase" key={i}> {product.name}</li>))}
            </ul>
        </div>
    );
};
