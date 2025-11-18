// Sample Products (You can add more)
const products = [
    {
        id: 1,
        name: "Smart Watch",
        price: 1999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        id: 2,
        name: "Headphones",
        price: 1499,
        image: "https://images.unsplash.com/photo-1518443895471-59a89ff626ff"
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 2499,
        image: "https://images.unsplash.com/photo-1528701800489-20be9f4a5e2a"
    },
    {
        id: 4,
        name: "Backpack",
        price: 999,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    }
];

let cartCount = 0;

// Display products on page
const productsContainer = document.getElementById("products");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button class="add-btn" onclick="addToCart()">Add to Cart</button>
    `;

    productsContainer.appendChild(card);
});

// Add to cart function
function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}
