//Leia um login e se este não for o administrador exiba a 
//mensagem: SEM PODERES ADMINISTRATIVOS.

let usuario=prompt("Usuário");
if(!(usuario=="Administrador")){
    alert("Sem poderes administrativos!");
}else {
    alert("Ola Administrador!")
}

