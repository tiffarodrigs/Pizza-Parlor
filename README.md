# _Pizza Parlor_

#### By _**Tiffany Rodrigo**_

#### _A website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost_

## Technologies Used

* _HTML_
* _JavaScript_
* _JQuery_


## Description

_a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html.in your browser_

## Web Page Link




## License

_MIT_

Copyright (c) _Jan 28th 2022_ _Tiffany Rodrigo_


## Test Driven Development-Specs

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const pizza = new Pizza("pineapple", "small");
Expected Output: Pizza {toppings: 'pineapple', size: 'small'}


Describe: calculateCost()

Test: "It should return the cost as 5 when topping is pineapple"
Code: const pizza = new Pizza("pineapple", "small");
pizza.calculateCost()
Expected Output: 5


Test: "It should return the cost as 7 when topping is pineapple and mushroom"
Code: const pizza = new Pizza(["pineapple","mushroom], "small");
pizza.calculateCost();
Expected Output: 7


