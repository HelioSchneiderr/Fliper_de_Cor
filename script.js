const colors = ["green", `Red`, `Black`, `Pink`, `Blue`];
const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`)

btn.addEventListener(`click`, ()=>{
    
    randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 
    
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}