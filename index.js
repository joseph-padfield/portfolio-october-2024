const projectBox = document.querySelector('.project-container')
const projectImg = document.querySelectorAll('.project-img')
const closeButton = document.querySelector('.close-button')

const projectHtml = `
        <div class="project">
            <p class="project-title">Reels From the Crypt</p>
            <img src="./img/reels-from-the-crypt.png" class="project-img">
            <span>
            <a target="_blank" href="https://2024-josephp.dev.io-academy.uk/collection_app/" class="nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/collection-app-project" class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Tom Waits Ipsum</p>
            <img src="./img/tom-waits-ipsum.png" class="project-img">
            <span>
            <a target="_blank" href="https://tom-waits-ipsum-generator.2024-josephp.dev.io-academy.uk/" class="nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/tom-waits-ipsum-generator" class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Famous Last Words</p>
            <img src="./img/movie_quote_quiz.png" class="project-img">
            <span>
            <a target="_blank" href="https://joseph-padfield.github.io/movie-quote-quiz-project/" class="nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/movie-quote-quiz-project" class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Furniture Store Group Project</p>
            <img src="./img/furniture-store.png" class="project-img">
            <span>
            <a target="_blank" href="https://2024-henryt.dev.io-academy.uk/build/" class="nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/iO-Academy/24-jul-hippos-furniture-store-API" class="nav-links">Github repo</a>
            </span>
        </div>
                <div class="project">
            <p class="project-title">How Old are you on Mars?</p>
            <img src="./img/planet-age-calculator.png" class="project-img">
            <span>
            <a target="_blank" href="https://joseph-padfield.github.io/how-old-are-you-on-mars/" class="nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/how-old-are-you-on-mars" class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Academy Portal Group Project</p>
            <img src="./img/AcademyPortal.png" class="project-img">
            <span>
            <a target="_blank" class="nav-links">Live link</a><br>
            <a target="_blank" class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Jobsite Group Project</p>
            <img src="./img/jobsiteScreenShot.png" class="project-img">
            <span>
            <a target="_blank" href="https://2024-thomask.dev.io-academy.uk/dist/" class="nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/iO-Academy/2024-jul-fst-job-search-fe" class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">To Do App</p>
            <img src="./img/furniture-store.png" class="project-img">
            <span>
            <a target="_blank" class="nav-links">Live link</a><br>
            <a target="_blank" class="nav-links">Github repo</a>
            </span>
        </div>
`

const projectContent = document.createElement('div')
projectContent.classList.add('project-content')
document.querySelector('.projects').addEventListener('click', () => {

    projectBox.innerHTML = ''
    projectContent.innerHTML = projectHtml

    projectBox.appendChild(closeButton)
    projectBox.appendChild(projectContent)

    projectBox.classList.toggle('close')

})

const aboutText = document.createElement('p')
aboutText.classList.add('about-text')
aboutText.innerHTML = `<span class="box-header">About</span><br><br>
    I am a passionate and enthusiastic full-stack developer, recently graduated from an intensive training
    program at iO Academy, in Bath. For 12 years I have enjoyed a successful and rewarding career as an opera singer, 
    during which time I was fortunate enough to travel and work internationally with a broad range of theaters.[LEFT OFF HERE]
    and driven by a lifelong
    love of technology, and of learning, I decided to embark on a new career path in full-stack development.<br><br>
    During my time at iO Academy I worked on a range of projects, both independently and collaboratively
    within a scrum team using a broad range of technologies.<br><br>
    Combining my skill-set from a long career in the performing arts with what I have learnt during my time at iO 
    Academy has given me a unique approach to problem-solving and team-work that I look forward to applying to my
    future career.`

document.querySelector('.about').addEventListener('click', () => {

    projectBox.innerHTML = ''

    projectBox.appendChild(closeButton)
    projectBox.appendChild(aboutText)

    projectBox.classList.toggle('close')

})

document.querySelector('.close-button').addEventListener('click', () => {

    projectBox.classList.toggle('close')

    setTimeout(() => {
        projectBox.innerHTML = ''
    }, 1000)

})
