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

Pizza.prototype.calculateCost = function() {
  let cost = 0;
  console.log(pizza.toppings);
  const toppingArray = pizza.toppings;
  toppingArray.forEach(function(element) {
    console.log(element);
    // console.log(this.cost);
    if (element === "pineapple") {
      console.log("inside pine");

      cost += toppingPrice.pineapple;
      console.log("inside pine cist" + cost);

    }
    if (element === "mushroom") {
      console.log("inside mush");
      cost += toppingPrice.mushroom;
    }
    if (element === "chicken") {
      cost += toppingPrice.chicken;
    }
    if (element === "pepper") {
      cost += toppingPrice.pepper;
    }
    if (element === "onion") {
      cost += toppingPrice.onion;
    }
    if (element === "cheese") {
      cost += toppingPrice.cheese;
    }
  });
  if (this.size === "small") {
    cost += sizePrice.small
  } else if (this.size === "medium") {
    cost += sizePrice.medium
  } else if (this.size === "large") {
    cost += sizePrice.large
  }
  console.log(cost);
  return cost
}



$(document).ready(function() {
  $("#addPizza").click(function(event){
    event.preventDefault();
    let inputToppings=[]
    let inputSize = $("input[name='size']:checked").val();
    console.log(inputSize);
    $("input[name='toppings']:checked").each(function() {
      inputToppings.push(this.value);
  });
  return inputToppings;

    console.log(inputToppings);
    let pizza = new Pizza(inputToppings,inputSize);
    pizza.calculateCost();

  });

});