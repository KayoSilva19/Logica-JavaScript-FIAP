function Fatorial() {
    let num = parseInt(document.getElementById("num").value);
    let i = 1;
    let res = num;

    
    while(i < num){
        res *= i;
        i++
    }
    document.getElementById("resultado").innerHTML=`${res}`;
}