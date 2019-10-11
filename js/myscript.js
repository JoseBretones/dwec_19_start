//alert("Hello to JS");
let testBooleanObject = new Boolean (true);
console.log(testBooleanObject);
let testStringObject = new String ("text");
console.log(testStringObject);
let testNumberObject = new Number (10);
console.log(testNumberObject);


//Concatenate variables
let name = "Jose";
let surname = "Antonio";
let question = "How are you "+name+surname+"?";
console.log(question);


//To ES6 we can use blacktick to create interpolated strings
let age = 22;
let question1 = `How old is ${name} ${surname}?`;
let answer = "I am "+age+" years old";
console.log(question1);
console.log(answer);


//Concatenate using method string.concat(string)
let question2 = "How are you ".concat(name)+" ".concat(surname)+"?";
console.log(question2);


//Arithmetic operations
//Sum, Res, Multiplication or Division
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let res = operator_a - operator_b;
let multiplication = operator_a * operator_b;
let division = operator_a / operator_b;
console.log(sum);
console.log(res);
console.log(multiplication);
console.log(division);


//Arithmetic operations II
// Exponentiation / Increment / Decrement
let operator_c = 3;
let operator_d = 3;
let expo = operator_c ** operator_d;
let incre = ++ operator_c ;
let decr = -- operator_d;
console.log(expo);
console.log(incre);
console.log(decr);


//Assignment Operators
let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);


//typeof, null & undefinded
let testBoolean = true;
let testNumber = 12;
let testString = "Hello!";
let testBooleanObject1 = new Boolean (true);
let testNull = null;
let testundefined;
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject1));
console.log(typeof(testNull));
console.log(typeof(testundefined));


//Array definition
let first_array = [];
let second_array = new Array (3);
let third_array = new Array (3,5);
let fourth_array = new Array (3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);
fourth_array.push("Spain");
console.log(fourth_array);


//For / For each

for( let i = 0 ; i<=fourth_array.length ; i++){
    console.log("Entramos en la iteracion de " + fourth_array[i]);
}

let j = fourth_array.length;

for(; j>=0 ;j--){
    console.log("Entramos en la iteracion de " + fourth_array[j]); 
}

fourth_array.forEach(function(element) {
    console.log("Fourth iteration "+element);
});