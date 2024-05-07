/*initialisation for input variuables*/ 
const input1 = document.querySelector("#problem1");// initializing user input 
const output1 = document.querySelector("#message"); // initializing 


//fuction to solve the first problem
function multiples() { 
    let sumP1=0;
   //output1.innerHTML = "The answer is: ";//displaying output
     for (let count = 0; count < input1.value; count++) { //used the input from user as my countvalue
        if (count % 3 === 0 || count % 5 === 0) { // 
             sumP1 += count;
         }
        
    }
     output1.innerHTML = "The sum of 3 or 5 less than " + input1.value + " is " + sumP1; //displaying of my sum and output
}


//initialization
const input2 = document.querySelector("#problem2");
const output2 = document.querySelector("#mess2");

function fibonacci() {
    let totSum = 0;
    let valu1 = 1;
    let valu2 = 2;

    const maxVal = parseInt(input2.value); // Convert input value to a number

    while (valu2 <= maxVal) {
        if (valu2 % 2 === 0) {
            totSum += valu2; // Add the even-valued term
        }

        let temp = valu2; // Use temp to swap values
        valu2 += valu1;
        valu1 = temp;
    }

    output2.innerHTML = "The sum of the even-valued terms of " + input2.value + " is: " + totSum;
}



//initialization for the third problem
const input3 = document.querySelector("#problem3");
const output3 = document.querySelector("#message3");
//function to solve the third solution
function primeFactor() {
   
    alert("Testing");//text if javascript and html button 1 is linked together
}