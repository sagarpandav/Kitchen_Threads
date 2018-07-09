/**
 * Created by PANDAV on 07-07-2018.
 **/

const IMG = document.querySelectorAll(".single_menu_item_img");
for (let i =0; i<IMG.length; i++){
    IMG[i].style.width = "500px";
    IMG[i].style.height = "200px";
}

const allInOneMealsMenu = document.getElementById('allInOneMealsMenu');
const biryaniMenu = document.getElementById('biryaniMenu');
const burgerMenu = document.getElementById('burgerMenu');

let allInOneMeals = [
    {
        src : 'img/FireShot/All-In-1-Meals/Bhuna_Kebab_Meal.jpg',
        title: "Bhuna Kebab"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Butter_Chicken_Meal.jpg',
        title: "Butter Chicken"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Chicken_Masala_Meal.jpg',
        title: "Chicken Masala"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Chicken_Overload_Meal.jpg',
        title: "Chicken Overload"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Chole_Tikki_Meal.jpg',
        title: "Chole Tikki"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Dal_Makhni_Meal.jpg',
        title: "Dal Makhni"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Dilli_Rajma_Meal.jpg',
        title: "Dilli Rajma"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Mushrooms_Spinach_Meal.jpg',
        title: "Mushrooms Spinach"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Palak_Paneer_Meal.jpg',
        title: "Palak Paneer"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Paneer_Makhni_Meal.jpg',
        title: "Paneer Makhni"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Saag_Chicken_Meal.jpg',
        title: "Saag Chicken"
    },
    {
        src: 'img/FireShot/All-In-1-Meals/Spicy_Paneer_Meal.jpg',
        title: "Spicy Paneer"
    }
];
let biryani = [
    {
        src: 'img/FireShot/Biryani/Afghani_Chicken_Biryani.jpg',
        title: 'Afghani Chicken Biryani'
    },
    {
        src: 'img/FireShot/Biryani/Chicken-Tikka-Biryani.jpg',
        title: 'Chicken Tikka Biryani'
    },
    {
        src: 'img/FireShot/Biryani/Firangi_Subz_Biryani.jpg',
        title: 'Firangi Subz Biryani'
    },
    {
        src: 'img/FireShot/Biryani/Murg_Dum_Biryani.jpg',
        title: 'Murg Dum Biryani'
    },
    {
        src: 'img/FireShot/Biryani/Shahi_Paneer_Biryani.jpg',
        title: 'Shahi Paneer Biryani'
    }
];
let burger = [
    {
        src: 'img/FireShot/Burger/Big_Crunch_Chicken_Cheese_Burger.jpg',
        title: 'Big Crunch Chicken Cheese Burger'
    },
    {
        src: 'img/FireShot/Burger/Big_Crunch_Chicken_Classic_Burger.jpg',
        title: 'Big Crunch Chicken Classic Burger'
    },
    {
        src: 'img/FireShot/Burger/Big_Crunch_Chicken_Spicy_Burger.jpg',
        title: 'Big Crunch Chicken Spicy Burger'
    },
    {
        src: 'img/FireShot/Burger/Big_Crunch_Veg_Cheese_Burger.jpg',
        title: 'Big Crunch Veg Cheese Burger'
    },
    {
        src: 'img/FireShot/Burger/Big_Crunch_Veg_Classic_Burger.jpg',
        title: 'Big Crunch Veg Classic Burger'
    },
    {
        src: 'img/FireShot/Burger/Big_Crunch_Veg_Spicy_Burger.jpg',
        title: 'Big Crunch Veg Spicy Burger'
    }
];

function setMenu(arr, element){
    let str = "";
    for (let i =0; i<arr.length; i++){

        str += "<div class=\"col-12 col-sm-6 col-md-4\" style=\"margin-bottom: 50px\">\n" +
            "                    <div class=\"kt-single-dish wow fadeInUp\" data-wow-delay=\"0.5s\">\n" +
            "                        <img class=\"single_menu_item_img1\" src=" + arr[i].src + " alt=\"\">\n" +
            "                        <div class=\"dish-info\">\n" +
            "                            <h6 class=\"dish-name\">"+arr[i].title+"</h6>\n" +
            "                            <p class=\"dish-price\">$45</p>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>";

    }
    element.innerHTML = str;
}
setMenu(allInOneMeals, allInOneMealsMenu);
setMenu(biryani, biryaniMenu);
setMenu(burger, burgerMenu);


// let str = "";
//  for (let i =0; i<allInOneMeals.length; i++){
//
//      str += "<div class=\"col-12 col-sm-6 col-md-4\" style=\"margin-bottom: 50px\">\n" +
//          "                    <div class=\"kt-single-dish wow fadeInUp\" data-wow-delay=\"0.5s\">\n" +
//          "                        <img class=\"single_menu_item_img1\" src=" + allInOneMeals[i].src + " alt=\"\">\n" +
//          "                        <div class=\"dish-info\">\n" +
//          "                            <h6 class=\"dish-name\">"+allInOneMeals[i].title+"</h6>\n" +
//          "                            <p class=\"dish-price\">$45</p>\n" +
//          "                        </div>\n" +
//          "                    </div>\n" +
//          "                </div>";
//
// }
// allInOneMealsMenu.innerHTML = str;
//

 // allInOneMealsMenu.insertAdjacentHTML('afterend', str);
 // let image1d = document.createElement('img');
 // image1d.src = allInOneMeals[0].src;
 // allInOneMealsMenu.appendChild(image1d);

function showHideAllInOneMenu(id) {
    if (id.classList.contains('menu-hidden')){
        id.classList.remove('menu-hidden');
    }
    else {
        $(id).fadeOut(10000,new function () {
            id.classList.add('menu-hidden');
        });
    }
}

const IMG1 = document.querySelectorAll(".single_menu_item_img1");
for (let i =0; i<IMG1.length; i++){
    IMG1[i].style.width = "300px";
    IMG1[i].style.height = "150px";
    IMG1[i].style.marginBottom = "10px";
}