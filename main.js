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
var cookpot = docuemnt.querySelector('#pot-image');
var dishDisplay = document.querySelector('#dish-rec');
var formCatSelected = document.querySelector('input[name="radio"]:checked').value;

function getRandomFood(foodArray) {
    var randomFood = foodArray[Math.floor(Math.random()*foodArray.length)]
    return randomFood
  };

function displayFood() {
    // add .hidden class to cookpot image
    // remove .hidden class from dish-rec article
    // add flex display (.visible) class to dish-rec article
    // use innerText to add getRandomFood(formCatSelected) to #dish
    //
}