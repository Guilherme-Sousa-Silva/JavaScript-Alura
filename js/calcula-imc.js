var title = document.querySelector(".titulo2");
title.textContent = ("Pacientes")

var titulo = document.querySelector(".titulo");
titulo.textContent = ("Nutrição");
 
var pacientes = document.querySelectorAll(".paciente"); // todos os pacientes

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); //td que tem o peso
    var peso = tdPeso.textContent; // valor do peso 
    var tdAltura = paciente.querySelector(".info-altura"); //td que tem a altura
    var altura = tdAltura.textContent; // valor da altura
    var tdImc = paciente.querySelector(".info-imc"); // td que tem o imc

    //validação de peso e altura
    pesoValido = validaPeso(peso);
    alturaValida = validaAltura(altura);
    
    if (!pesoValido){
        console.log("peso inválido!");
        tdImc.textContent = ("Peso inválido!");
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
        
    }
    if (!alturaValida){
        console.log("altura inválida!");
        tdImc.textContent = ("Altura inválida!");
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido && alturaValida){
        var calcImc = peso/(altura * altura); //calculando o imc
        tdImc.textContent = calcImc; // atribuindo o valor do imc para o td
    }
    if (pesoValido && alturaValida){
        var calcImc = calcumaImc=(peso, altura); //calculando o imc
        tdImc.textContent = calcImc; // atribuindo o valor do imc para o td
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false; 
    }
}

function validaAltura(altura){
    if (altura => 0 && altura <= 3.00){
        return true;
    }else{
        return false; 
    }
}

function calculaImc(peso, altura){  
    var calcImc = 0;
    calcImc = peso/(altura * altura);
    return calcImc.toFixed(2);
}

