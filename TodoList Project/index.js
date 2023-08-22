var btn = document.querySelector("button");
btn.addEventListener('click',btnFunction);

var array =[];


function btnFunction(){
  var input = document.querySelector('input');
  var name = input.value;
   array.push(name);
  console.log(array);
  // this is the simple code for the placeholder retrive its automatically in the input box
  input.value= "";
 
}
