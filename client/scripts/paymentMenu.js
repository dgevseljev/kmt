const ways = document.querySelectorAll('.payment_way');
const tumbler = document.querySelector('.payment_current-way');

let offset;
let prev;
let waysWidth = [];
ways.forEach((item, i) => {
    waysWidth.push(item.offsetWidth);
    item.onclick = function() {
        if (prev)
            ways[prev].style.color = '#fff'
        offset = item.offsetLeft;
        tumbler.style.width = `${waysWidth[i]}px`;
        tumbler.style.left = `${offset}px`;
        ways[i].style.color = '#000';
        prev = i;
    }
})