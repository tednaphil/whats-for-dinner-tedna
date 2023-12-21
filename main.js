var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
];

var letsCookButton = document.querySelector('#lets-cook-button');
var clearButton = document.querySelector('#clear-button');
var clearButtonHolder = document.querySelector('#btn-holder')
var cookpot = document.querySelector('#pot-image');
var dishDisplay = document.querySelector('#dish-rec');
var dish = document.querySelector('#dish');




function getRandomFood(foodArray) {
    var randomFood = foodArray[Math.floor(Math.random()*foodArray.length)]
    return randomFood
  };

function displayFood() {
    event.preventDefault()
    cookpot.classList.add('hidden')
    dishDisplay.classList.remove('hidden')
    dishDisplay.classList.add('visible')
    clearButtonHolder.classList.remove('hidden')
    var formCatSelected = document.querySelector('input[name="radio"]:checked').value;
    if (formCatSelected) {
        var category = formCatSelected
        if (category === 'desserts') {
            var randomDish = getRandomFood(desserts)
            dish.innerText = `${randomDish}`
        }
        if (category === 'mains') {
            var randomDish = getRandomFood(mains)
            dish.innerText = `${randomDish}`
        }
        if (category === 'sides') {
            var randomDish = getRandomFood(sides)
            dish.innerText = `${randomDish}`
        }
        if (category === 'entire meal') {
            var randomSide = getRandomFood(sides);
            var randomMain = getRandomFood(mains);
            var randomDessert = getRandomFood(desserts);
            dish.innerText = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`
        }
    }
}


letsCookButton.addEventListener('click', displayFood)