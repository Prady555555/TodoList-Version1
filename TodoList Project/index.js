var btn = document.querySelector("button");
btn.addEventListener('click',btnFunction);

var array =[];


function btnFunction(){
  var input = document.querySelector('input');
  var name = input.value;
   array.push(name);
  console.log(array);
  input.value= "";
 
}