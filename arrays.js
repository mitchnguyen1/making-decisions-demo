/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];
let belt = [];

backpack.push("sword")
backpack.push("torch")
backpack.push("food")
backpack.push("Kleenex")
backpack.push("Shield")
backpack.push("Clorex")
backpack.push("Sweater")

//start=0, amount to remove=1
let sword = backpack.splice(0,1);
belt.push(sword[0])

//add fur coat
backpack.push("fur coat")
//removes fur coat
backpack.pop()

console.log("Backpack: ", backpack)
console.log("Belt: ", belt)


backpack.push("flint","blanket","knife","toothbrush","cellPhone")

let itemCount = backpack.length;
console.log("Length: ", itemCount)

let backpack2 = backpack.splice(6,3)
console.log("backpack2: ", backpack2)

for(let i = 0; i < backpack.length;i++){
    console.log("Backpack 1: ",backpack[i])
}
for(let i = 0; i < 3;i++){
    console.log("Backpack 2: ",backpack2[i])
}

