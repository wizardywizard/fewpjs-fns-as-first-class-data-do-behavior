/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time){
  const num = parseInt(`${time}`);   
  if (num < 12){
    greet = "Good Morning";
  }else if (num > 17){
    greet = "Good Evening";
  }else{
    greet = "Good Afternoon";
  }
  return greet
}

function displayMessage(string){
  document.getElementById("greeting").innerText = string;
};

