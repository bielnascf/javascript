function parimp(n) {
    if (n % 2 == 0) {
        return `O número ${n} é Par!`
    } else {
        return `O número ${n} é Impar!`
    }
}

let res = parimp(0)
console.log(res)
