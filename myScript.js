//QUESTION ONE
// this function accepts two strings and convert the first characters to Upper String
function toUpperCase (fstr, scdstr){
// get the entered strings from the input field
fstr = document.getElementById("fst").value;
scdstr = document.getElementById("sst").value;
var display = "Strings Entered:".concat(" ",fstr.concat(" ", scdstr)); 

// display the entered strings on the paragraph tag with id "entstr"
document.getElementById("entv").innerHTML = display;

// get the first characters
var fs = fstr.charAt(0);
var ss = scdstr.charAt(0);

// convert the characters to Upper Case
var fsUpper = fs.toUpperCase();
var ssUpper = ss.toUpperCase();

// concertenate the converted Upper Case characters to the rest of the strings 
var split1 = fstr.substr(1);
var split2 = scdstr.substr(1);

// display te strings to the paragraph element wit id "constr"
var result = fsUpper + split1 + " " + ssUpper + split2;
document.getElementById("consv").innerHTML ="First Character Changed To Upper Case:" + " " + result; 

}


//QUESTION TWO
// this Function accepts arguement and returns the type
const dataType = (fArg) =>{

// get the tpe of the value
var tOf = typeof(fArg);

//return the type on console
return tOf;
}
console.log("QUESTION 2:", dataType("5"));


// QUESTION THREE
// This function calculates the Area of a Triangle
const triangle = (height, width) =>{
// Get the height and width from the input field    
height = document.getElementById("height").value;
width = document.getElementById("width").value;

// Find the area
var area = 1 / 2 * (height * width);

// display the area oon the paragraph with id "area"
document.getElementById("Area").innerHTML = "Area =" + " " + area;
}

// QUESTION FOUR
// this Fuction calculates the perimeter and Area of a rectangle
const rectangle = (length, width) =>{
// get the length and width of rectangle
length = document.getElementById("trl").value;    
width = document.getElementById("trw").value;

// Calculate the Perimeter and Area 
var peri = (2 *length) + (2 * width);
var area = length * width;

// Display Perimeter and Area on the paragraph with id "trl" and "trw"
document.getElementById("ttp").innerHTML = "Perimeter =" + " " + peri;
document.getElementById("tta").innerHTML =  "Area =" + " " + area;
}

//QUESTION FIVE
//This Function Reverse a Number
const reverseNumber = (num) =>{

//get the entered number from user
num = document.getElementById("rvs").value;

// convert num to String
num = num + "";

// Split the sting "num" into an array using the "split ()" Function
// Reverse the num array using the "reverse" function
// Join the element of the array back to string using the "join ()" function
document.getElementById("rnum").innerHTML =
"Reversed Number is:" + " " + num.split("").reverse().join("");

}

// QUESTION SIX
// This function returns the number of vowels in a string
const VowelSounds = (vowel) =>{
// get the strings from the user
vowel = document.getElementById("vowel").value;

// find vowels in the string
const count = vowel.match(/[aeiou]/gi).length; 

// display the result
document.getElementById("vowelsnd").innerHTML =
"The number of vowel sounds is:" + " " + count;
}


//QUESTION SEVEN
// this function checks if a number is prime number
const PrimeNumber =  (num) =>{
var isPrime = true;

// get the number from user
num = document.getElementById("prime").value;

//Check if number is equal to 1
if (num == 1) {
    document.getElementById("primnum").innerHTML = "1 is neither a prime nor composite number";
}

// Check if number is greater than 1
else if (num > 1) {

    // looping through 2 to number -1
    for (let i = 2; i < num ; i++){
        if (num % i == 0) {
            isPrime = false;
            break;
        }     
    }
    if (isPrime) {
        document.getElementById("primnum").innerHTML = num + " " + "is a prime number";
    }else{
        document.getElementById("primnum").innerHTML = num + " " + "is not a prime number";
    }
}

//check if the number is less than one
else{
    document.getElementById("primnum").innerHTML = num + " " + "is not a prime number";
}

}

