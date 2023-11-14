import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    let palabra = "Bienvenidos a la tienda official de Ranger Golf CLub"
return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<ItemListContainer greeting={palabra} />} />
        <Route path="/category/:category" element={<ItemListContainer greeting={palabra} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
);
};