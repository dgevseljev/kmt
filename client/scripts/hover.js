let myclass = document.querySelector('.card')
myclass.addEventListener('mouseover', show);
myclass.addEventListener('mouseout', hide);
 
function show(e){
  if (e.target.className == 'card'){
    this.style.backgroundColor = "#e60045";
    myclass.childNodes.forEach((item) => {
        item.style.backgroundColor = "#e60045";
    })
    for (let i = 0; i < myclass.childNodes.length; i++) {
        // console.log(myclass.childNodes[i]);
    // myclass.childNodes[i].style.backgroundColor = "#e60045";
  }

  }
}
function hide(e){
    this.style.backgroundColor = "#FF004E";
    for (let i = 0; i < myclass.childNodes.length; i++) {
        myclass.childNodes[i].style.backgroundColor = "#FF004E";
      }
  }


  