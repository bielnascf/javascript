let nomes = ['Gabriel', 'João', 'Thiago', 'Matthew', 'Mateus']


/*for (let pos = 0;pos < nomes.length; pos++){
    console.log(`Na ${pos + 1}° posição temos o nome ${nomes[pos]}`)
}
*/

for(let pos in nomes){ // Simplificado
    console.log(`Na ${Number(pos) + 1}° posição temos o nome ${nomes[pos]}`) 
}
