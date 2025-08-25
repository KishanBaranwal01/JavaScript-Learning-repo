// Here we learn and make practices about map filter and reduce methods in js .

/* Map() => Map methods are used to transform the array elements means when we have to perform some operations on each and every elements of array 
            then we use map method .
*/

let arr = [1,2,6,7,9];


// function double(x){
//     return x * 2 ;
// }
// function triple(x){
//     return x * 3 ;
// }
function isOdd(x){
    return x % 2 ;
}
function isEven(x){
    return x % 2 == 0 ;
}


// old method to include function is method 
let result1 = arr.map(function double(x){ 
    return x * 2 ;
});

// arrow function include in map method 
let result2 = arr.map((x)=> x * 3 );

let result3 = arr.map(isOdd);
let result4 = arr.map(isEven);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


//  This is the normal or old methods of creating  function we can directly include the function in map method.

/* Now lets discuss about the filter methods -

  filter methods are used to make filter the array elements . it is used for the filteration .

*/
  console.log("filter methods ");
  
  let output1 = arr.filter((x)=>x>3) // finds greater than 3 
  console.log(output1);
  
  let output2 = arr.filter((x)=>x%2)
  console.log(output2);

 
/*  Now lets learn about reduce() method , as the name suggest the reduce method doesn't reduce anything . it is used to
    iterate the entire array element and conclude some certain terms like max , sum and many more operations on the
    numbers.
 */
   
    let array =  [1,3,5,7,0];

    // finding max ele in array in normal way -
      let max = 0 ;
    for (let index = 0; index < array.length; index++) {
      if(array[index]>max){
        max = array[index] ;
      }
      
    }
    console.log(`The max value in array is - ${max}`);
    
    // Now lets calculate the max using reduce() 

    let answer = array.reduce((acc,curr)=>{  // acc act as like max variable as like above code and curr is act like as current value which is array[index]
        if(curr>acc){
          acc = curr
        }
        return acc
    },0)
    console.log(`The maximum value is ${answer}`);
    
    // --------------------------------------------------------------------------------------------------------------
    // Now lets try to real time example 

    const username = [
       {firstname : "Ram" , Lastname:"Sing" ,Age:35 },
       {firstname : "Shyam" , Lastname:"Dubey" ,Age:30 },
       {firstname : "Sashi" , Lastname:"Mishra" ,Age:50 },
       {firstname : "shree" , Lastname:"pathak" ,Age:33 },
       {firstname : "jhon" , Lastname:"Doe" ,Age:35 }
    ]
  //  find the first and last name of all elements 

    let firstOutput = username.map((x)=>x.firstname)
    console.log(firstOutput);
    // prints [ 'Ram', 'Shyam', 'Sashi', 'shree', 'jhon' ]

    // find the full name of each ele 
    let fullOutput = username.map((x)=>x.firstname +" "+ x.Lastname)
    console.log(fullOutput);
/* print as like - 
[
  'Ram Sing',
  'Shyam Dubey',
  'Sashi Mishra',
  'shree pathak',
  'jhon Doe'
]
*/

/* Q- Find the first name of array element whooese age is 35 */

let Answer = username.filter((x)=>x.Age>=30 & x.Age<50).map((x)=>x.firstname);

console.log(Answer);

// find the firstname using reduce method whoose age is greater than 30 

let firstNameG = username.reduce((acc,curr)=>{
    if(!acc & curr.Age>30){
      return curr.firstname
      
    }
    return acc ;  
},null)

// [ 'Ram', 'Shyam', 'shree', 'jhon' ] this is the output 
