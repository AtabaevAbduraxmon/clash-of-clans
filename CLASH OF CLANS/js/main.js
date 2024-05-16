const elOpenBtn = document.querySelector('.show-modal');
const elCloseBtn = document.querySelector('.close-modal');
const elModal1 = document.querySelector('.modal');
const elModalBlur = document.querySelector('.overlay')

elOpenBtn.addEventListener('click', function() {
    elModal1.style.display = 'inline-Block'
    elModalBlur.style.display = 'inline-Block'
})
elCloseBtn.addEventListener('click', function(){
    elModal1.style.display = 'none'
    elModalBlur.style.display = 'none'
})