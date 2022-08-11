//iteration 1

const hacker1 = "Miguel";
const hacker2 = "Miguelito";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//iteration 2

if (hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length<hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

//iteration 3

  //3.1
driverUpper = "";

for (let i=0; i<hacker1.length; i++){
  driverUpper += `${hacker1[i]} `;
}
console.log(driverUpper.slice(0, driverUpper.length-1));

  //3.2
navReverse = "";

for (let i=hacker2.length-1; i>=0; i--){
  navReverse += hacker2[i];
}
console.log(navReverse);

  //3.3
let isEqual = false;
let driverComesFirst = false;
let menorNome;

if (hacker1.length>hacker2.length){
  menorNome = hacker2.length;
} else if (hacker1.length<hacker2.length || hacker1.length===hacker2.length){
  menorNome = hacker1.length;
}

for (let i=0; i<menorNome; i++){       //usei hacker2.length pq é a palavra menor as per iteration 1
  if (hacker1[i] === hacker2[i]){
    isEqual = true;
  } else if(hacker1[i] < hacker2[i]){
    driverComesFirst = true;
    isEqual = false;
    break;
  } else {
    isEqual = false;
    break;
  }
} 

if (isEqual && hacker1.length===hacker2.length){
  console.log("What?! You both have the same name?");
} else if (isEqual && hacker1.length!==hacker2.length){
  
  if (hacker1.length>hacker2.length){
    console.log("Yo, the navigator goes first definitely.");
  } else if (hacker1.length<hacker2.length){
    console.log("The driver's name goes first.");
  }
  
} else if (driverComesFirst){
  console.log("The driver's name goes first.");
} else if (!driverComesFirst){
  console.log("Yo, the navigator goes first definitely.");
}
  