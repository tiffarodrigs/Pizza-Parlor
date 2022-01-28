function Pizza(toppings,size){
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

Pizza.prototype.calculateCost=function(){
 let cost=0;
  console.log(pizza.toppings);
  const toppingArray=pizza.toppings;
 toppingArray.forEach(function(element)
  {
  console.log(element);
  // console.log(this.cost);
    if(element==="pineapple")
    {
    console.log("inside pine");
    
      cost += toppingPrice.pineapple;
       console.log("inside pine cist" + cost);
      
    }
    if(element==="mushroom")
    {
    console.log("inside mush");
      cost += toppingPrice.mushroom;
    }
    if(element==="chicken")
    {
      cost += toppingPrice.chicken;
    }
    if(element==="pepper")
    {
      cost += toppingPrice.pepper;
    }
    if(element==="onion")
    {
      cost += toppingPrice.onion;
    }
    if(element==="cheese")
    {
      cost += toppingPrice.cheese;
    }
  });
  console.log(cost);
  return cost
}

let pizza= new Pizza(["pineapple","mushroom"],"small");

console.log(pizza.calculateCost());