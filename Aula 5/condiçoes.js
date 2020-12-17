let idade = 15

console.log(`Você tem ${idade} Anos!`)

if (idade < 16) {
    console.log('Voce nao pode votar!') 
}
    else if (idade < 18 || idade > 65) {
        console.log('O seu voto é opcional!')
}
    else {
        console.log('O seu voto é OBRIGATORIO!')
}
