//dynamic year
const fYear = document.getElementById("footerY");
const d = new Date(); 
fYear.textContent = d.getFullYear();

const greets = document.getElementById("welcome");
 
if (d.getHours() < 12) //dispaly message according to time of day
    greets.innerHTML = 'Good Morning,';
else if (12 < d.getHours() <= 17) 
    greets.innerHTML = 'Good Afternoon,';
else
    greets.innerHTML = 'Good Evening,';

//adds a button that displays an alert
    const btn = document.getElementById("btn-alert");
btn.addEventListener("click", () => {
    alert ('Please do not do that again!')
});
btn.addEventListener("mouseout", function(){
    btn.textContent = "Don't Click Me"
})
btn.addEventListener("mouseover", function(){
    this.textContent = "Wait, no. Stay away from me!"
})

//for loop ;( 
for (let i = 1; i <= 12; i++) {
    const li = document.createElement("li");
   if (i % 2 === 0) {
      li.textContent = "Even";
    }
    else {
      li.textContent = "Odd";
    }
    document.getElementById(`loop`).appendChild(li);
  }

