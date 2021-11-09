window.onload = function () {
    let skills = document.querySelectorAll('.skill')
    let burger = document.querySelector('.burger')
    let filterBtns = document.querySelectorAll('.filter')
    let allWorks = document.querySelectorAll('.work')

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

    // ------------------ to Filter Works
    for (let btn in filterBtns) {
        filterBtns[btn].addEventListener('click', function () {
            for (let b of filterBtns) {
                b.classList.remove('active')
            }
            filterBtns[btn].classList.add('active')
            filterWorks(filterBtns[btn].innerHTML.toLowerCase())
        })
    }

    function filterWorks(query) {
        switch (query) {
            case 'all': for (let work in allWorks) {
                allWorks[work].style.display = 'block'
            }
                break;
            case 'easy': for (let work of allWorks) {
                if (work.getAttribute('data-filter') === 'easy') work.style.display = 'block'
                else work.style.display = 'none'
            }

                break;
            case 'medium': for (let work of allWorks) {
                if (work.getAttribute('data-filter') === 'medium') work.style.display = 'block'
                else work.style.display = 'none'
            }
                break;
            case 'dificult': for (let work of allWorks) {
                if (work.getAttribute('data-filter') === 'dificult') work.style.display = 'block'
                else work.style.display = 'none'
            }
                break;
            case 'paid': for (let work of allWorks) {
                if (work.getAttribute('data-filter') === 'paid') work.style.display = 'block'
                else work.style.display = 'none'
            }
                break;
        }
    }
}
