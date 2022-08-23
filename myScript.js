let input = "javascript is awesome";
let result = "";
for(i = 0; i < input.length; i++) {
    if(input.includes ("a")){
        result = input.replaceAll("a", "4");}
else if (input.includes("o")){
    result = input.replaceAll("o", "0");}


       
    console.log(i);
    console.log(result);
}