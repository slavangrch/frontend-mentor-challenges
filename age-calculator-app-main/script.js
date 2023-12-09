const date =  document.querySelectorAll('.date input');
const button = document.querySelector('.circle');
const spans = document.querySelectorAll('.calculator span');
const dateContainer = document.querySelector('.date');
const p = dateContainer.querySelectorAll('p');

const amountOfDaysInMonth = {
    0: 31,
    1: 29,
    2: 31, 
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
}

function calculateAge() {
    if (dateContainer.classList.contains('error')) {
        dateContainer.classList.remove('error');
    }
    const birthDate = checkInputs();
    const currentDate = new Date();
    const age = new Date(currentDate.getTime() - birthDate.getTime());

    const years = age.getUTCFullYear() - 1970;
    const months = age.getUTCMonth(); 
    const days = age.getUTCDate() - 1; 
    incNbr(years, months, days)
}


function checkInputs(){
    const year = +date[2].value;
    let month = +date[1].value-1;
    const day =  +date[0].value;
    if (!day || !month || !year ) {
        dateContainer.classList.add('error');
        p.forEach((item) => {
            item.textContent = 'This field is required';
            item.classList.add('hint')});
    }
    const birthDate = new Date(year, month, day);
    if (month<0 || month>11) {
        dateContainer.classList.add('error');
        p[1].classList.add('hint');
    }

    if (birthDate>new Date() || year>new Date().getFullYear()) {
        dateContainer.classList.add('error');
        p.forEach((item) => {
            item.textContent = 'This date is in the future';
            item.classList.add('hint')});

    }
    for (m in amountOfDaysInMonth) {
        if (month<0 || month>11) {
            if (day<=0 || day>31) {
                // dateContainer.classList.add('error');
                p[0].classList.add('hint'); 
            }
            break;
        }
        if (+m === month) {
            if (day<=0 || day>amountOfDaysInMonth[m]) {
                dateContainer.classList.add('error');
                p[0].classList.add('hint');
            }
        }
    }

    return birthDate;
}

var speed = 25;

function incEltNbr(n, endNbr) {
    elt = spans[n];
    incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() { //Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

function incNbr(years, months, days){
    incEltNbr(0, years);
    incEltNbr(1, months);
    incEltNbr(2, days);
}

button.addEventListener('click', calculateAge);