class Jogador {
    constructor(nome, posicao, numGols){
        this.nome = nome
        this.posicao = posicao
        this.numGols = numGols
    }
    golsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numGols} gols em sua carreira`)
    }
}

const Neymar = new Jogador('Neymar', 'Atacante', 400)
Neymar.golsMarcados()
const Pele = new Jogador('Pele', 'Atacante', 1000)
Pele.golsMarcados()



console.log(typeof Jogador)