





//daynamic row adding system 


 function addRow(){
     let ADDROW = Number(document.getElementById('addrow').value);
      let NEWROW = document.getElementById('myDIV');
      let DISPLAY = document.getElementById("ROW");
     for(i = 0 ; i < ADDROW; i++){
        NEWROW.appendChild(DISPLAY);
        
        console.log(DISPLAY);
     }
      
     


 }

 addRow();
 //first value of product
 function getValueFirstRow(){
     let RATE = document.getElementById('FirstProductrate');
     let  calculation1= document.getElementById("phones").value;
     RATE.innerText = calculation1 ;
 }

 getValueFirstRow();

 function calculateFirstRow(){
     let  calculation1= document.getElementById("phones").value;
     let TOTAL = document.getElementById('FirstProducttotal');
     let Quantity = Number(document.getElementById('firstquantity').value);
     TOTAL.innerHTML =  parseInt(calculation1)*parseInt(Quantity);
     add();
 }


 function display(){
     let DISPLAY = document.getElementById("ROW");
     DISPLAY.display="block";





 }


 //second row product 

//  function getValueSecondRow(){
//      let RATE2 = document.getElementById('SecondProductrate');
//      let  calculation2= document.getElementById("chips").value;
//      RATE2.innerText = calculation2 ;
//  }

// getValueSecondRow();

// function calculateSecondRow(){
//     let  calculation2= document.getElementById("chips").value;
//     let TOTAL2 = document.getElementById('SecondProducttotal');
//     let Quantity2 = Number(document.getElementById('secondquantity').value);
//     TOTAL2.innerHTML =  parseInt(calculation2)*parseInt(Quantity2);
//     add();
// }


// //third product 


// function getValueThirdRow(){
//     let RATE3 = document.getElementById('ThirdProductrate');
//     let  calculation3= document.getElementById("coldrinks").value;
//     RATE3.innerText = calculation3;
// }

// getValueThirdRow();

// function calculateThirdRow(){
//     let  calculation3= document.getElementById("coldrinks").value;
//     let TOTAL3 = document.getElementById('ThirdProducttotal');
//     let Quantity3 = Number(document.getElementById('thirdquantity').value);
//     TOTAL3.innerHTML =  parseInt(calculation3)*parseInt(Quantity3);
//     add();
// }


 function add(){
     var sum = 0;
     let TOTAL = document.getElementById('FirstProducttotal').innerHTML;
    //  let TOTAL2 = document.getElementById('SecondProducttotal').innerHTML;
    //  let TOTAL3 = document.getElementById('ThirdProducttotal').innerHTML;

    sum = sum + nullCheck(TOTAL);
    //  sum = sum + nullCheck(TOTAL3);
    //  sum = sum + nullCheck(TOTAL2);

     let producttoal = document.getElementById('allresult');
     producttoal.innerHTML = sum;
 }

 function nullCheck(number){
     if(number === null || number === NaN || number === "")
         return 0;
     else
        return parseInt(number);
 }


