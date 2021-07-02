var food_Values = {
    "apple":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat:1,
            energy:1,
            protein:1,
            calories:1,
            vitamins:1
        }
    },
    "orange":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat:1,
            energy:1,
            protein:1,
            calories:1,
            vitamins:1
        }
    },
    "burger":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat:14.5,
            energy:10.8,
            protein:23.6,
            calories:12.6,
            vitamins:41.1
        }
    },
    "coffee":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat:7.2,
            energy:11.0,
            protein:56.1,
            calories:43.0,
            vitamins:10.4
        }
    }
}

document.write("<div class='cart'> COFFEE" +
"<div class='myClass1'>"
+ "<div class='myClass2'>" +"Category: " + food_Values.coffee.category +"</div>"
+ "<div class='myClass2'>" +"Price: " + food_Values.coffee.price + "</div>"
+ "<div class='myClass2'>" +"Fat: " + food_Values.coffee.nutrients.fat + "</div>"
+ "<div class='myClass2'>" +"Energy: " + food_Values.coffee.nutrients.energy + "</div>"
+ "<div class='myClass2'>" +"Protein: " + food_Values.coffee.nutrients.protein + "</div>"
+ "<div class='myClass2'>" +"Calories: " + food_Values.coffee.nutrients.calories + "</div>"
+ "<div class='myClass2'>" +"Vitamins: " + food_Values.coffee.nutrients.vitamins +"</div>"

+ "</div>" +
"</div>");
 
document.write("<div class = 'cart2'>BURGER " + 
"<div class='myClass3'>"
+ "<div class='myClass4'>" +"Category: " + food_Values.burger.category + "</div>"
+ "<div class='myClass4'>" + "Price: " + food_Values.burger.price + "</div>"
+ "<div class='myClass4'>" + "Fat: " + food_Values.burger.nutrients.fat + "</div>"
+ "<div class='myClass4'>" + "Energy: " + food_Values.burger.nutrients.energy + "</div>"
+ "<div class='myClass4'>" + "Protein"+ food_Values.burger.nutrients.protein + "</div>"
+ "<div class='myClass4'>" + "Calories" + food_Values.burger.nutrients.calories + "</div>"
+ "<div class='myClass4'>" + "Vitamins" + food_Values.burger.nutrients.vitamins + "</div>"

+"</div>"+
"</div>");

document.write("<div class='cart3'> ORANGE" +
"<div class='myClass5'>"
+ "<div class='myClass6'>" +"Category: " + food_Values.orange.category + "</div>"
+ "<div class='myClass6'>" + "Price: " + food_Values.orange.price + "</div>"
+ "<div class='myClass6'>" + "Fat: " + food_Values.orange.nutrients.fat + "</div>"
+ "<div class='myClass6'>" + "Energy: " + food_Values.orange.nutrients.energy + "</div>"
+ "<div class='myClass6'>" + "Protein: " + food_Values.orange.nutrients.protein + "</div>"
+ "<div class='myClass6'>" + "Calories: " + food_Values.orange.nutrients.calories + "</div>"
+ "<div class='myClass6'>" + "Vitamins: " + food_Values.orange.nutrients.vitamins + "</div>" 

+"</div>"+
"</div>"
);



