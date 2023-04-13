const menu = document.querySelector<HTMLElement>('.menu')!
const nav = document.querySelector<HTMLElement>('.logo-nav')!
const dropDowns = Array.from(document.querySelectorAll<HTMLElement>('.drop-down'))

handleDropDown(dropDowns)

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-close')
    nav.classList.toggle('show-nav')
})

function handleDropDown(dropDowns: HTMLElement[]) {
    dropDowns.forEach(dropDown  => {
        const parent = dropDown.closest<HTMLElement>('.list')!
        const arrow = parent.querySelector<HTMLElement>('.arrow')!
        const link = parent.querySelector<HTMLElement>('.link')!
        link.addEventListener('click', () => { 
            dropDowns.forEach(item => {
                const parentItem = item.closest<HTMLElement>('.list')!
                const arrowItem = parentItem.querySelector<HTMLElement>('.arrow')!
                if(item !== dropDown) {
                    item.classList.remove('show-links')
                    arrowItem.classList.remove('arrow-up')
                }
            })
            arrow.classList.toggle('arrow-up')
            dropDown.classList.toggle('show-links')
        })
    })
}