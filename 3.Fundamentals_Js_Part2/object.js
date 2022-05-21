
// const jonsArray = [
//     'Jonas', 
//     'Schmedtmann',
//     2022-2000,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]



// const jons = {
//     firstName: 'Jonas', 
//     lastName:'Schmedtmann',
//     age:2022-2000,
//     job:'teacher',
//     friends:['Michael', 'Peter', 'Steven']
// };

// console.log(jons.firstName);
// console.log(jons['firstName']);

// const namekey = 'Name';
// console.log(jons['first'+namekey]);

// const inteestedIn = prompt('What do you want to know about Jonas? Choose Between firstName , lastName, age, job and Friends');

// // console.log(jons[inteestedIn]);

// if(jons[inteestedIn]){
//     console.log(jons[inteestedIn]);
// }else{
//     console.log('Wrong Request!  Choose Between firstName , lastName, age, job and Friends')
// }

// jons.location = 'Protugal';
// jons['twitter']= '@jonaschmedtman';

// console.log(jons); 

// // console.log(jons.friends[0]);

// console.log(`${jons.firstName} has ${jons.friends.length}, and his best friend is called ${jons.friends[0]}`);





const jons = {
    firstName: 'Jonas', 
    lastName:'Schmedtmann',
    birthYear:2000,
    job:'teacher',
    friends:['Michael', 'Peter', 'Steven'],
    hasDriversLicense:false,

    // calcAge: function (birthYear){
    //     return 2022-birthYear;
    // }
    
    calcAge: function (){
        return 2022-this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' } driver's license.`;
    }

    
    
};

console.log(jons.getSummary());
// console.log(jons.calcAge());


// console.log(jons['calcAge'](2000));

// console.log(jons.calcAge(jons.age));
// console.log(jons['calcAge'](jons.age));


 


