function ex1(n1,n2){
    total = n1 + n2;
    return total;
}
function ex2(n1,n2){
    total = n1 - n2;
    return total;
}
function ex3(n1,n2){
    total = n1 * n2;
    return total;
}
function ex4(n1,n2){
    total = n1 / n2;
    return total;
}
function ex5(nome1,nome2){
    console.log(`os nomes digitados foram:${nome1} ${nome2}`)
}
function ex6(temp1){
    temp2 = (temp1 - 32) * 5/9
    console.log("a temperatura em celsius é igual a:" + temp2)
}
function ex7(peso,altura){
    imc = peso / altura
    return imc
}
function ex8(altura,largura){
    area = altura * largura 
    return area; 
}
function ex9(raio){
    area = Math.PI * (raio * raio)
    return area;
}
console.log(`a soma é ${ex1(5,5)}`)
console.log(`a subtração é ${ex2(5,5)}`)
console.log(`a multiplicação é ${ex3(5,5)}`)
console.log(`a divisão é ${ex4(5,5)}`)
ex5("Alax","David")
ex6(32)
console.log(`o seu imc é:${ex7(1.70,69)}`)
console.log(`a area do quadrado é: ${ex8(10,15)}`)
console.log(`a area do circulo é = ${ex9(20)}`)