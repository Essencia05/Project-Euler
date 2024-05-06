/*int sum=0;  problem 1*/ 
//const button1 = document.querySelector("#btn1");
const input1 = document.querySelector("#problem1");// initializing user input 
const output1 = document.querySelector("#message"); // initializing 



let sumP1=0;

//fuction to solve the first problem


function multiples() { 

   
   //output1.innerHTML = "The answer is: ";//displaying output
     for (let count = 0; count < input1.value; count++) {
        if (count % 3 === 0|| count % 5 === 0) {
             sumP1 += count;
         }
        
    }
     output1.innerHTML = "The sum of " + input1.value + " = " + sumP1;
}

//function to solve the second solution
function fibonacci() {

    alert("Testing");//text if javascript and html button 1 is linked together
}


//function to solve the third solution
function primeFactor() {
   
    alert("Testing");//text if javascript and html button 1 is linked together
}