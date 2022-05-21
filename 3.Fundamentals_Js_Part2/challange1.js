const calcAverage = (a,b,c)=>(a+b+c)/3;

// console.log(calcAverage(3,4,5));

let  scoreDolphins = calcAverage(44,23,71);
let  scoreKoalas = calcAverage(65,54,49);

console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(avgDolphins , avgKoalas){
     if(avgDolphins>= 2* avgKoalas){
         console.log(`Dolphins Wins (${avgDolphins} vs. ${avgKoalas})`);

     }else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas Wins (${avgKoalas} vs. ${avgDolphins})`);
     }else{
         console.log('No Team wins........');
     }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test 2 


scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
checkWinner(scoreDolphins, scoreKoalas); 