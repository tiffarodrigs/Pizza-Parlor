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
  let totalSizeCost =0;
  totalSizeCost += sizePrice[this.size];
  return totalSizeCost;
}

Pizza.prototype.pizzaCost = function()
{
  return this.calculateToppingCost()+this.calculateSizeCost();
}


$(document).ready(function() {
  $("#addPizza").click(function(event) {
    event.preventDefault();
    let inputToppings = []
    let outputCost;
    let inputSize = $("input[name='size']:checked").val();
    console.log(inputSize);
    $("input[name='toppings']:checked").each(function() {
      inputToppings.push($(this).val());
      //each($("input[name='language']:checked"), function(){
      // arr.push($(this).val());
    });
    //return inputToppings;

    console.log(inputToppings);
    let pizza = new Pizza(inputToppings, inputSize);
    outputCost = pizza.pizzaCost();
    $("#cost").html(outputCost);

  });

});
