let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, lista) {
    if (lista.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já se encontra na lista!')
    }       
    num.value = ''
    num.focus()
}

function finalizar() {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma = soma + valores[pos]
        if (valores[pos] > maior){
            maior = valores[pos]
        }
        if (valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Foram adicionados ${tot} valores na lista.</p>`
    res.innerHTML += `<p>O maior valor digitado foi ${maior} e o menor foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores digitados é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

}