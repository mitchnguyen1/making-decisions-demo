/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowHealthAttack = 25
let jamieLannisterAttack = 35

if(jonSnowHealthAttack > jamieLannisterAttack){
    console.log("Jon is stronger")
}
else if(jonSnowHealthAttack == jamieLannisterAttack){
    console.log("Attacks is the same")
}
else{
    console.log("Jamie is stronger")
}

//create two vars for jon for his health/defense
let jonSnowHealth = 100
let jonSnowDefense = 0

if(jonSnowHealth <= jamieLannisterAttack){
    console.log("Jon Snow has been slain")
}
else{
    console.log(jonSnowHealth -= jamieLannisterAttack)
}

//increase jon shield by 25
jonSnowDefense += 25

if (jamieLannisterAttack >= (jonSnowDefense + jonSnowHealth)){
    console.log("Jon Snow has been slain")
}
else{
    jonSnowHealth = (jonSnowDefense + jonSnowHealth) - jamieLannisterAttack
    console.log(jonSnowHealth)
}

//health kit 
jonSnowHealth += 50
if(jonSnowHealth > 100){
    jonSnowHealth = 100
}

let coinLandsHeads = false; 
if(coinLandsHeads){
    console.log("aiming at head")
}
else{
    console.log("Jon ran away")
}

//jami attack jon 5 times 
// for(let i = 0; i<5;i++){
//     if(jonSnowHealth <= 0){
//         console.log("Jon is dead")
//         break 
//     }
//     else{
//         jonSnowHealth = jonSnowHealth+jonSnowDefense-jamieLannisterAttack
//         console.log(`Jon Snow's health is now ${jonSnowHealth} after the ${i} attack`)
// }
// }

//attack jon until he's dead
while(jonSnowHealth > 0){
    jonSnowHealth = jonSnowHealth + jonSnowDefense - jamieLannisterAttack
    console.log(jonSnowHealth)
}