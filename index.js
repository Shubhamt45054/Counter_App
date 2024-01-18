
  const countervalue = document.querySelector('#counter');


  const decrement = () => {
    
    let value =  parseInt(countervalue.innerText);

    value=value-1;

    countervalue.innerText = value;
}; 

function increment(){

    let value =  parseInt(countervalue.innerText);
    value=value+1;
    countervalue.innerText = value;
};

const clear = document.querySelector("#clr");
const range = document.querySelectorAll("input");
const counter = document.querySelector("#counter");

function rangeIncrement() {
    if(range[0].value === ""){
      return alert("Give Any Number For Increment!");
    }
    counter.innerText = parseInt(range[0].value) + parseInt(counter.innerText);
    range[0].value = "";
  }
  
  function rangeDecrement() {
    if(range[1].value === ""){
      return alert("Give Any Number For Decrement!");
    }
    counter.innerText = parseInt(counter.innerText) - parseInt(range[1].value);
    range[1].value = "";
  }
  
  clear.onclick = () => counter.innerText;