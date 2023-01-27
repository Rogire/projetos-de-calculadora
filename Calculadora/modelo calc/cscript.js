let p=document.querySelector('p#res')

function inserir(num){
let numero=p.innerHTML;
p.innerHTML= numero + num
   
    //também funcionaria se fosse desse jeito:
/*
   let para=document.querySelector(p#res)
   para.innerHTML=`${num}`
*/  
}
function clean(){ //FUNÇÃO NÃO PODE CHAMAR CLEAR, DÁ ERRADO
    p.innerHTML=''
}
function apagar(){ // para usar backspace usa-se substring
    let resultado=p.innerHTML;
    p.innerHTML= resultado.substring(0, resultado.length-1)
}
function calcular(){ //eval é o comando mágico que faz as operações 
    let resultado=p.innerHTML;
    if(resultado){
        p.innerHTML = eval(resultado);
} else{
    p.innerHTML='Insira um número!'
}
}