let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let result = ( nota1 + nota2 + nota3 ) / 3;

let notaFinal = result.toFixed(1);

if( notaFinal >= 7 ){
    alert(`Parabéns sua nota foi ${notaFinal}! Você foi Aprovado!!!`);

}else if ( notaFinal < 7 && notaFinal >= 4){
    alert(`Você está em profa final! Sua nota é ${notaFinal}`);

}else {
    alert(`Você foi reprovado! ${notaFinal}`)
}