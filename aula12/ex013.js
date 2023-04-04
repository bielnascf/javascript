var agora = new Date()
var horas = agora.getHours()
console.log(`São extamente ${horas} horas.`)
if (horas >= 0 && horas <= 4) {
    console.log('Boa madrugada')
} else if (horas >= 5 && horas <= 12) {
    console.log('Bom dia!')
} else if (horas >= 13 && horas <= 18){
    console.log('Boa tarde!')
} else if (horas >= 19 && horas <= 23) {
    console.log('Boa noite!')
}