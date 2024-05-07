function userDialog() {
    let userName = prompt("Будь ласка, введіть свою пошту:", "");
    
    if (userName) {
        alert("Привіт, " + userName + "! Ласкаво просимо до нашого магазину ключів для комп'ютерних ігор.");

        let star  = ["Одну зірку", "Дві зірки", "Три зірки", "Чотири зірки", "П'ять зірок"];
        let starMessage = "Будь ласка, оцініть якість нашого магазину, виберіть стільки зірок, скільки ви вважаєте за потрібне:\n";
        
        for (let i = 0; i < star.length; i++) {
            starMessage += (i+1) + "."  + star[i] + "\n";
        }

        let selectedstarIndex = prompt(starMessage);
        let selectedstar = star[selectedstarIndex-1];

        if (selectedstar) {
            alert("Дякуємо за оцінку якості нашого магазину на " + selectedstar+ "! Ми завжди розвиваємось заради вас!");
        } else {
            alert("Шкода, що ви не маєте бажання оцінити наш магазин. Можливо, наступного разу!");
        }
    } 
    else {
        alert("Будь ласка, введіть вашу пошту, щоб ми могли ідентифікувати вас.");
    }
}

function showDEV(lastName, firstName, position) {
    let message = "Прізвище: " + lastName + "\n" +
                  "Ім'я: " + firstName + "\n" +
                  "Посада: " + position;
    alert(message);
}

function compareTexts() {
    let text1 = "Перший рядок";
    let text2 = "Другий та довший рядок";

    if (text1.length > text2.length) {
        alert(text1);
    } else if (text2.length > text1.length) {
        alert(text2);
    } else {
        alert("Рядки однакові");
    }
}
function colorChange() {
    
document.body.style.backgroundImage = "url('https://www.bhmpics.com/downloads/anime-honkai-impact-Wallpapers/37.honkai-impact-3rd-anime-4k-03.jpg')"; 
setTimeout(() => document.body.style.backgroundImage = '', 30000); 

   
}
function gotosite() {
if (confirm("Перейти на сайт спонсорів?")) {
location.href = "https://ggbet.ua/uk-ua"; }
}
function querysel() {
    let elements = document.querySelectorAll('ul > li:first-child');
    for (let elem of elements) {
    alert("Наші користувачі найбільше обирають:\ " + elem.innerHTML); 
    }
}
function replaceShopName() {
    let newElementHTML = '<div id="newshopname"><h1 >Онлайн магазин "ForceKey"</h1></div>';
    let shopNameElement = document.getElementById("shopname");
    shopNameElement.outerHTML = newElementHTML;
}
function changeTextContent() {
    let welcomeMessage = document.getElementById("uppertext").getElementsByTagName("p")[2];
    welcomeMessage.textContent = "Вітаємо вас у нашому магазині ліцензійних ключів!";
}
function addGame() {
    let gameName = prompt("Введіть назву нової гри:");
    let gameList = document.getElementById("gameList");
    let newGame = document.createElement("li");
    let textNode = document.createTextNode(gameName);
    newGame.append(textNode);
    gameList.append(newGame);  
}
function removeGame() {
    let selectedGame = prompt("Введіть порядковий номер гри, яку ви хочете видалити (починаючи з 1):");
    let gameList = document.getElementById("gameList");
    let index = parseInt(selectedGame) - 1;
    if (index >= 0 && index < gameList.children.length) {
        gameList.children[index].remove();
    } else {
        alert("Помилка: Ви ввели неправильний номер гри.");
    }
}
function replaceGame() {
    let selectedGame = prompt("Введіть порядковий номер гри, яку ви хочете замінити (починаючи з 1):");
    let gameName = prompt("Введіть нову назву гри:");
    let gameList = document.getElementById("gameList");
    let index = parseInt(selectedGame) - 1;
    if (index >= 0 && index < gameList.children.length) {
        let newGame = document.createElement("li");
        let textNode = document.createTextNode(gameName);
        newGame.append(textNode);
        gameList.children[index].replaceWith(newGame);
    } else {
        alert("Помилка: Ви ввели неправильний номер гри.");
    }
}
function promo() {

let promoCodeDisplayed = false;
function changeColor() {
    let button = document.getElementById('myButton');
    let Color = 'green' ;
    button.style.backgroundColor = Color;
}
function sayHello() {
    alert('Привіт! Тримай промокод на 15% знижки:');
}
function sayGoodbye() {
    if (!promoCodeDisplayed) {
        alert('D22D-2QWQ');
        promoCodeDisplayed = true;
    } else {     
        document.getElementById('myButton').removeEventListener('click', sayGoodbye);
    }
}
document.getElementById('myButton').onclick = changeColor;
document.getElementById('myButton').addEventListener('click', sayHello);
document.getElementById('myButton').addEventListener('click', sayGoodbye);
let eventHandler = {handleEvent: function(event) {alert("Подія спрацювала на елементі: " + event.currentTarget.innerHTML);}};
document.getElementById('myButton').addEventListener('click', eventHandler);
}


function handleMenuClick(event) {
    let action = event.target.dataset.action;
    switch (action) {
        case "add":
            addGame();
            break;
        case "replace":
            replaceGame();
            break;
        case "remove":
            removeGame();
            break;
        
    }
}
