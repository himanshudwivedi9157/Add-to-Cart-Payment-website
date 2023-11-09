// <!--this is mens js -->


var productarr=[];
// Get all elements with the class "add-to-cart"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Initialize the product array with the data from local storage if it exists
var productCart = JSON.parse(localStorage.getItem("userCart")) || [];

// Loop through each button and add a click event listener
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart);
}
var count=0;
function addProductToCart(event) {
count++;
    // Retrieve data for the clicked product
    var productContainer = event.target.parentElement;
    var productImg = productContainer.querySelector("img").src;
    var productName = productContainer.querySelector("p").textContent;
    var productPrice = productContainer.querySelector("h4").textContent;

    // Create an object to represent the product
    var productData = {
        img: productImg,
        name: productName,
        price: productPrice,
    };

    // Add the product to the cart
    productarr.push(productData);

    // Save the updated cart data in local storage
    localStorage.setItem("userCart", JSON.stringify(productarr));

    alert("Item added to cart");
    document.querySelector("#count").innerText=count;
}
