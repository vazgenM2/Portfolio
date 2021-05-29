window.onload = function () {
    let skills = document.querySelectorAll('.skill')
    let burger = document.querySelector('.burger')

    for (let skill of skills) {
        skill.style.boxShadow = `0px 0px 4px ${skill.getAttribute('data-color')}`
        skill.addEventListener('mouseenter', () => {
            skill.style.boxShadow = `0px 0px 4px ${skill.getAttribute('data-color')}`
            skill.style.background = skill.getAttribute('data-color')
            skill.style.boxShadow = `0px 0px 15px ${skill.getAttribute('data-color')}`
        })
        skill.addEventListener('mouseleave', () => {
            skill.style.background = 'none'
            skill.style.boxShadow = `0px 0px 4px ${skill.getAttribute('data-color')}`
        })
    }

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) document.querySelector('.top').style.background = 'linear-gradient(135deg, #111111, #121222)'
        else document.querySelector('.top').style.background = 'linear-gradient(135deg, #11111190, #121222)'
    })
}
