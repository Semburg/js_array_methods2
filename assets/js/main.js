// *  1_1  Array sort()
console.log("---1_1  Array sort()---")

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
  ];
console.log(languages)

sortierung = (x) => console.log(x.sort())
sortierung(languages)

// *  1_2  Array reverse()
console.log("---1_2  Array reverse()---")
sortierungReverse = (x) => console.log(x.sort().reverse())
sortierungReverse(languages)

// *  2_1  reverse Name, Words
console.log("---2_1  reverse Words---")

string_reverse = (str) => str.split("").reverse().join("")
console.log(string_reverse("Simon"))
console.log(string_reverse("Hannah"))
console.log(string_reverse("Sergio"))
console.log(string_reverse("Rentner"))
console.log(string_reverse("Ella mag alle Bohnen"))
console.log(string_reverse("han nesaH has ennaH"))

// *  2_2  sort() bigger numbers
console.log("---2_2  sort()---")

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];
sortierung3 = (a,b) => a-b;
console.log(numArray2.sort(sortierung3))
//*  Parameter of sort() is as function possible:
console.log(numArray2.sort(sortierung3_Desc = (a,b) => b-a))

// *  1_13  Arrays join()
console.log("---1_13  join()---")
let meinText1 = ["Hello", "World"]
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"]
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"]

let join1 = meinText1.join(); //! Komma ohne Leerzeichen!
console.log(join1)
let join2 = meinText1.join("");
console.log(join2)
let join3 = meinText1.join(" ");
console.log(join3)
let join4 = meinText1.join("+");
console.log(join4)
let join5 = meinText2.join(", ");
console.log(join5)

// *  1_1  map, forEach
console.log("---1_1  forEach()---")
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
 ]
getraenke.forEach(elem1 => console.log(elem1))
getraenke.forEach(showInHtml)
 function showInHtml(elem) {
    document.getElementById("forEachShow").innerHTML += elem + "<br>";
    return document.getElementById("forEachShow").innerHTML
 }
// showInHtml = (x) => document.getElementById("forEachShow").innerHTML += x + "<br>";

 // *  1_2  map
console.log("---1_2  map()---")
let getraenk = getraenke.map(drink => console.log(drink.toUpperCase()))
let getraenk2 = getraenke.map(drink => drink.toUpperCase())
console.log(getraenk2)

// *  1_3  map ++
console.log("---1_3  map()---")
let arrayOfMine = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
  ];

console.log(arrayOfMine)

rechnen = (elem) => elem*2; 
let newArrayOfMine = arrayOfMine.map(rechnen)
console.log(newArrayOfMine)
console.log(newArrayOfMine.sort(anyFunctionForSort = (a,b) => a-b))
  

//* 1.4 Celsius map()
console.log("---1_4  map()---")
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
farhToCelsius = (fElem) => Number((fElem-32)/1.8).toFixed(2);
let celsius = fahrenheit.map(farhToCelsius)
console.log(celsius)

//* 1.5 forEach() + if modulp
console.log("---1_5  forEach().deep---")

//* arrayOfMine  from above

function weirdModulo3(elem, index, arr) {
    if (elem%3 == 0){
        arr[index] = elem+100;
    } else {
        arr[index] = elem;
    }
}

let weirdNewArray = arrayOfMine.forEach(weirdModulo3)


console.log(arrayOfMine.forEach(weirdModulo3))
console.log(arrayOfMine.forEach(weirdModulo3));
console.log(weirdNewArray);
//! Thhougts about 3 lines bottom... Difference between forEach() and map()
//!  forEach() returns "undefined" by default. Possible is, just to create new array, or
//!  consol.log each element.  See below
//?  console.log
arrayOfMine.forEach(elem1 => console.log(elem1%3==0? elem1+100: elem1));

//? new array with forEach(), which is easier to make with map()
let newArrayFromForEach = new Array();
arrayOfMine.forEach(elem1 => newArrayFromForEach.push(elem1%3==0? elem1+100: elem1));
console.log(newArrayFromForEach)

console.log("testEND")


