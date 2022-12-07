//DESAFIO 1/////////////////////////////////////////
//calcularRentabilidade(5)

function calcularRentabilidade(a) {
    let arrayA = []
    let arrayB = []
    let b = a+1
    let c = a+2

    for (let index = 1; index < 11; index++) {
        arrayA[arrayA.length] = a * index
        arrayB[arrayB.length] = b * index
        arrayB[arrayB.length] = c * index
    }

    console.log("multiplos comuns")
    console.log(arrayA)
    console.log("multiplos duplos")
    console.log(arrayB)
}

//DESAFIO 2/////////////////////////////////////////
//faz parte do exercicio chamar o método de "pontoDeOnibus" 
//mas acredito que uma melhor opção seria "calcularQtdPassageiros"
let onibus = [[10, 0] , [3, 5] , [5 , 8]]
//pontoDeOnibus(onibus)

function pontoDeOnibus(onibus) {
    let qtdPassageiros = 0
   
    onibus.forEach(parada => {
        qtdPassageiros = qtdPassageiros + parada[0]
        qtdPassageiros = qtdPassageiros - parada[1]
    });
   
    onibus[onibus.length] = qtdPassageiros

    console.log(onibus)
}

//DESAFIO 3/////////////////////////////////////////
let cartela = [21, 13, 2, 7, 5, 14, 7, 15, 9, 10]
let perdeu
VerificarSeGanhouJogo(cartela)

function VerificarSeGanhouJogo(cartela) {
    let bingo = [2, 7, 9, 14, 15]

    for (let index = 0; index < bingo.length && !perdeu; index++) {
        perdeu = cartela.every( numero => numero != bingo[index] )
    }

    console.log(perdeu ? "perdeu" : "ganhou")
}