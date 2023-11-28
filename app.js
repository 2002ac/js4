
//4-cu task
// 4cu taskin 1ci hissesi
function bir(nom) {

while (nom !== 1) {
if (nom % 2 === 0) {
nom = nom / 2;
} 
else {
nom = nom* 3 + 1;
}
}
return nom;
}
  console.log(bir(3));

// 4 cu taskin 2 ci tapsirigi

function iki(arr) {

let min = arr[0];
let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] <min) {
    min = arr[i];
    }
    if (arr[i] >max) {
    max = arr[i];
    }

    }
  
  console.log("en balaca eded: " + min);
  console.log("en boyuk eded: " + max);
  console.log("basqa eded: " + (max - min));
  }
  iki([3, 5, 1, 9, 4]); 

  // 4 cu taskin 3 cu hissesi 

  function uc(arr, num) {
  if (arr.includes(num)) {
  console.log(num + "var");
  } 
  else {
  console.log(num + "yoxdur");
  }

  }
  
  uc([3, 5, 1, 9, 4], 5); 