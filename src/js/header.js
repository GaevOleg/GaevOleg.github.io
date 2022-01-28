const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
const header = document.querySelector('.header')

//Плавный переход при клике по ссылке
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', (e) => {
            const menuLink = e.target
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto)
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - header.offsetHeight
                if (menuIcon.classList.contains('_active')) {
                    document.body.classList.remove('_lock')
                    menuIcon.classList.remove('_active')
                    menuBody.classList.remove('_active')
                }

                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                })
                e.preventDefault()
            }
        })
    });
}

//Обработка клика по иконке бургера
if (menuIcon) { 
    menuIcon.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock')
        menuIcon.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}