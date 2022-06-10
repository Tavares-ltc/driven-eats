let nome, endereco, dishChosed, valor1, drinkChosed, valor2, dessertChosed, valor3, somaValor, somaPreco


function dish(id) {
    let cards = '';
    let checks = '';
    let text = document.querySelector(`#${id} h4`).innerText
    text = text.substr(2, 7)
    valor1 = Number(text.replace(",", "."))


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
function drink(id) {
    let cards = '';
    let checks = '';
    drinkChosed = id
    cards = document.querySelectorAll(".drink-card");


    let text = document.querySelector(`#${id} h4`).innerText
    text = text.substr(2, 7)
    valor2 = Number(text.replace(",", "."))


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
function dessert(id) {
    let cards = '';
    let checks = '';
    dessertChosed = id;
    cards = document.querySelectorAll(".dessert-card");

    let text = document.querySelector(`#${id} h4`).innerText
    text = text.substr(2, 7)
    text = text.replace(",", ".")
    valor3 = Number(text)


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
        somaValor = valor1 + valor2 + valor3

        let preco1 = valor1.toFixed(2)
        preco1 = preco1.replace('.', ',')
        console.log(valor1)
        console.log(typeof (valor1))

        let preco2 = valor2.toFixed(2)
        preco2 = preco2.replace('.', ',')

        let preco3 = valor3.toFixed(2)
        preco3 = preco3.replace('.', ',')

        somaPreco = somaValor.toFixed(2)
        somaPreco = somaPreco.replace('.', ',')


        let res1 = document.querySelector('.payment-voucher1')
        res1.innerHTML = `<h5> ${dishChosed}</h5> <h5>  R$${preco1} </h5>`
        let res2 = document.querySelector('.payment-voucher2')
        res2.innerHTML = `<h5> ${drinkChosed}</h5> <h5> R$${preco2} </h5>`
        let res3 = document.querySelector('.payment-voucher3')
        res3.innerHTML = `<h5> ${dessertChosed}</h5> <h5> R$${preco3} </h5>`
        console.log(somaPreco)
        console.log(typeof (somaPreco))

        let soma = document.querySelector('.soma')
        soma.innerHTML = `<h5> <strong>TOTAL</strong></h5> <h5> R$${somaPreco} </h5>`
    }
    // else {alert(valor1, valor2, valor3)}
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
Total: R$${somaPreco}
    
Nome: ${nome}
Endereço: ${endereco}`)

    let url = ('https://wa.me/5521965256564?text=' + mensagem)

    window.open(url)

}



window.onload = function aviso() {
    
    let largura = window.screen.width;
    
    if (largura > 700) {
    alert('O presente site foi pensado para o layout mobile. Por isso, para que a navegação funcione como o pensado, abra-o em um celular ou no modo responsividade do inspecioanar em uma largura próxima a 414px.')
    }
}