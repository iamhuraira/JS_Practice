

// function logger(){
//     console.log('My Name is Huraira');
// }
//  // Calling / running / invoking Function 
// logger();
// logger();
// logger();
// logger();
// logger();


//===============   Function =================



// function  furitProcesser( apples , oranges ){
//     // console.log(apples, oranges);
//      const juice = `Juice With ${apples} apples and ${oranges} oranges.` ;
//      return juice;
// }

// const appleJuice =furitProcesser(5,0);
// console.log(appleJuice); 

// // console.log(furitProcesser(5,0));


// const appleOrangeJuice = furitProcesser(2,4);

// console.log(appleOrangeJuice); 


//=============== Function Declaration===============
//  function calcAge1(birthYear){
//      return  2022 - birthYear;
//     }
    
//     const age1 =calcAge1(2000);
    
//     // console.log(age1); 
    
 //=============== Function Expression ===============
 // const calcAge2 =   function (birthYear){
     //         return  2022 - birthYear;
     //  }
     
     //  const age2 = calcAge2(2000);
     
     // console.log(age1,age2)
     
     
//===============Arrow  Function ===============

// const calcAge3 = birthYear => 2022-birthYear;
// const age3 = calcAge3(2000);
// console.log(age3);


// const yearUntilRetirement = birthYear=> {
    //     const age = 2022-birthYear;
//     const retirement = 65-age;
//     return retirement;
// }

// console.log(yearUntilRetirement(2000));

// const yearUntilRetirement1 = (birthYear, firstName)=> {
    //     const age = 2022-birthYear;
    //     const retirement = 65-age;
    //     return `${firstName} retires in ${retirement} Years` ;
    // }
    
    // console.log(yearUntilRetirement1(2000, 'Huraira'));

//========= Function Calling Other Function ==========

// function cutFruitPieces (fruit){
    //     return fruit*4;
    // }
    // function  furitProcesser( apples , oranges ){
        
        //     const applePieces = cutFruitPieces(apples);
//     const orangesPieces = cutFruitPieces(oranges);
//      const juice = `Juice With ${applePieces} apples and ${orangesPieces} oranges.` ;
//      return juice;
// }   

// console.log(furitProcesser(2,3));


//========= Normal  Function ==========

// const calcAge= function(birthYear){
//     return 2022-birthYear
// }

// const  yearUntilRetirement1 = function (birthYear, firstName){
//         const age = calcAge(birthYear);
//         const retirement = 65-age;
//         if(retirement>0){

//             return retirement;
//         }else{
//             return -1; 
//         }


//         // return `${firstName} retires in ${retirement} Years` ;

//     }
    
//     console.log(yearUntilRetirement1(1900,'Huraira'));











