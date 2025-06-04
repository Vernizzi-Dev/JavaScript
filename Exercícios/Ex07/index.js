let hora = 19
if (hora >= 0 && hora <= 5){
    console.log(`Agora são ${hora}h da Manhã`)
    console.log('Boa Madrugada!')
} else if ( hora < 11){
    console.log(`Agora são ${hora}h da Manhã`)
    console.log('Bom dia!')
} else if (hora <= 17){
    console.log(`Agora são ${hora}h da Tarde`)
    console.log('Boa tarde!')
} else if (hora <= 23){
    console.log(`Agora são ${hora}h da Noite`)
    console.log('Boa noite!')
}