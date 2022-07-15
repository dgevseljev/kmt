// const arrow = document.querySelector('.arrow');

// arrow.addEventListener('click', rotateArrow);

// function rotateArrow(event) {
//     event.stopPropagation();
//     arrow.classList.toggle('up');
// }


const rules = document.querySelector('.rules-header');

rules.addEventListener('click', rotateArrow);

function rotateArrow(event) {
    event.stopPropagation();
    // console.log(this.lastElementChild);
    this.lastElementChild.classList.toggle('up');
}