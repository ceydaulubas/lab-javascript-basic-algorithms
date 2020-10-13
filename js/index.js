// Iteration 1: Names and Input
var hacker1 = "Elia";
console.log(`The driver is ${hacker1}`);

var hacker2= "Sophie";
console.log(`The navigator is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker2.length > hacker1.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
        

// Iteration 3: Loops

// 3.1
var  separatedName= "";

for (let i=0; i<hacker1.length; i++){
    separatedName += hacker1[i].toUpperCase() + " ";
}
console.log(separatedName)

// 3.2
var reversedName= "";
for (let i=hacker1.length-1;i>=0; i--){
    reversedName += hacker1[i];
}
console.log(reversedName);
//3.3

if( hacker1.localeCompare(hacker2)===1){
    console.log("The driver's name goes first.");
}else if(hacker1.localeCompare(hacker2)===0){
    console.log("Yo, the navigator goes first definitely.");     
}else if (hacker1.localeCompare(hacker2)=== -1){
    console.log("What?! You both have the same name?");
}

