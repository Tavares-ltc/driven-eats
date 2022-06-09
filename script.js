let nome = ''
let endereco = ''
let dishChosed = ''
let valor1 = 0
let drinkChosed = ''
let valor2 = 0
let dessertChosed = ''
let valor3 = 0

function dish(id, valor) {
    let cards = '';
    let checks = '';
    valor1 = valor;
    dishChosed = id;
    cards = document.querySelectorAll(".food-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }

    checks = document.querySelectorAll(".food-card #check")

    for (let p = 0; p < checks.length; p++) {
        checks[p].style.visibility = "hidden";
    }

    document.querySelector('#' + id).style.border = "thick solid #32B72F";
    document.querySelector('#' + id + ' img:last-child').style.visibility = "visible";
    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {
        document.querySelector("#button").style.backgroundColor = "#32B72F"
        document.querySelector("#button").innerHTML = "Fechar pedido"
    }

}
function drink(id, valor) {
    let cards = '';
    let checks = '';
    valor2 = valor;
    drinkChosed = id
    cards = document.querySelectorAll(".drink-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }

    checks = document.querySelectorAll(".drink-card #check")

    for (let p = 0; p < checks.length; p++) {
        checks[p].style.visibility = "hidden";
    }

    document.querySelector('#' + id).style.border = "thick solid #32B72F";
    document.querySelector('#' + id + ' img:last-child').style.visibility = "visible";

    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {
        document.querySelector("#button").style.backgroundColor = "#32B72F"
        document.querySelector("#button").innerHTML = "Fechar pedido"
    }

}
function dessert(id, valor) {
    let cards = '';
    let checks = '';
    valor3 = valor;
    dessertChosed = id;
    cards = document.querySelectorAll(".dessert-card");

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "thick solid transparent";
    }
    checks = document.querySelectorAll(".dessert-card #check")

    for (let p = 0; p < checks.length; p++) {
        checks[p].style.visibility = "hidden";
    }


    document.querySelector('#' + id).style.border = "thick solid #32B72F";
    document.querySelector('#' + id + ' img:last-child').style.visibility = "visible";


    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {
        document.querySelector("#button").style.backgroundColor = "#32B72F"
        document.querySelector("#button").innerHTML = "Fechar pedido"
    }

}

function calcular() {

    if ((valor1 > 0) && (valor2 > 0) && (valor3 > 0)) {
        // alert('teste')
        document.querySelector('.confirmation').style.visibility = "visible";

        // document.querySelector('.payment-voucher1') = ''
        // document.querySelector('.payment-voucher2') = ''
        // document.querySelector('.payment-voucher3') = ''
        // document.querySelector('.soma') = ''

        let res1 = document.querySelector('.payment-voucher1')
        res1.innerHTML = `<h5> ${dishChosed}</h5> <h5>  R$${valor1} </h5>`
        let res2 = document.querySelector('.payment-voucher2')
        res2.innerHTML = `<h5> ${drinkChosed}</h5> <h5> R$${valor2} </h5>`
        let res3 = document.querySelector('.payment-voucher3')
        res3.innerHTML = `<h5> ${dessertChosed}</h5> <h5> R$${valor3} </h5>`
        let soma = document.querySelector('.soma')
        soma.innerHTML = `<h5> <strong>TOTAL</strong></h5> <h5> R$${valor1 + valor2 + valor3} </h5>`
    }
}
function cancelar() {
    document.querySelector('.confirmation').style.visibility = "hidden";
    re1.innerHTML = ''
}
function finalizar() {
    nome = prompt('Digite seu nome:')
    endereco = prompt('Digite seu enderenço:')

    let mensagem = encodeURIComponent(`
Olá, gostaria de fazer o pedido:
- Prato: ${dishChosed}
- Bebida: ${drinkChosed}
- Sobremesa: ${dessertChosed}
Total: R$ 27.70
    
Nome: ${nome}
Endereço: ${endereco}`)

    let url = ('https://wa.me/5521965256564?text=' + mensagem)

    window.open(url)

}