let input = "Javascript is awesome!!!";
let result = [];
for(i = 0; i < input.length; i++) {
    if(input[i]==="a"){
        result.push("4")
    }
    else if(input[i]==="i"){
        result.push("1")
}
    else if (input[i]==="o"){
        result.push("0")    
}
    else {
    result.push(input[i])
}

    
} 

document.getElementById("jsAwesome").innerHTML = result.join("");

let baseWords = [
    "олень",
    "лев",
    "зебра",
    "слон"
];
let currentWord = baseWords[Math.floor(Math.random() * baseWords.length)];
let finalArray=[];
let remainingLetters = currentWord.length;
let tryCount = 15;


for (let i = 0; i < currentWord.length; i++) {
    finalArray[i] = "_";
} 
// alert (finalArray.join(" "));
while (remainingLetters > 0 && tryCount > 0) {
  
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры. Подсказка: это животное");
    
    if (guess === null){
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву!");
    } else {  
        for (let j = 0; j < currentWord.length; j++) {
            if(currentWord[j] === guess) {
                finalArray[j] = guess;
                remainingLetters--;
                alert (finalArray.join(" ")); 
               
            } 
           
           
        }
    }
    tryCount--
    alert("Попыток осталось : " + tryCount + ".")
    if(tryCount === 0){
        alert("Вы проиграли.");
    } else if (remainingLetters === 0) {
        alert("Отлично! Было загадано слово ' " + currentWord + "'.")
    }
}


