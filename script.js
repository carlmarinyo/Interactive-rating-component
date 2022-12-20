let one = document.getElementById("li-1")
let two = document.getElementById("li-2")
let three = document.getElementById("li-3")
let four= document.getElementById("li-4")
let five= document.getElementById("li-5")
let ratingElements = document.querySelectorAll("li");
let submit = document.getElementById('submit')
let rnum = document.getElementById('rate-num')
let first = document.getElementById('first')
let second = document.getElementById('second')
let secondcontent = document.getElementById('second-two')

function next () {
  first.style.display = 'none'
  second.style.display = 'flex'
  secondcontent.style.display = 'flex'
  }
  
  submit.addEventListener('click', next)
  
  
ratingElements.forEach((rate) => {
  rate.addEventListener('click', () => {
    console.log(rate.innerHTML)
   rnum.innerHTML = rate.innerHTML
  })
}
)

ratingElements.forEach(function(ratingElement) {
  ratingElement.onclick = function() {
    ratingElements.forEach(function(el) {
      el.style.backgroundColor = "";
    });
    this.style.backgroundColor = "yellow";
  }
});

function changeBG() {
    this.style.backgroundColor = 'hsl(25, 97%, 53%)'
    this.style.color = 'white'
} 
one.addEventListener('click', changeBG)
two.addEventListener('click', changeBG)
three.addEventListener('click', changeBG)
four.addEventListener('click', changeBG)
five.addEventListener('click', changeBG)
