const accordion = document.querySelector('.accordion')
const accordionItems = document.querySelectorAll('.accordion .accordion-item')

accordionItems.forEach(item => {
    let header = item.querySelector('.accordion-item__header')
    item.setAttribute('data-closed-height', header.clientHeight)
    item.setAttribute('data-opened-height', item.clientHeight)

    item.style.height = header.clientHeight + 'px'

    header.addEventListener('click', (e) => {

        let itemToOpen = e.currentTarget.parentNode
        let currentOpened = document.querySelector('.accordion .accordion-item.opened')

        if(currentOpened && currentOpened != itemToOpen) {
            currentOpened.classList.remove('opened')
            currentOpened.style.height = currentOpened.getAttribute('data-closed-height') + 'px'
        }

        if(itemToOpen.classList.contains('opened')) {
            itemToOpen.classList.remove('opened')
            itemToOpen.style.height = itemToOpen.getAttribute('data-closed-height') + 'px'
        } else {
            itemToOpen.classList.add('opened')
            itemToOpen.style.height = itemToOpen.getAttribute('data-opened-height') + 'px'
        }

    })

})

if(accordion.hasAttribute('data-accordion-close-outside')) {
    document.addEventListener('mouseup', (e) => {
        let target = e.target
        let accordionNested = document.querySelectorAll('.accordion, .accordion *')
        let currentOpened = document.querySelector('.accordion .accordion-item.opened')

        let insideAccordion = false

        accordionNested.forEach(item => {
            if(item == target) insideAccordion = true
        })

        if(!insideAccordion && currentOpened) {
            currentOpened.classList.remove('opened')
            currentOpened.style.height = currentOpened.getAttribute('data-closed-height') + 'px'
        }
    })
}