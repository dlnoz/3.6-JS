// ------ #TASK1 ------

// let person = {
//     name: "Dilnoza",
//     age: 17,
//     job: "Study",
//     interest: "Learning",
//     hobby: "Watching shorts",
//     number: "+998 99 465 25 02",
//     username: "dlnnsz"
// }

// for(let [key, value] of Object.entries(person)){
//     console.log(`${key}:${value}`);
// }

// cars.sort(function (a, b){
//     return a.price - b.price;
// })
// console.log(cars)



//  ------ #TASK2 ------

// const arr1 = [5, 6, true, null, 8]
// const arr2 = [0, 2, 5, false, 6]
// const sumArr = arr1.concat(arr2)
 
// let sum = 0
// for(let i = 0; i < sumArr.length; i++){
//     if (typeof sumArr[i] === 'number') {
//         sum += sumArr[i]
//     }
// }
// console.log(sumArr)
// console.log("Array sonlari yig'indisi:" , sum)
 


//  ------ #TASK3 ------

// let number = [87, 100, 54, 88, 57, 65, 43]
// let smallNum = Math.min(... number)
// let index = numbers.indexOf(smallNum)
// console.log("Mavjud sonlar:", numbers)
// console.log("Eng kichik son:", smallNum )
// console.log("Eng kichik son indexi:", index)



//  ------ #TASK4 ------

// let num = [4, 23, 34, 12, 25];
// let sum = 0;
 
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
 
// function oddEven(num, sum) {
//   if (num[0] % 2 === 0) {
//     num.unshift(sum);  
//   } 
//   else {
//     num.push(sum);    
//   }
// }
 
// oddEven(num, sum);
// console.log(num);



// ----- #TASK5 ------

// let arr1 = [5, 4, 3, 6, 3, 7, 1]
// let arr2 =  [22, 1, 42, 34, 55, 67, 11, 32]
// let bothArr = arr1.concat(arr2)

// bothArr.sort(function(a, b){`
//     return a - b
// })



//  ------ #TASK6 ------

// let cars = [
// {
//     name:"Lacetti",
//     price: 9000
// },
// {
//     name:"Damas",
//     price: 7000
// },
// {
//     name:"Cobalt",
//     price: 12500
// },
// {
//     name:"Gentra",
//     price: 14000
// },
// {
//     name:"Onix",
//     price: 15000
// }
// ]



//  ------ #TASK7 ------


// let arr = ["Hello", "What's up", "Najot Ta'lim", "Bye"]
// for( let i = 0; i < arr.length; i++ ){
//     if (i === 1 || i === 2) {
//         console.log(arr[i]);}
// }



//  ------ #TASK8 ------

// let word = prompt("Ixtiyoriy so'z/son kiriting...");
 
// function teskari(word) {
//     return word.split('').reverse().join('');
// }
 
// let result = teskari(word);
// console.log(result);
// alert(result);