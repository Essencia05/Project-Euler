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
     output1.innerHTML = "The sum of " + input1.value + " = " + sumP1; //displaying of my sum and output
}


//initialization
const input2 = document.querySelector("#problem2");
const output2 = document.querySelector("#mess2");

//function to solve the second solution
function fibonacci() {

    //alert("Testing");//text if javascript and html button 1 is linked together
    //declare ypour two varables that will be used to calculate
    let totSum = 0;
    let valu1 = 1;
    let valu2 = 2;

    while (valu2 <= input2.value) // while your value is not  equal to the iput variable
     {
       if(valu2 % 2 === 0)
         {
            totSum += valu1;
         }
         //introduce a temp variable because you are going to swup
         let temporary = 0;

        /// swup
        temporary = valu2;
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