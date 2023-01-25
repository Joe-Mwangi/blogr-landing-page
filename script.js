const menu = document.querySelector('.menu')
const nav = document.querySelector('.logo-nav')
const dropDowns = document.querySelectorAll('.drop-down')

dropDowns.forEach(dropDown => {
    const parent = dropDown.closest('.list')
    const arrow = parent.querySelector('.arrow')
    const link = parent.querySelector('.link')
    link.addEventListener('click', () => { 
        dropDowns.forEach(item => {
            const parentItem = item.closest('.list')
            const arrowItem = parentItem.querySelector('.arrow')
            if(item !== dropDown) {
                item.classList.remove('show-links')
                arrowItem.classList.remove('arrow-up')
            }
        })
        arrow.classList.toggle('arrow-up')
        dropDown.classList.toggle('show-links')
    })
})

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-close')
    nav.classList.toggle('show-nav')
})