function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i == 0) return false;
    return num > 1;
  }
  let chakePrime =isPrime(5);
  console.log(chakePrime);


//   দুবলিকেট গুলা না নিতে । 
// array er vitir theke 
const arr = ['abul', 'khabul', 'jabul', 'dabul', 'abul', 'khabul', 'jabul', 'cabul' ];
function filterDublicet(arr) {
    let aladaName =[];
    for(const names of arr){
        if (aladaName.indexOf(names) == -1) {
            aladaName.push(names);
        }
    }
    return aladaName;
}
const aladaKoro = filterDublicet(arr);
console.log(aladaKoro);


// কোন string কে উলটা দিক করতে 

const myName = "Eshak Khan";
function nameRevers(name) {
    let reversName = " ";
    for(const letter of name){
        reversName = letter + reversName;
    }
    return reversName;
}
const nameReve = nameRevers(myName);
console.log(nameReve);

// মান গুন করে যোগ করা 

const alu = 20;
const piyaj = 42;
const kacaMorich = 60;
const kacaTorkari = 80;

function motDam(man1, man2, man3, man4) {

    let motTaka = man1 + man2 + man3 + man4;
    return motTaka;
}
const damdoro = motDam(alu, piyaj, kacaMorich, kacaTorkari);
console.log(damdoro);

// sob kisur dam with quantitiy 

function allPrice(cal, dal, torkari, dim, pepe) {
    const calPrice = 55;
    const dalPrice = 55;
    const torkariPrice = 38;
    const dimPrice = 38;
    const pepePrice = 38;
    const calMot = calPrice * cal;
    const dalMot = dalPrice * dal;
    const torkariMot = torkariPrice * torkari;
    const dimMot = dimPrice * dim;
    const pepeMot = pepePrice * pepe;
    let motTaka = calMot + dalMot + torkariMot + dimMot + pepeMot;
    return motTaka;
}
const cal = 2;
const dal = 4;
const torkari = 6;
const dim = 2;
const pepe = 1;
const input = allPrice(cal, dal, torkari, dim, pepe);
console.log(input);