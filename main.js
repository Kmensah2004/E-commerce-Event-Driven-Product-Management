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
// Add event listener for the purchase button (checkout event)
purchaseButton.addEventListener("click", () => {
    const selectedSize = sizeSelector.value;
    const { stock } = stockAvailability[selectedSize];

    // Check if the product is available
    if (stock > 0) {
        ("Thank you for your purchase! Your item has been successfully added to the cart.");
        stockAvailability[selectedSize].stock--; // Decrease stock by 1 after purchase
        updateInventory(); // Update the inventory after the purchase
    } else {
        ("Sorry, this product is out of stock and cannot be purchased.");
    }
});
purchaseButton.addEventListener("click", () => {
    const selectedOption = sizeSelector.options[sizeSelector.selectedIndex];
    const stockStatus = selectedOption.getAttribute("data-stock");

    // Check if the product is available before proceeding
    if (stockStatus === "in-stock") {
        alert("Thank you for your purchase! Your item has been successfully added to the cart.");
    } else if (stockStatus === "out-of-stock") {
        alert("Sorry, this product is out of stock and cannot be purchased.");
    }
});
