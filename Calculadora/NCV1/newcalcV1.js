let nume1= document.getElementById('num1')
let nume2= document.getElementById('num2')
let res = document.getElementById('res')
let calcu= document.querySelector('div#calc')
let vap = ''
function somar(n1=Number(nume1.value), n2=Number(nume2.value)){
    if(nume1.value.length==0 || nume2.value.length==0){
        alert('Insira os números!')
    } else {
        
       vap=`${n1+n2}`
        } 
}
function subtrair(n1=Number(nume1.value), n2=Number(nume2.value)){
    if(nume1.value.length==0 || nume2.value.length==0){
        alert('Insira os números!')
    } else {
        vap=`${n1 - n2}`
    }
}
function dividir(n1=Number(nume1.value), n2=Number(nume2.value)){
    if(nume1.value.length==0 || nume2.value.length==0){
        alert('Insira os números!')
    } else {
        let divid= n1/n2
        vap=`${divid.toFixed(2)}`
    }
}
function multiplicar(n1=Number(nume1.value), n2=Number(nume2.value)){
    if(nume1.value.length==0 || nume2.value.length==0){
        alert('Insira os números!')
    } else {
    vap=`${n1 * n2}`
    }
}
function resultado(){
    calcu.innerHTML=`${vap}`
}

function limpar(){
        res.innerHTML=''
}
