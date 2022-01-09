window.onload = async function () {
    let skills = document.querySelectorAll('.skill')
    // let burger = document.querySelector('.burger')
    let filterBtns = document.querySelectorAll('.filter')
    let allWorks = document.querySelectorAll('.work')

    // ============================================ Get my age
    let nowDate = new Date()
    let myDate = new Date(2004, 7, 15)
    let ms = nowDate - myDate
    let myAge = 0
    while (ms >= 31557600000) {
        myAge++
        ms -= 31557600000
    }
    document.querySelector('#age').innerHTML = myAge
    //  ======================================================
    //  ================== Generateing works/projects
    let onePageCount = 5
    let currentPage = 1
    let allPages = 1
    let projectI = 0
    let fixedProjectI = 0
    await fetch('./projects.json')
        .then(res => res.json())
        .then(res => {
            allPages = Math.ceil(res.projects.length / onePageCount)
            while (currentPage <= allPages) {
                fixedProjectI = projectI
                console.log(currentPage)
                let works = document.createElement('div')
                let pageBtn = document.createElement('div')
                works.classList.add('works')
                works.classList.add(`sheet-${currentPage}`)
                pageBtn.classList.add('page-btn')
                pageBtn.innerHTML = currentPage
                pageBtn.id = currentPage
                if (currentPage === 1) works.classList.add('active')

                for (projectI; projectI < fixedProjectI + onePageCount; projectI++) {
                    if (!res.projects[projectI]) break
                    let newProject = document.createElement('div')
                    let inner = `
                    <div class="work" data-filter="${res.projects[projectI].filter}">
                    <img src="${res.projects[projectI].imgSrc}" alt="" class="work-img">
                    <div>
                        <div class="work-title">${res.projects[projectI].name}</div>
                        <hr>
                        <br>
                        <a href="${res.projects[projectI].btnLink}" target="_blank">
                        <button class="work-btn">See</button>
                        </a>
                        </div>
                        </div>
                        `
                    newProject.innerHTML = inner
                    works.appendChild(newProject)

                }

                document.querySelector('.choose-pages').appendChild(pageBtn)
                document.querySelector('.all-projects').appendChild(works)
                currentPage++
            }
        })

    for (let i = 0; i < document.querySelectorAll('.page-btn').length; i++) {
        document.querySelectorAll('.page-btn')[i].addEventListener('click', () => {
            for (let j = 0; j < document.querySelectorAll('.works').length; j++) {
                document.querySelectorAll('.works')[j].classList.remove('active')
            }
            document.querySelector(`.sheet-${document.querySelectorAll('.page-btn')[i].id}`).classList.add('active')
            console.log(document.querySelectorAll('.page-btn')[i].id)
        })
    }

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

    // burger.addEventListener('click', () => {
    //     burger.classList.toggle('active')
    // })

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
        allWorks = document.querySelectorAll('.work')
        switch (query) {
            case 'all': for (let work of allWorks) {
                work.style.display = 'block'
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

//  Add .parallax to create parallax effect to some elements
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.parallax').forEach(item => {
        let speed = 1
        // Math.random() * 10 - Math.random() * 10
        const x = (window.innerWidth - e.pageX * speed) / 10
        const y = (window.innerHeight - e.pageY * speed) / 10


        item.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
})