const myRange = document.getElementById('myRange');
const reviews = document.querySelector('.reviews');
const price = document.getElementById('price');
const tag = document.querySelector('.tag');
const circle = tag.querySelector('.circle');

function toggleTagHandler() {
    const regex = /\$(.*?)\./;
    const per = document.querySelector('.per');
    tag.classList.toggle('active');
    circle.classList.toggle('on');
    const result = isActive();
    if (result) {
        price.textContent = `$${+price.textContent.match(regex)[1]*12}.00`;
        per.textContent = '/year';
    } else if (!result){
        price.textContent = `$${+price.textContent.match(regex)[1]/12}.00`;
        per.textContent = '/month';
    }
}

function isActive() {
    return tag.classList.contains('active') && circle.classList.contains('on');
}


tag.addEventListener('click', toggleTagHandler)

myRange.addEventListener('input', (event) => {
    const tempSliderValue = event.target.value;
    let curRev;
    let curPrice;
    // const progress = (tempSliderValue / myRange.max) * 100;
    myRange.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${tempSliderValue}%, hsl(224, 65%, 95%) ${tempSliderValue}%)`;
    if (tempSliderValue == 0) {
        curRev = 10;
        curPrice = 8;
    }
    else if (tempSliderValue == 25) {
        curRev = 50;
        curPrice = 12;
    } else if (tempSliderValue == 50) {
        curRev = 100;
        curPrice = 16;
    } else if (tempSliderValue == 75) {
        curRev = 500;
        curPrice = 24;
    } else if (tempSliderValue == 100) {
        curRev = 1;
        curPrice = 36;
    }

    reviews.textContent = !(tempSliderValue == 100) ? `${curRev}K Pageviews` : `${curRev}M Pageviews`;
    if (isActive()) {
        price.textContent = `$${curPrice*12}.00`;
    } else {
        price.textContent = `$${curPrice}.00`
    }
       
})