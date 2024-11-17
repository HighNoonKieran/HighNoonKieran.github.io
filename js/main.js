//console log test
console.log(`Hello world!`);

//dynamic year
const fYear = document.getElementById("footerY");
const d = new Date(); 
fYear.textContent = d.getFullYear();

const greets = document.getElementById("welcome");
 
if (d.getHours() < 12) //display message according to time of day
    greets.innerHTML = 'Good Morning,',
    greets.style.backgroundColor = 'yellow';
else if (12 < d.getHours() <= 17) 
    greets.innerHTML = 'Good Afternoon,',
greets.style.backgroundColor = 'orange';
else
    greets.innerHTML = 'Good Evening,',
    greets.style.backgroundColor = 'red';

    //add console log for date
    const k = new Date();
    let yy = k.getFullYear();
    let dd = k.getDate();
    let mm = k.getMonth();
    console.log(`${mm} ${dd}, ${yy}, mm, dd, yyyy.`);


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

