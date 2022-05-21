var markweight = 78;
var markheight = 1.69;

var markBMI = markweight /(markheight*markheight);
var johnweight = 92;
var johnheight = 1.95;

var johnBMI = johnweight /(johnheight*johnheight);

console.log(johnBMI,markBMI)

// var markHigherBmi = markBMI < johnBMI;
// console.log(markHigherBmi);
if(johnBMI>markBMI){
    console.log('John is more BMI Then Mark');
}else{
    console.log('Mark is more BMI Then Jhon');
    
}