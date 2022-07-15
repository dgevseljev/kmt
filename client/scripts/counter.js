let count = document.getElementById('count1');
const plus = document.getElementById('plus1');
const minus = document.getElementById('minus1');

plus.onclick = function(e) {
    e.stopPropagation();
    count.innerHTML++;
}

minus.onclick = function(e) {
    e.stopPropagation();
    let countMinus = count.innerHTML;
    // console.log(countMinus);
    if (+countMinus > 0){
        count.innerHTML--;
        // +countMinus--;
        // console.log(countMinus);
        // count.innerHTML = `${countMinus}`;
    }
        
}