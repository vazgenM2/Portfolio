window.onload = function () {
    let skills = document.querySelectorAll('.skill')
    let burger = document.querySelector('.burger')

    for (let skill of skills) {
        skill.style.boxShadow = `0px 0px 4px ${skill.getAttribute('data-color')}`
        skill.addEventListener('mouseenter', () => {
            skill.style.boxShadow = `0px 0px 4px ${skill.getAttribute('data-color')}`
            skill.style.background = skill.getAttribute('data-color')
            if (!skill.classList.contains('notwhite')) skill.style.color = '#fff'
            skill.style.boxShadow = `0px 0px 15px ${skill.getAttribute('data-color')}`
        })
        skill.addEventListener('mouseleave', () => {
            skill.style.background = 'none'
            skill.style.color = '#000'
            skill.style.boxShadow = `0px 0px 4px ${skill.getAttribute('data-color')}`
        })
    }

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
    })

    window.addEventListener('scroll', () => {
        if (window.scrollY > document.querySelector('header').offsetHeight - document.querySelector('.top').offsetHeight) document.querySelector('.top').style.background = 'linear-gradient(135deg, #111111, #121222)'
        else document.querySelector('.top').style.background = 'linear-gradient(135deg, #11111190, #121222)'
    })

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.top').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset - 25;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

}
