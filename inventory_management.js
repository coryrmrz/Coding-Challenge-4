//Task 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: 'Blanket', price: 12.99, quantity: 37, lowStockLevel: 5}, //Array information for a blanket
    {name: 'Pillow', price: 10.99, quantity: 83, lowStockLevel: 5}, //Array info for a pillow
    {name: 'Mattress', price: 1499.99, quantity: 28, lowStockLevel: 5}, // Array info for a mattress
    {name: 'Pillow Case', price: 5.99, quantity: 66, lowStockLevel: 6}, //Array info for a pillow case
    {name: 'Sheet', price: 8.99, quantity: 29, lowStockLevel: 5}, // Array info for a sheet
];

//Task 2: Create a Function to Display product Details

function displayProductDetails(product) { //function to display product details
    const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock'; //if/then statement for correct display of stock status
    console.log(`Product: ${product.name}, Price: $${product.price}, Quantity: ${product.quantity}, Stock Status: ${stockStatus}`); //display of name, price, quantity, and stock status of a product
};