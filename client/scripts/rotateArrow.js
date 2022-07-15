const clickMore = document.querySelectorAll('.to_more');

clickMore.forEach((item) => {
    item.addEventListener('click', rotateArrow);
});

function rotateArrow(event) {
    event.stopPropagation();
    this.childNodes[1].classList.toggle('up');
}

// обработка клика "В корзину" для области карточки, за исключением области "Подробнее"
const clickCard = document.querySelectorAll('.card');

clickCard.forEach((item) => {
    item.addEventListener('click', addToCart);
});

function addToCart() {
    let img = document.createElement('img');
    img.src = 'images/checkMark.svg';
    img.style = 'scale: 0.85';
    let arrow = document.createElement('div');
    arrow.className = 'arrow';
    let textElem = this.childNodes[5].firstElementChild;
    
    textElem.classList.toggle('add_to');  
    if (textElem.textContent === 'Добавить в корзину') {
        textElem.textContent = 'В корзине';
        this.childNodes[5].lastElementChild.replaceWith(img);
    } else {
        textElem.textContent = 'Добавить в корзину';
        this.childNodes[5].lastElementChild.replaceWith(arrow);
    }
}