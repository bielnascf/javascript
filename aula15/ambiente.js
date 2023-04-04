let nomes = ['Gabriel','Márcio','Leandro','Carlos']
console.log(nomes)
nomes.push('Marcos','Cássio') // Adiciona valores ao final da array
console.log(nomes)
nomes[6] = 'Leonardo' // Adiciona valores de acordo com o índice desejado
nomes[2] = 'Thiago'
nomes.sort() // Organiza em ordem alfábetica ou com números, ordem crescente
console.log(nomes)
console.log(`Há exatamente ${nomes.length} nomes na lista.`)