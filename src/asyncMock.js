const products = [
    { id: "1", name: "Zapato", price: 100, category: "calzados", description: "Una Zapato", stock: 10 },
    { id: "2", name: "Bota", price: 100, category: "calzados", description: "Una Bota", stock: 10 },
    { id: "3", name: "Ojota", price: 100, category: "calzados", description: "Un Ojota", stock: 10 },
    { id: "4", name: "Zapatilla", price: 100, category: "calzados", description: "Una Zapatilla", stock: 10 },
    { id: "5", name: "Remera", price: 100, category: "ropa", description: "Una Remera", stock: 10 },
    { id: "6", name: "Camisa", price: 100, category: "ropa", description: "Una Camisa", stock: 10 },
    { id: "7", name: "Pantalón", price: 100, category: "ropa", description: "Una Pantalón", stock: 10 },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {

    if (products.length > 0) {
        setTimeout(() => {
        resolve(products);
        }, 2000);
    } else {
        reject("No hay productos");
    }
    });
};

export const getProduct = ( id ) => {
return new Promise((resolve, reject) => {
    
    const product = products.find( product => product.id === id); 
    setTimeout( () => { 
    if(!product) {
        reject("No se encontró el producto solicitado")
    } else {
        resolve(product);
    }
    }, 2000 )
    
});
};