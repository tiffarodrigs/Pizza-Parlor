function Pizza(toppings,size){
  this.toppings = toppings;
  this.size = size;
}
let pizza= new Pizza("pineapple","small");

Pizza.prototype.calculateCost=function(){
  if(pizza.toppings==="pineapple")
  {
    return this.cost=5;
  }
}

