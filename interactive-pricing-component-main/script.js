const myRange = document.getElementById('myRange');
const reviews = document.querySelector('.reviews');
const price = document.getElementById('price');
const tag = document.querySelector('.tag');


function toggleTagHandler() {
    let isActive = false;
    const regex = /\$(.*?)\./;
    const circle = tag.querySelector('.circle');
    const per = document.querySelector('.per');
    console.log(per.textContent);
    tag.classList.toggle('active');
    circle.classList.toggle('on');
    if (tag.classList.contains('active') && circle.classList.contains('on')) {
        isActive = true;
    }
    if (isActive) {
        // console.log(price.textContent.match(regex)[1]);
        price.textContent = `$${+price.textContent.match(regex)[1]*12}.00`;
        per.textContent = '/year';
    } else if (!isActive) {
        price.textContent = `$${+price.textContent.match(regex)[1]/12}.00`;
        per.textContent = '/month';
    }
    return isActive;
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
    price.textContent = `$${curPrice}.00`;
})