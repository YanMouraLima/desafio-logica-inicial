// Projeto: Desafio Classificador de nível de Herói
// Data: 03/08/2025
// Estudante: Yan Moura Lima

// Variáveis
let nome = "Superman" // declara o nome do herói
let XP = 10002 // declara o nível de experiência do herói
let nivel = ""// declara o nível como vazio, antes dos testes

// Testes
    if (XP < 1000){
    nivel = "Ferro"
    }
    else if (XP >= 1001 && XP <= 2000){
    nivel = "Bronze"
    }
    else if (XP >= 20001 && XP <= 5000){
    nivel = "Prata"
    }
    else if (XP >= 5001 && XP <= 7000){
    nivel = "Ouro"
    }
    else if (XP >= 7001 && XP <= 8000){
    nivel = "Platina"
    }
    else if (XP >= 8001 && XP <= 9000){
    nivel = "Ascendente"
    }
    else if (XP >= 9001 && XP <= 10000){
    nivel = "Imortal"
    }
    else {
    nivel = "Radiante"
    }

// Saída
console.log ("O Herói de nome " + nome + " está no nível " + nivel ) // mensagem de saída