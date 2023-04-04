function contagem() {
    var init = document.getElementById('txti')
    var end = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var result = document.getElementById('res')

    if (init.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        alert('ERRO! Digite os dados novamente!')
        result.innerHTML = 'Impossível Contar!'
    } else {
        result.innerHTML = 'Contando... <br>'
        let i = Number(init.value)
        let e = Number(end.value)
        let p = Number(pass.value)
        if (p <= 0) {
            alert('Passo inválido!')
        }
        if (i < e) { // Contagem Crescente
            for (let c = i; c <= e; c = c + p) {
                result.innerHTML += `${c}...`
            }
        } else { // Contagem Decrescente
            for (let c = i; c >= e; c = c - p) {
                result.innerHTML += `${c}...`
            }
        }
    }



}