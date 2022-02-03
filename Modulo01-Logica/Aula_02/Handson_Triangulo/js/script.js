let l1=parseInt(prompt("Digite o lado 1"));
let l2=parseInt(prompt("Digite o lado 2"));
let l3=parseInt(prompt("Digite o lado 3"));

//Checar se os valores formam um triangulo

if(l1<l2+l3 && l2<li+l3 && l3<l1+l2){
    if(l1 == l2 && l2 == l3){
        document.getElementById("saida").innerHTML =
        "Triângulo Equilátero.";
    } else if(li != l2 && l1 != l3 && l2 != l3){
        document.getElementById("saida").innerHTML =
        "Triângulo Escaleno.";
    }else {
        document.getElementById("saida").innerHTML =
        "Triângulo Isóceles.";
    }
}else {
    document.getElementById("saida").innerHTML =
    "Os Valores Informados Não Formam Um Triângulo.";
}