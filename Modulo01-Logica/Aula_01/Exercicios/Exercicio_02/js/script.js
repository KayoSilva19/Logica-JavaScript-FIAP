let qtdKm = parseFloat(prompt("Digite a quantidade de KM que o carro começou"))
let qtdKmPosto = parseFloat(prompt("Digite a quantidade de KM No posto"))
let result =  qtdKmPosto - qtdKm
let abastecidos = parseFloat(prompt("Digite a quantidade de litros foram abastecidos"))
 
let media = result / abastecidos

alert(`O Carro começou com ${qtdKm}Km e chegou no posto com ${qtdKmPosto}Km O carro Rodou ${result}Km Litros abastecidos: ${abastecidos}L A Média é ${media}`)

document.getElementById("1").innerHTML=`Km Inicial ${qtdKm}Km`
document.getElementById("2").innerHTML=`Km Posto ${qtdKmPosto}L`
document.getElementById("3").innerHTML=`Abastecido ${abastecidos}Km`
document.getElementById("4").innerHTML=` Km Rodados${result}Km`
document.getElementById("5").innerHTML=`Média ${media}Km`