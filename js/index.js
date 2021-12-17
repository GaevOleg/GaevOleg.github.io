const delay = 200

const throttle = (callback, delay) => {
    let wait = false
    return (...args) => {
        if(!wait){
            wait = true
            setTimeout(() => {
                callback(...args)
                wait = false
            },delay)
        }
    }
}

const selector = (id) => {
    return `.section-header-content a[href="#${id}"]`
}

const getHrefElement = (elem) => {
    let id = elem.closest('section').id
    let selectorQuery = selector(id)
    return document.querySelector(selectorQuery)
}

const hoverHref = throttle((array,offsetY) => {
    for(let index = 0; index < array.length - 1; index++) {
        let element = getHrefElement(array[index])

        if(array[index].getBoundingClientRect().y < offsetY && array[index + 1].getBoundingClientRect().y >= offsetY) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
    }

    let lastSection = array[array.length - 1]
    let lastElement = getHrefElement(lastSection)

    if(lastSection.getBoundingClientRect().y < offsetY) {
        lastElement.classList.add('active')
    } else {
        lastElement.classList.remove('active')
    }
},delay)

window.addEventListener("scroll", () => {
    let offsetY = 200
    let h1 = document.querySelectorAll('h1')

    hoverHref(h1, offsetY)
})
