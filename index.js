let countOfVictories = 20
let countOfDefeats = 3

let balance = calculatorBalance(countOfVictories,countOfDefeats)
let level = rankingCalculator(balance)

console.log("O herói tem saldo de "+balance+" e está no nível de "+level)


function calculatorBalance(victories, defeats){
    let result = victories - defeats
    return result;
}

function rankingCalculator(balance){ 
    let level

    if(balance <= 10){
        level = ("Ferro");
    } else if(balance <=20){
        level = ("Bronze");
    } else if(balance <=50){
        level = ("Prata");
    } else if(balance <=80){
        level = ("Ouro");
    } else if(balance <=90){
        level = ("Diamante");
    } else if(balance <=100){
        level = ("Lendário");
    } else if(balance >= 101){
        level = ("Imortal");
    }
    
    return level
}