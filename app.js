let boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    let triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

checkBoxes()