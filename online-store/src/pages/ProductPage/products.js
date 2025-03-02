/* this file serves the purpose of storing the products array, 
   in order to keep ProductPage clean*/

// constructor function for a Product object
function Product(name, description, price) {
  // using picsum for random product image
  this.image = `https://picsum.photos/300/300?random=${Math.random()}`;
  this.name = name;
  this.description = description;
  this.price = price;
}

// defining an array of product objects
export const products = [
  new Product(
    "Eggs",
    "The freshest eggs from our free-range chickens. now in a variety of colours!",
    10.99
  ),
  new Product(
    "Running Shoes",
    "Lightweight and breathable running shoes with cushioned soles for maximum comfort.",
    129.95
  ),
  new Product(
    "Invisibility Cloak",
    "Perfect for sneaking past your boss or avoiding relatives at family reunions. Results may vary.",
    299.99
  ),
  new Product(
    "Bluetooth Headphones",
    "Wireless over-ear headphones with noise cancellation technology and 30-hour battery life.",
    199.99
  ),
  new Product(
    "Indoor Plant",
    "Low-maintenance snake plant in decorative ceramic pot, perfect for purifying air.",
    35.5
  ),
  new Product(
    "Bacon-Scented Mustache Wax",
    "For the distinguished gentleman who also wants to smell like breakfast all day.",
    24.95
  ),
  new Product(
    "Blender",
    "High-speed blender for smoothies, soups, and sauces with multiple speed settings.",
    155.99
  ),
  new Product(
    "Vintage Typewriter",
    "Fully restored manual typewriter from the 1950s with original carrying case.",
    279.95
  ),
  new Product(
    "USB Pet Rock",
    "Just like a regular pet rock, but connects to USB. Does absolutely nothing, but with style!",
    34.5
  ),
  new Product(
    "Bed Sheet Suspenders",
    "Keep your sheets tight with these industrial-strength suspenders. Also works as emergency outfit.",
    22.95
  ),
];
