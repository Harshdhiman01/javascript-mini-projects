// let a = 10; // block scoped variables
// const b = 10; // block scoped variables
// var c = 30; // function scoped variables

// console.log(a , b , c);

// var q = 10; //Number
// var w = "Name"; //String 
// var e = true;  // Boolean true/false

// var fruits = ['Apple' , 'Mango' , 'Banana'];

// var person = {
//     name : "Test Person",
//     age :20 ,
//     Address : "Chandigarh",
//     isStudent : true,
// }

// console.log(fruits[0] , fruits[1] , fruits[2]);
// console.log(person.name , person.age , person.isStudent);


// var add = 12 + 9; // airthematic || + , - , * , / 
// var yes = 10 === 10; // comparison || != , == , === , !==
 

// // var qq = "10";
// // var rr = 10;
// // Will get a true here in case of "==" || console.log(qq == rr);
// // but will get a false in case of "===" || console.log(qq === rr);

// console.log("Logical AND");

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false 
// console.log(false && false); // false


// console.log("Logical OR");

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true 
// console.log(false || false); // false

// var u = false;

// if (u) {
//     console.log("U is true");   
// }else{
//     console.log("U is not true");   
// }


// var ww = 10 ;
// var tt = 10 ;
// var ee = 20;

// if (ee == ww) {
//     console.log("ee == ww true");
// }else if(ee == tt){
//     console.log("ee == tt true");
// }else{
//     console.log("ee is not equals to tt and ww");
// }



// var fruits = ['Apple' , 'Mango' , 'Banana'];
// for (let index = 0; index < fruits.length; index++) {
//     var fruit = fruits[index];
//     console.log(index , fruit);
// }


// function loggerFunction(word) {
//     console.log(word);
// }

// loggerFunction("Delta School");

// function addition(a , b) {
//     return a + b;
// }

// var c = addition('2' , '3');
// console.log(c);

// var c = 10;

function testFunction() {
    
    if (true) {
        let a = 10; // block scoped variables
        const b = 10; // block scoped variables
        var c = 30; // function scoped variables


        // console.log(c);
        // console.log(b);
        // console.log(a);
    }

    console.log(c);
    console.log(b);
    console.log(a);

}

console.log(c);

testFunction();
