import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    // use .filter() to check each item's type in the data to see if it's "sweet"
    const candies = data.map(items => (items.filter(item => item.type == "candy")))
    return candies
    // use .map() to put each item into an array, with item: and price:
};

console.log(getSaleItems(products))