let dishChosed = ''
let valor1 = 0
let drinkChosed = ''
let valor2 = 0
let dessertChosed = ''
let valor4 = 0

function dish(id, valor) {
    let cards = '';
    valor1 = valor;
    dishChosed = id;
    cards = document.querySelectorAll(".food-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }
    document.querySelector('#' + id).style.border = "thick solid #32B72F";

}
function drink(id, valor) {
    let cards = '';
    valor2 = valor;
    cards = document.querySelectorAll(".drink-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }
    document.querySelector('#' + id).style.border = "thick solid #32B72F";

}
function dessert(id, valor) {
    let cards = '';
    valor3 = valor;
    dessertChosed = id;
    cards = document.querySelectorAll(".dessert-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }
    document.querySelector('#' + id).style.border = "thick solid #32B72F";

}


