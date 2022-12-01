const betNumber = Math.floor(Math.random()*(10-1)+1)
const winnerNumber = Math.floor(Math.random()*(10-1)+1)
console.log (`Número apostado ${betNumber} o numero sorteado foi ${winnerNumber}`)
if (betNumber === winnerNumber){
    console.log ("Ganhador do prêmio")
}else{
    console.log ("Infelizmente, não foi dessa vez")
}