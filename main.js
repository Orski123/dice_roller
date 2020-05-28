let dice_roll= document.querySelector('#roll-button');
let num_rolls= document.querySelector('#total');
let resetButton=document.querySelector('#reset-button');
let showRoll=document.querySelector('#show-all-rolls-button');
let input_name = document.getElementById('#name');
let ol_list = document.getElementById('#dice');
const dieRolls=[]
let diceArray
let random_num;

 

dice_roll.addEventListener("click",function()
 {
   input_name = document.getElementById("name").value;
   
   for (let i=0; i<input_name ; i++ ){
  random_num = (Math.floor(Math.random()*6)+1);
    diceArray = dieRolls.push (random_num);
     // console.log (random_num)

 let totalRolls = Number(num_rolls.innerHTML) + random_num ++;;
 num_rolls.innerHTML = totalRolls;

 }
 })

showRoll.addEventListener ("click", function()
{
  console.log (dieRolls);
  console.log(random_num)
  

  let i=0
 while (i <dieRolls.length){
  dice.innerHTML +=  '<li>' + dieRolls[i] + '</li>';
  i++
'<br>';
  
  }
   

 

//reset button
resetButton.addEventListener ("click", function()
{
  //console.log("+ button clicked");
 
    document.getElementById("total").innerHTML = "";
    document.getElementById("name").value="";
    document.getElementById("dice").innerHTML="";
 
 
}) })
