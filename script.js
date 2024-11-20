let burgerMenu = document.querySelector('.burger-menu')
let mainList = document.querySelector('.main-list')

burgerMenu.addEventListener('click',function(){
  mainList.classList.toggle('main-list-open')
  burgerMenu.classList.toggle('open')
  document.body.classList.toggle('disabled-scroll')
})

let mainItems = document.querySelectorAll('.main-item')

mainItems.forEach((mainItem) => {
  mainItem.addEventListener('click', function() {
    mainList.classList.remove('main-list-open')
    burgerMenu.classList.remove('open')
    document.body.classList.remove('disabled-scroll')
  })
})