const products = [
    { id: "1", name: "Guantes", price: 430, category: "accesorios", description: "Guantes", stock: 15 },
    { id: "2", name: "Lentes de sol", price: 870, category: "accesorios", description: "Lentes de sol", stock: 25 },
    { id: "3", name: "tee", price: 250, category: "accesorios", description: "Tee largos", stock: 50 },
    { id: "4", name: "Bolsas de palos", price: 30000, category: "Bolsas y palos", description: "Bolsas", stock: 35 },
    { id: "5", name: "Palos", price: 150000, category: "Bolsas y palos", description: " Palos", stock: 23 },
    { id: "6", name: "Pelotas", price: 500, category: "Bolsas y palos", description: "Pelotas", stock: 55 },
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
        reject("No se encontró el producto")
    } else {
        resolve(product);
    }
    }, 2000 )
    
});
};