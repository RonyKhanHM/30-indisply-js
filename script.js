  function sum(){
    event.preventDefault();
    
  let x = document.getElementById("number1").value;
  let y = document.getElementById("number2").value;

  // parseInt(x);
  // parseInt(y);

  let result = parseFloat(x)+parseFloat(y);

  document.getElementById("result").innerHTML = "The result is:"+ result;

  // console.log("The result is:"+result);
  }