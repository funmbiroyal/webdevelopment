var years = [1933,1731,2000];
var countries = ["Canada","France","Nigeria","Thailand","United States"]
var message = [53,"Canada",true,1420]
console.log(years)
console.log("Countries: "+ countries)
console.log(message)
document.write(years,"<br/>")
document.write("Countries: "+countries,"<br/>")
document.write(message,"<br/>")
var lenght = countries.length;
document.write("The lenght of the countries is "+lenght,"<br/>")
countries.push("Zambia")
document.write("One more country added:" +countries,"<br/>")
lenght = countries.length;
document.write("The new length is now: "+lenght,"<br/>")
countries.pop();
document.write("After last item has been removed: "+countries,"<br/>")
countries.unshift("Angola")
document.write("One country added: "+countries,"<br/>")
countries.shift()
document.write("Angola removed: "+countries,"<br/>")
joinedCountries = countries.join("*");//joins the items in an array into a string
document.write("Joined countries with astericks: "+ joinedCountries,"<br/>")
var Countries_and_Years = countries.concat(years)//concats two different arrays into one array
document.write("Countries concatenated with years: "+ Countries_and_Years,"<br/>")
var reversed_years = years.reverse();//reverses the order of the element
document.write("Reversed years: "+ reversed_years,"<br/>")
var sorted_Countries = countries.sort();//sorts the element in acsending order either aphabetically or
// numerically depending on the type of item stored in the array.
document.write("Sorted Countries(asc): "+ sorted_Countries,"<br/>")
reversed_Countries = sorted_Countries.reverse()//sorts the element in descending order
document.write("Sorted Countries(desc): "+reversed_Countries,"<br/>")
const name = ["Bessie","Jane"]
document.write(name,"<br/>")
name.push("ola")
document.write("One name pushed: "+name,"<br/>")
var product = {
    name:"Apple",
    category:"Fruits",
    price:1.99,
    nutrients:{
        carbs:0.95,
        fats:0.3,
        protein:0.2
    }
}
document.write(product.name,product.nutrients.carbs,"<br/>")

var food_Values = {
    "apple":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat =0.0,
            energy =94.6,
            protein=0.3,
            calories=52.0,
            vitamins=1
        }
    },
    "orange":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat =1,
            energy =1,
            protein=1,
            calories=1,
            vitamins=1
        }
    },
    "burger":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat =1,
            energy =1,
            protein=1,
            calories=1,
            vitamins=1
        }
    },
    "coffee":{
        category:"Fruits",
        price:1.99,
        nutrients:{
            fat =1,
            energy =1,
            protein=1,
            calories=1,
            vitamins=1
        }
    }
}
document.write(food_Values.apple,food_Values.nutrients.calories)
var sub = function subtotal(price,quantity){
    return price * quantity
};
var result = sub(10,2)
document.write(result,"<br/>")

function calculateTotal(price,quantity){
    var subtotal = price * quantity;
    return subtotal + calculateTax(subtotal)
    var exp = function calculateTax(subtotal){
          var taxRate = 0.05;
          var tax = subtotal * taxRate;
          return tax;
        }
} ;
var output = calculateTotal(2,5)

document.write(output,"<br/>")