//QUESTION EIGHT
// this function checks a number if the number is perfect
const perfectNumber = (num) =>{
    num = document.getElementById("perf").value;
    var tem = 0;
    for ( var i = 1; i <= num/2; i++){
       if (num % i == 0) {
           tem += i;
       }
    } if (tem == num && tem != 0) {
        document.getElementById("perfect").innerHTML = num + " " + "is a perfect number";
    } else{
        document.getElementById("perfect").innerHTML = num + " " + "is not a perfect number";
    }
}


// QUESTION NINE
// This function checks if a passed string is palindrome or not
// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
    str_entry = document.getElementById("palind").value;
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
           document.getElementById("pal").innerHTML = "Nothing found!";
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                document.getElementById("pal").innerHTML =str_entry + " " + " is a palindrome.";
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                document.getElementById("pal").innerHTML =str_entry + " " + " is not a palindrome.";
                return false;
            }
        }
        document.getElementById("pal").innerHTML =str_entry + " " + " is a palindrome.";
        return true;
    }
    

    // QUESTION TEN
    //JavaScript function that generates all combination of a string
    //Write a JavaScript function that generates all combinations of a string.
        function substrings(str1)
        {
        var array1 = [];
        for (var x = 0, y=1; x < str1.length; x++,y++) 
        {
        array1[x]=str1.substring(x, y);
        }
        var combi = [];
        var temp= "";
        var slent = Math.pow(2, array1.length);

        for (var i = 0; i < slent ; i++)
        {
        temp= "";
        for (var j=0;j<array1.length;j++) {
            if ((i & Math.pow(2,j))){ 
                temp += array1[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
        }
        console.log("Question 10:" + combi.join("\n"));
        }

        substrings("dog");

        // Question 11
        // This function finds the longest word within a string
        function find_longest_word(str)
        {
            // get the string from the user
            str = document.getElementById("lstr").value;
            var array1 = str.match(/\w[a-z]{0,}/gi);
            var result = array1[0];

            for(var x = 1 ; x < array1.length ; x++)
            {
                if(result.length < array1[x].length)
                {
                    result = array1[x];
                } 
            }
            document.getElementById("lwpal").innerHTML = "The Longest Word is:".concat(" ", result);
        }

        // Question Thirteen
        //this program extract a value at a given index from an object
        const pull_at_Index = (arr, pullArr) => {
        let removed = [];
        let pulled = arr
        .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
        .filter((v, i) => !pullArr.includes(i));
        arr.length = 0;
        pulled.forEach(v => arr.push(v));
        return removed;
        };
        let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
        console.log("Question 13:" + pull_at_Index(arra1, [1, 3]));
        let arra2 =  [1, 2, 3, 4, 5, 6, 7];
        console.log("Question 13:" + pull_at_Index(arra2, [4]));
        

// Question Fifteen
// this program converts length of a given sting in bytes
const byte_Size = str => new Blob([str]).size;
console.log("Question 15:" + byte_Size('123456'));  
console.log("Question 15:" + byte_Size('Hello World'));  
console.log("Question 15:" + byte_Size('Ã¢')); 


//Question Sixteen
// This program measures the time taken by a function to execute
const time_taken = callback => {
    const result = callback();
    return result;
  };
  console.log( "Quwstion 16:" + "Time taken: " + time_taken(() => Math.pow(2, 10))+" ms"); 
  console.log( "Quwstion 16:" + "Time taken: " + time_taken(() => Math.sqrt(225))+" ms");
  console.log( "Quwstion 16:" + "Time taken: " + time_taken(() => Math.sqrt((5 * 5) + (6 * 6)))+" ms");
  

  // Question Eighteen
  //This program performs a deep comparison between two values and determine if they are equivalent.
const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
  };
  
  console.log("Question 18:" + equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));
  
  // Question Nineteen
  // This program dtect weather a website is opened in a mobile device, desktop or laptop
  const deviceTetect = () =>{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    var element = document.getElementById('text');
    if (isMobile) {
          element.innerHTML = "You are using Mobile";
    } else {
        element.innerHTML = "You are using Desktop/Laptop";
    }
  }
  
  // Question Twenty
  // Write a Javascript program to hash a given input string into a whole number.
const sdbm = str => {
    let arr = str.split('');
    return arr.reduce(
      (hashCode, currentVal) =>
        (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
      0
    );
  };
  
  console.log("Question 20:" + sdbm('name'));
  
