const form=document.querySelector('form')
 
form.addEventListener('submit',function(e){
    e.preventDefault()

const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const result=document.querySelector('#result');
if(height===" " || height< 0 || isNaN(height)){
    result.innerHTML=`Plz give a valid  height ${height}`;
}
else if(weight===" " || weight< 0 || isNaN(weight)){
    result.innerHTML=`Plz give a valid  weight ${weight}`;
}
else {
   const BMI=(weight/((height * height)/10000)).toFixed(3);
    result.innerHTML=`${BMI}`;
 const totalresult = document.querySelector("#result-measurement");
 function Sima(){
  
 if(BMI<18.6){
  totalresult.innerHTML=`Sry you are under weight`
 }
 else if(BMI>24.9){
    totalresult.innerHTML=`You are over weight`
 }
else{
    totalresult.innerHTML=`Congrates you are in normal range`
}
    
}
 Sima();
}
});
