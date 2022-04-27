window.onload = function(){
    //menu abd arrowUp
  let header = document.querySelector('.header');
  let arrowUp = document.querySelector('.arrow-up');
  window.onscroll = () => {
      if(window.scrollY > 50){
          header.classList.add('fixed-header')
      } else if (window.scrollY < 50){
          header.classList.remove('fixed-header')
      }
      if(window.scrollY > 300){
        arrowUp.classList.add('fixed-arrow-up')
    } else if (window.scrollY < 100){
        arrowUp.classList.remove('fixed-arrow-up')
    }
  }

    let btnArrowUp = document.querySelector('.arrow-up__btn')

    let liftUp = function(){
        window.scrollTo(0, 0)
    }

    btnArrowUp.addEventListener('click', liftUp)

    //модальное окно - открытие сертификата на весь экран

    let arrCertURL = ['html-coder.jpg', 'intermediate level ESL.jpg']

    let arrWrapForImg = document.querySelectorAll('.certificates-item')
    
    arrWrapForImg.forEach((element, index) => {
        let imgCertItem = document.createElement('img')
        element.append(imgCertItem)
        imgCertItem.src = `../images/${arrCertURL[index]}`
        imgCertItem.classList.add('certificates-item__img')
    })

    let modalSert = document.querySelector('.modal-certificates')
    let modalInner = document.querySelector('.modal-certificates__inner')
    let arrOfImgItem = document.querySelectorAll('.certificates-item__img')
    let btnsCloseModal = document.querySelectorAll('.modal-certificates__close')

    let imgModalItem = document.createElement('img')

    let modalWindowOpen = function(e){
        imgModalItem.src = e.target.src
        modalInner.append(imgModalItem)
        imgModalItem.classList.add('modal-certificates__img')
        document.body.style.overflow = 'hidden'
        modalSert.classList.add('open-modal')
        
    }
    let modalWindowClose = function(){
        document.body.style.overflow = ''
        modalSert.classList.remove('open-modal')
    }
    arrOfImgItem.forEach(item => {
        item.addEventListener('click', modalWindowOpen)
    })
    btnsCloseModal.forEach(item => {
        item.addEventListener('click', modalWindowClose)
    })

    console.log(arrOfImgItem)
  
}

