//------------------------------- exercicio 1---------------------------------------
function exercicio1() {
    for (let i = 0; i <= 10; i++) {
        alert(i);
    }
}

//------------------------------- exercicio 2---------------------------------------
function exercicio2() {
    let numPar = prompt("Digite um número");

    for (let i = 0; i <= parseInt(numPar); i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}

//------------------------------- exercicio 3---------------------------------------
function exercicio3() {
    let num = prompt("digite um número inteiro positivo:");
    num = parseInt(num)
    primo = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
        }
    }
    if (primo) {
        console.log("primo");
    } else {
        console.log("não é primo");
    }

}

//------------------------------- exercicio 4---------------------------------------
function exercicio4() {
    let tabuada = parseInt(prompt("digite um numero inteiro positivo:"));
    for (let i = 1; i <= 10; i++) {
        alert((tabuada) + "x" + i + "=" + (tabuada * i));
    }
}

//------------------------------- exercicio 5---------------------------------------
function exercicio5() {
    let numImpar = parseInt(prompt("digite um numero:"));
    let divImpar = 1;

    while (divImpar <= numImpar) {
        if (divImpar % 2 !== 0) {
            alert(divImpar);
        }
        divImpar++;
    }
}

//------------------------------- exercicio 6---------------------------------------
function exercicio6() {
    let num = prompt("digite um número inteiro positivo:");
    num = parseInt(num)

    while (i = 2, i <= num, i++) {
        if (num % i == 0) {
            pares = true
        } else {
            pares = false
        }
    }
}

//------------------------------- exercicio 7---------------------------------------
function exercicio7() {
    let decresc = 10;

    while (decresc >= 1) {
        alert(decresc);
        decresc--;
    }
}

//------------------------------- exercicio 8---------------------------------------
function exercicio8() {
    let palavra = prompt("Digite uma palavra:");
    let inversa = '';
    for (let i = 1; 1 <= palavra.length; i++) {
        inversa = inversa + palavra.charAt(palavra.length - 1)
    }

    if (palavra == inversa) {
        console.log("é palindromo");
    } else {
        console.log("não é palindromo");
    }
}

//------------------------------- exercicio 9---------------------------------------
function exercicio9(){
    let somar = 0;

    for (let i=1; i<=100; i++){
        somar += i;
    }

    alert("a soma dos números 1 a 100 é:" + somar);
}

//------------------------------- exercicio 10--------------------------------------
function exercicio10(){
    let numero = parseInt(prompt("digite o primeiro numero:"));
    let soma = 0;
    let quantidade = 0

    while (numero !==0){
        soma += numero;
        quantidade++
        numero = parseInt(prompt("digite outro numero, ou, se desejar encerrar, digite 0"));
    }

    let media = soma / quantidade;
    alert(media);
}

//------------------------------- exercicio 11--------------------------------------
function exercicio11() {

    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            alert(i);
        }
    }
}

//------------------------------- exercicio 12--------------------------------------
function exercicio12() {

    let num = prompt("Digite um número:");
    let soma = 0;

    for (let i = 0; i < num.length; i++) {
        soma += parseInt(num[i]);
    }
    alert("A soma dos digitos de " + num + " é : " + soma)

}

//------------------------------- exercicio 13--------------------------------------


//------------------------------- exercicio 14--------------------------------------


//------------------------------- exercicio 15--------------------------------------


//------------------------------- exercicio 16--------------------------------------


//------------------------------- exercicio 17--------------------------------------


//------------------------------- exercicio 18--------------------------------------


//------------------------------- exercicio 19--------------------------------------


//------------------------------- exercicio 20--------------------------------------


//------------------------------- exercicio 21--------------------------------------


//------------------------------- exercicio 22--------------------------------------


//------------------------------- exercicio 23--------------------------------------


//------------------------------- exercicio 24--------------------------------------


//------------------------------- exercicio 25--------------------------------------
