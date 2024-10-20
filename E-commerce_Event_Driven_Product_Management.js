// Declare elements
const sizeSelector = document.getElementById("product-size");
const priceElement = document.getElementById("product-price");
const purchaseButton = document.getElementById("purchase-button"); // Declare the purchase button
const inventoryCount = document.getElementById("inventory-count"); // Declare the inventory count display

// Stock availability and price for each size
const stockAvailability = {
    small: { price: 20, stock: 5 },
    medium: { price: 25, stock: 0 }, 
    large: { price: 30, stock: 3 }
};

// Function to update the inventory and availability
function updateInventory() {
    const selectedSize = sizeSelector.value; // Get the selected size 
    const { stock } = stockAvailability[selectedSize]; // Get stock information for the  size

    if (stock > 0) {
        purchaseButton.disabled = false; // Enable the purchase button if stock is available
        inventoryCount.textContent = `Available Stock: ${stock}`; // Show available stock
    } else {
        purchaseButton.disabled = true; // Disable the button if out of stock
        inventoryCount.textContent = "Out of Stock"; // Display out of stock message
    }
}