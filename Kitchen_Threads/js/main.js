/**
 * Created by PANDAV on 07-07-2018.
 **/

const allInOneMealsMenu = document.getElementById('allInOneMealsMenu');
const biryaniMenu = document.getElementById('biryaniMenu');
const burgerMenu = document.getElementById('burgerMenu');
const curriesMenu = document.getElementById('curriesMenu');

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
let curries = [
    {
        src: 'img/FireShot/Curries/Amritsari_Chole.jpg',
        title: 'Amritsari Chole'
    },
    {
        src: 'img/FireShot/Curries/Basmati_Rice.jpg',
        title: 'Basmati Rice'
    },
    {
        src: 'img/FireShot/Curries/Butter_Chicken.jpg',
        title: 'Butter Chicken'
    },
    {
        src: 'img/FireShot/Curries/Chicken_Mughlai.jpg',
        title: 'Chicken Mughlai'
    },
    {
        src: 'img/FireShot/Curries/Dal_Makhni.jpg',
        title: 'Dal Makhni'
    },
    {
        src: 'img/FireShot/Curries/Dilli_Waale_Rajma.jpg',
        title: 'Dilli Waale Rajma'
    },
    {
        src: 'img/FireShot/Curries/Kadhai_Paneer.jpg',
        title: 'Kadhai Paneer'
    },
    {
        src: 'img/FireShot/Curries/Palak_Paneer.jpg',
        title: 'Palak Paneer'
    },
    {
        src: 'img/FireShot/Curries/Paneer_Makhni.jpg',
        title: 'Paneer Makhni'
    },
    {
        src: 'img/FireShot/Curries/Raita.jpg',
        title: 'Raita'
    },
    {
        src: 'img/FireShot/Curries/Saag_Chicken.jpg',
        title: 'Saag Chicken'
    },
    {
        src: 'img/FireShot/Curries/Subz_Saag_Handi.jpg',
        title: 'Subz Saag Handi'
    },
    {
        src: 'img/FireShot/Curries/Tawa_Paratha_Pack_of_2.jpg',
        title: 'Tawa Paratha (Pack of 2)'
    },
    {
        src: 'img/FireShot/Curries/Tawa_Paratha_Pack_of_8.jpg',
        title: 'Tawa Paratha (Pack of 8)'
    },

];
function setMenu(arr, element){
    let str = "";
    for (let i =0; i<arr.length; i++){

        str += "<div class=\"col-12 col-sm-6 col-md-4\" >\n" +
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
setMenu(curries, curriesMenu);

 // allInOneMealsMenu.insertAdjacentHTML('afterend', str);

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
