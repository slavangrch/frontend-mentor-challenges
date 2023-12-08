
const date =  document.querySelectorAll('.date input');
const button = document.querySelector('.circle');
const spans = document.querySelectorAll('.calculator span');


function calculateAge() {
    const currentDate = new Date();
    const birthDate = new Date(+date[2].value, +date[1].value-1, +date[0].value);
    const age = new Date(currentDate.getTime() - birthDate.getTime());

    const years = age.getUTCFullYear() - 1970;
    const months = age.getUTCMonth(); 
    const days = age.getUTCDate() - 1; 

    spans[0].textContent = years;
    spans[1].textContent = months;
    spans[2].textContent = days;
}

button.addEventListener('click', calculateAge)

// console.log(+date[2].value);