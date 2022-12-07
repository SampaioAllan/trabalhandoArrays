calcularRentabilidade(5)

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