import { Formulario, ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    let palabra = "Bienvenidos a la tienda official de Ranger Golf CLub"
return (
    <BrowserRouter>
    <NavBar />
    <hr />
    <Routes>
        <Route path="/" element={<ItemListContainer msj={palabra} />} />    
        <Route path="/category/:category" element={<ItemListContainer msj={palabra} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    <Formulario/>
    </BrowserRouter>
);
};