// var a=10;
// let b=20;
// const c=30;
// console.log("Value are :"+a+","+b+","+c)

// if(true){
//     var a=1000;
//     let b=2000;
//     const c=3000;
//     console.log("Values inside the block scope are :"+a+","+b+","+c)
// }
// console.log("Values outside the block are :"+a+","+b+","+c)




var a = 10;

let b= 20;

const c =30;

console.log("Values are :" + a+","+ b+","+ c);

//success case

if(true){

    var a=1000;

    let b=2000;

    const c=3000;

    console.log("Values inside the block are :"+ a+","+b+","+c);

} //let and const ends here  whereas var still accessible outside

console.log("Values outside the block are :"+ a+","+b+","+c);