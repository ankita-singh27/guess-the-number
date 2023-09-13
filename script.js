const submitButton = document.querySelector(".guessSubmit");
const lowOrHi = document.querySelector(".lowOrHi");
const form = document.querySelector(".form");
const score = document.querySelector(".tries");
const wrapperElement=document.querySelector("#wrapper")

const randomNumber = parseInt(Math.random() * 10 + 1);
//console.log(randomNumber);

let count = 0;
submitButton.addEventListener("click", function (e) {
  const userNumber = document.querySelector(".guessField").value;
    e.preventDefault();
  
    if (userNumber>10){
      lowOrHi.textContent ="Please enter a number less than 10";
    }
    else if (userNumber<=0){
      lowOrHi.textContent ="Please enter a number greater than 1";
    }
  else if (randomNumber > userNumber) {
    lowOrHi.innerText = "Try bigger number";
    count++;
    score.innerText = count;
    wrapperElement.style.borderColor ="red";
  } 
  else if (randomNumber == userNumber) {
    lowOrHi.innerText = "Congrats! 🎉";
    score.innerText =  count ;
    wrapperElement.style.borderColor ="green";
  }
   else{
    lowOrHi.innerText = "Try smaller number";
    count++;
    score.innerText =  count;
    wrapperElement.style.borderColor ="red";
  }
  

  form.reset();
});
