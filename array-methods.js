const products = [
    { name: "Laptop", price: 34500, brand: "DCL", color: "Black" },
    { name: "Phone", price: 62500, brand: "iPhone", color: "Red" },
    { name: "Pendrive", price: 1500, brand: "A4Tech", color: "Golden" },
    { name: "Watch", price: 25000, brand: "Rolex", color: "White" },
    { name: "Sunglass", price: 2200, brand: "Reymond", color: "Black" },
]

/* const brands = [];
for (const product of products) {
    brands.push(product.brand);
} */

// const brands = products.map(product => product.brand);

products.forEach(product => console.log(product.name));
console.log(brands);

