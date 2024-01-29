const birthday = new Date("2004-06-15");
const today = new Date(); 

let age = today.getFullYear() - birthday.getFullYear(); 
const m = today.getMonth() - birthday.getMonth();

if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--; 
}

document.getElementById("age").textContent = age;