function Cart() {
  this.pizzaList = {};
  this.currentId = 0;
  this.totalPrice =0;

}

Cart.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Cart.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzaList[pizza.id] = pizza;

}
Cart.prototype.findPizza = function(id) {
  if (this.pizzaList[id] != undefined) {
    return this.pizzaList[id]
  }
  return false;
}

Cart.prototype.deletePizza = function(id) {
  if (this.pizzaList[id] != undefined) {
    delete this.pizzaList[id]
    return true;
  }
  return false;
}




function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

const toppingPrice = {
  pineapple: 5,
  mushroom: 2,
  chicken: 3,
  pepper: 2,
  onion: 3,
  cheese: 2
}
const sizePrice = {
  small: 10,
  medium: 12,
  large: 15

}

Pizza.prototype.calculateToppingCost = function() {
  let totalToppingsCost = 0;
  const toppingArray = this.toppings;
  toppingArray.forEach(function(element) {
    totalToppingsCost += toppingPrice[element];
  });
  return totalToppingsCost
}

Pizza.prototype.calculateSizeCost = function() {
  let totalSizeCost = 0;
  totalSizeCost += sizePrice[this.size];
  return totalSizeCost;
}

Pizza.prototype.pizzaCost = function() {
  return this.calculateToppingCost() + this.calculateSizeCost();
}
Cart.prototype.totalCartPrice=function(pizza){
this.totalPrice += pizza.pizzaCost();
return this.totalPrice;
}
function displayPizzaList(cartObj) {
  console.log("cart object  ", cartObj);
  console.log("cart object pizz list ", cartObj.pizzaList);
  let htmlPizzaList = ""
  Object.keys(cartObj.pizzaList).forEach(function(key) {
    let pizzaObj = cartObj.findPizza(key);
    console.log("pizza object  ", pizzaObj);
    htmlPizzaList += "<li id=" + pizzaObj.id + ">" + "Create your own pizza : " + pizzaObj.size + "</li>";
  });
  $("ul#pizzaList").html(htmlPizzaList)
}

function showPizzaDetail(pizzaid) {
  let pizzaObj = cart.findPizza(pizzaid);
  $("#pizzaDetail").show();
  $(".size").html(pizzaObj.size);
  console.log("pizzObj topp",pizzaObj.toppings.join());
  $(".topping").html(pizzaObj.toppings.join());
  $(".price").html(pizzaObj.pizzaCost());
}

function addHandler() {
  $("ul#pizzaList").on("click", "li", function() {

    showPizzaDetail(this.id);
  });

}
let cart = new Cart();
$(document).ready(function() {

  addHandler();
  $("#addPizza").click(function(event) {
    event.preventDefault();
    let inputToppings = []
    let outputCost;
    let inputSize = $("input[name='size']:checked").val();
    console.log(inputSize);
    $("input[name='toppings']:checked").each(function() {
      inputToppings.push($(this).val());
    });
    console.log(inputToppings);
    let myPizza = new Pizza(inputToppings, inputSize);
    cart.addPizza(myPizza);
    displayPizzaList(cart)
    //outputCost = myPizza.pizzaCost();
    outputCost = cart.totalCartPrice(myPizza);
    //totalCartPrice(myPizza)
    $("#cost").html(outputCost);
    $("#resultBorder").show();

  });



});
