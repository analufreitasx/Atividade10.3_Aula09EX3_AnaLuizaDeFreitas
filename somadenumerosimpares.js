function SomaDeImpares (num1, num2){
    var soma = 0
    for (var i = num1 + 1; i < num2 ; i++){
        if(i % 2 === 1)
        {
            soma = soma + i
        }
    }
    return document.write ("A soma dos números ímpares entre " + num1 + " e " + num2 + " é igual a " + soma + ".")
}
const num1 = parseInt (prompt('Olá! Este site executa o cálculo da soma dos números impares dentro de um intervalo.\nInsira o 1º número inteiro do intervalo: '))
const num2 = parseInt (prompt('Insira o último número do intervalo: \n(O Nº deve ser diferente e maior que o 1º)'))
result = SomaDeImpares (num1, num2)