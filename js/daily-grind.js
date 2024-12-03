/*
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
    
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    name - for example Bubble Tea
    pic - for example bubble-tea.jpg
    alt - name of coffee alt tag
    color - color associated with coffee
    desc - description of coffee
    day - day of the week




*/

let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

 myDay = parseInt(myDay);//must change to integer for switch

//myDay = 3; ////test only

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of a mocha",
            color: "green",
            day: "Sunday",
            desc: `A luscious coffee drink blending rich espresso, velvety steamed milk, and decadent chocolate syrup, often topped with whipped cream for a sweet and satisfying experience!`
        };
    break;
        

    case 1:
        today = "Monday";

        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew",
            color: "black",
            day: "Monday",
            desc: `A smooth, bold, and refreshing coffee brewed with cold water over a long period. Known for its less acidic taste and natural sweetness, it's perfect for starting the week energized!`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of a frappaccino",
            color: "beige",
            day: "Monday",
            desc: `A blended iced coffee drink, often combined with milk, flavors, and topped with whipped cream. Sweet and refreshing, it's a treat for warm days!`
        };
    break;

    case 3:
        today = "Wednesday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea",
            color: "pink",
            day: "Wednesday",
            desc: `A fun and trendy drink combining black or green tea with milk or fruit flavoring, served over chewy tapioca pearls. It's sweet midweek treat that adds excitement to your coffee shop!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of a drip",
            color: "brown",
            day: "Thursday",
            desc: `A simple, classic coffee made by brewing hot water through ground coffee beans. It's a straightforward and comforting staple for any coffee lover!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a caramel latte",
            color: "ivory",
            day: "Friday",
            desc: `A creamy espresso-based drink combined with steamed milk and sweet caramel syrup, topped with a delicate foam or whipped cream. It's a rich and indulgent choice!`
        }
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of a pumpkin spice latte",
            color: "golden",
            day: "Saturday",
            desc: `A seasonal favorite blending espresso, steamed milk, pumpkin spice syrup, and warm spices like cinnamon and nutmeg. Perfect for autumn vibes!`
        }
    break;
        
        
        


    default:
        today = "Something went wrong";
        

}



//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    return`       <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;
}


