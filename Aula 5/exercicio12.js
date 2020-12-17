let agora = new Date ()
let hora = agora.getHours()
let hoje = new Date ()
let data = hoje.getDate()
let M = new Date()
let mes = M.getMonth()
let A = new Date ()
let ano = A.getFullYear()

    console.log(`Hoje é dia ${data}/${mes}/${ano}`)
    console.log(`Agora Sao exataente ${hora} Horas`)
   

if (hora < 12 ) {
    console.log(`Bom dia!`)
}
else if (hora < 18) {
    console.log('Boa Tarde!')
}
else if (hora < 23) {
    console.log ('Boa noite!')
}
else if (hora < 5){
    console.log('Boa madrugada!')
}