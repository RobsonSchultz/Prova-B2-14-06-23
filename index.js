// Questão 1 - Números primos

function numeroPrimo(num) {

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
}

function listarPrimos() {
    var primos = [];

    for (let i = 1; i < 1001; i++) {
        if(numeroPrimo(i)) {
            primos.push(i)
        }
    }

    console.log(primos)
}

numeroPrimo()
listarPrimos()




// Questão 2 - Senha

function verifSenha(senha) {
    if (senha.length < 8) {
        return "A senha deve ter pelo menos 8 caracteres.";
    }

    if (!/[a-z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra minúscula.";
    }

    if (!/[A-Z]/.test(senha)) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
    }

    if (!/[0-9]/.test(senha)) {
        return "A senha deve conter pelo menos um número."
    }

    return "A senha é válida"
}

// EXEMPLOS DE USO
var senha1 = "Abc123" // SENHA INVÁLIDA - Menos de 8 caracteres
var senha2 = "abcd7894" // SENHA INVÁLIDA - Nenhuma letra maiúscula
var senha3 = "FGHI2564" // SENHA INVÁLIDA - Nenhuma letra minúscula
var senha4 = "DefGh456" // SENHA VÁLIDA
var senha5 = prompt('Digite a sua própria senha') // SENHA DO USUÁRIO

console.log(verifSenha(senha1))
console.log(verifSenha(senha2))
console.log(verifSenha(senha3))
console.log(verifSenha(senha4))
console.log(verifSenha(senha5))




// Questão 3 - Fatoriais

function calcularFatorial(numero) {
    function calcularFatorialIndividual(numero) {
        var fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
  
    console.log(`O fatorial de ${numero} é: ${calcularFatorialIndividual(numero)}`);
    
    for (var i = 1; i <= 10; i++) {
            console.log(`O fatorial de ${i} é: ${calcularFatorialIndividual(i)}`);
        }
    }

calcularFatorial();



  // Questão 4 - Quadrado perfeito

function quadradoPerfeito(numero) {
    var raiz = Math.floor(Math.sqrt(numero));
  
    if (raiz * raiz === numero) {
        return true;
    } else {
        return false;
    }
}