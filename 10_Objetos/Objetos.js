let jogador = {
    nome: 'Renato Augusto',
    idade: 34,
    numGol: 81,
    Gol(g=0){
      console.log('Renaaaato fez gol!!!!')
      this.numGol += g
    }
}

// console.log(jogador)
// console.log(jogador.numGol)
// jogador.Gol(2)
// console.log(jogador.numGol)

jogador.posicao = 'Meio Campo'
console.log(jogador)

delete jogador.idade
console.log(jogador)
