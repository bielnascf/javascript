function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // Bebê
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'adolescentem.png')
            } else if (idade >= 18 && idade < 30) {
                // Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade >= 30 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'adultom.png')
            } else if (idade >= 60) {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                // Bebê
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 18) {
                // Adolescente
                img.setAttribute('src', 'adolescentef.png')
            } else if (idade >= 18 && idade < 30) {
                // Jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade >= 30 && idade < 60) {
                // Adulto
                img.setAttribute('src', 'adultof.png')
            } else if (idade >= 60) {
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

    

}