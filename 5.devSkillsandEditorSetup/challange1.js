'use strict';

const data = [17,21,23];
const data1 = [12,5,-5,0,4]

const printForecast = function(arr){
    let str='';
    for(let i=0; i<arr.length; i++){
        str = str + ` ${arr[i]}°C in ${i + 1} days ...`;
    }
    console.log('...'+str);
}

printForecast(data);
printForecast(data1);