
var product_data = localStorage.getItem("userCart");
var storeddata = JSON.parse(product_data);

// Make sure storeddata is an array of objects
var count=0;
var total=0;
var dileverycharge=160;
for (var i = 0; i < storeddata.length; i++) {
    // You can create an element for each product and add it to the DOM
    var productItem = document.createElement("div");

    // Assuming storeddata is an array of objects with properties like "img" and "name"
    var product_img = document.createElement("img");
    product_img.src = storeddata[i].img;
    productItem.appendChild(product_img);

    var product_name = document.createElement("p");
    product_name.innerText = storeddata[i].name;
    productItem.appendChild(product_name);

    var product_price = document.createElement("h1");
    product_price.innerText = storeddata[i].price;
    productItem.appendChild(product_price);

     // Create a button with the text "+" and add a class
     var increse = document.createElement("button");
     increse.innerText = "+";
     increse.className = "add-to-cart"; // Add the class "add-to-cart"
     increse.style.padding="20px";
     increse.style.marginLeft="30px";
     increse.style.backgroundColor="green";
     increse.style.fontSize="50px";
     productItem.appendChild(increse);


    
     // Create a button with the text "+" and add a class
     var decrese = document.createElement("button");
     decrese.innerText = "-";
     decrese.className = "add-to-cart";// Add the class "add-to-cart"
     decrese.style.padding="20px";
     decrese.style.marginLeft="30px";
     decrese.style.backgroundColor="red";
     decrese.style.fontSize="50px";
     productItem.appendChild(decrese);


  // Add the product item to a container element in the DOM
    var container = document.querySelector("#cart-container");
    container.appendChild(productItem);
    count++;
    document.querySelector("#count").innerText=count;

  

var paise = (total += parseInt(storeddata[i].price));
document.querySelector("#price1").innerText= "₹"+ paise ;

document.querySelector("#total").innerText=  "₹" + paise;
}



