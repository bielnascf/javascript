var agora = new Date()
var dia_semana = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch(dia_semana) {
    case 0:
        console.log('Hoje é Domingo!')
        break
    case 1:
        console.log('Hoje é Segunda!')
        break
    case 2:
        console.log('Hoje é Terça!')
        break
    case 3:
        console.log('Hoje é Quarta!')
        break
    case 4:
        console.log('Hoje é Quinta!')
        break
    case 5:
        console.log('AIAIAIAI SER BANDIDO É BOM DEMAIS OLHA SÓ O QUE ELA FAZ QUANDO VE A PEÇA DO PAAAAI')
        break
    case 6:
        console.log('Hoje é Sábado!')
        break
}