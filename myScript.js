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
console.log(result);
document.getElementById("jsAwesome").innerHTML = result.join("");

