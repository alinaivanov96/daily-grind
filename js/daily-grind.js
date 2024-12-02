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
            name: "Matcha Latte",
            pic: "images/matcha-latte.jpg",
            alt: "A pic of a matcha latte",
            color: "green",
            day: "Sunday",
            desc: `A creamy, vibrant green tea latte made with matcha powder and steamed milk. Packed with antioxidants and offering a gentle caffeine boost, it's the perfect drink to enjoy on a relaxed Sunday!`
        };
    break;
        

    case 1:
        today = "Monday";

        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew",
            color: "brown",
            day: "Monday",
            desc: `A smooth, bold, and refreshing coffee brewed with cold water over a long period. Known for its less acidic taste and natural sweetness, it's perfect for starting the week energized!`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Cappuccino",
            pic: "images/cappuccino.jpg",
            alt: "A pic of a cappuccino",
            color: "beige",
            day: "Monday",
            desc: `A classic Italian coffee made with equal parts espresso, steamed milk, and velvety layer of foam on top. It's rich an creamy, perfect for a cozy and indulgent midweek morning!`
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
            name: "Flat White",
            pic: "images/flat-white.jpg",
            alt: "A pic of a flat white",
            color: "ivory",
            day: "Thursday",
            desc: `A smooth and silky coffee made with espresso and micro-foamed milk. The flat white is sloghtly stronger than a latte and ideal for those seeking a balanced yet rich coffee flavor!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of a mocha",
            color: "brown",
            day: "Friday",
            desc: `A chocolate lover's coffee dream! This beverage blends espresso, steamed milk, and rich chocolate syrup, topped with whipped cream for an indulgent end to the workweek!`
        }
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: "Caramel Macchiato",
            pic: "images/caramel-macchiato.jpg",
            alt: "A pic of a caramel macchiato",
            color: "golden",
            day: "Saturday",
            desc: `A layered coffee drink made with a base of steamed milk, topped with a rich espresso shot, and drizzled with sweet caramel syrup. It's both comforting and indulgent, perfect for a relaxed Saturday!`
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


