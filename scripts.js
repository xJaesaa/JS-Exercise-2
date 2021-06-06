var cookies = 0;
var totalClicks = 0;
var upgradeCount = 0;
var cookiesSec = 0;

class cookie {
    constructor(type, value, price, count, buttonName, logMessage) {
        this.type = type;
        this.value = value;
        this.price = price;
        this.count = count;
        this.buttonName = buttonName;
        this.logMessage = logMessage;
    }
}
var cookieArray = [
    new cookie(
        "Chocolate Chip",
        2,
        25,
        0,
        "button1",
        "Chocolate Chip Cookie Purchased"
    ),
    new cookie(
        "Pinwheel Cookie",
        4,
        150,
        0,
        "button2",
        "Pinwheel Cookie Purchased"
    ),
    new cookie(
        "Choc Cookie",
        8,
        900,
        0,
        "button3",
        "Choc Cookie Purchased"
    ),
    new cookie(
        "M&M Cookie",
        16,
        1800,
        0,
        "button4",
        "M&M Cookie Purchased"
    ),
    new cookie(
        "Shortbread Cookie",
        32,
        3600,
        0,
        "button5",
        "Shortbread Cookie Purchased"
    ),
    new cookie(
        "Macaron Cookie",
        64,
        7200,
        0,
        "button6",
        "Macaron Cookie Purchased"
    ),
    new cookie(
        "Biscotti Cookie",
        128,
        14400,
        0,
        "button7",
        "Biscotti Cookie Purchased"
    ),
    new cookie(
        "Sugar Cookie",
        256,
        28800,
        0,
        "button8",
        "Sugar Cookie Purchased"
    ),
    new cookie(
        "Oatmeal Raisin Cookie",
        512,
        57600,
        0,
        "button9",
        "Oatmeal Raisin Cookie Purchased"
    ),
    new cookie(
        "Gingerbread Cookie",
        1024,
        115200,
        0,
        "button10",
        "Gingerbread Cookie Purchased"
    )
]

var seconds = 0;
function incrementSeconds(){
    seconds += 1;
    document.getElementById("secondsCount").innerText = "Game Duration (seconds): " + seconds;
    console.log("gamer");
}
setInterval(incrementSeconds, 1000);


function cookieClick(){
    cookies++
    totalClicks++
    document.getElementById("header").innerHTML = cookies + " Cookies";
    document.getElementById("clickCount").innerHTML = "Total Clicks: " + totalClicks;
}
function continuous(){
    cookies = cookies + (cookieArray[0].value * cookieArray[0].count) + (cookieArray[1].value * cookieArray[1].count) + (cookieArray[2].value * cookieArray[2].count) + (cookieArray[3].value * cookieArray[3].count) + (cookieArray[4].value * cookieArray[4].count) + (cookieArray[5].value * cookieArray[5].count) + (cookieArray[6].value * cookieArray[6].count) + (cookieArray[7].value * cookieArray[7].count) + (cookieArray[8].value * cookieArray[8].count) + (cookieArray[9].value * cookieArray[9].count);
    cookiesSec = (cookieArray[0].value * cookieArray[0].count) + (cookieArray[1].value * cookieArray[1].count) + (cookieArray[2].value * cookieArray[2].count) + (cookieArray[3].value * cookieArray[3].count) + (cookieArray[4].value * cookieArray[4].count) + (cookieArray[5].value * cookieArray[5].count) + (cookieArray[6].value * cookieArray[6].count) + (cookieArray[7].value * cookieArray[7].count) + (cookieArray[8].value * cookieArray[8].count) + (cookieArray[9].value * cookieArray[9].count);
    document.getElementById("header").innerHTML = cookies + " Cookies";
    document.getElementById("cookiesSec").innerHTML = cookiesSec + " cookies a second";
}
setInterval(continuous, 1000);

function purchase(cookieType){
    if(cookies >= cookieType.price){
        upgradeCount++;
        cookies = cookies - cookieType.price;
        document.getElementById("header").innerHTML = cookies + " Cookies";
        document.getElementById("upgradeCount").innerHTML = "Number of Upgrades: " + upgradeCount;
        cookieType.price = cookieType.price * 2;
        document.getElementById(cookieType.buttonName).innerText = cookieType.type + " $" + cookieType.price;
        log(cookieType);
        cookieType.count++;
    }
    else{
        alert("Insufficient Cookies");
    }
}

function log(cookieType){
    var li = document.createElement("li");
    var t = document.createTextNode(cookieType.logMessage)
    li.appendChild(t);
    document.getElementById("LogUL").appendChild(li);
    document.getElementById("logText").value = "";
    var span = document.createElement("SPAN");
    li.appendChild(span);
}

function test(){
    cookies = cookies + 2000000;
    document.getElementById("header").innerHTML = cookies + " Cookies";
}