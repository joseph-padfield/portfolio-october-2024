const projectBox = document.querySelector('.project-container')
const projectImg = document.querySelectorAll('.project-img')
const closeButton = document.querySelector('.close-button')

const projectHtml = `
        <div class="project">
            <p class="project-title">Tom Waits Ipsum <br> 
                        <img src="./img/tom-waits-ipsum.png" class="project-img"><br>
            <span class="tools">Express.js | Sass | HTML</span><br>
            <span class="description">Generates placeholder text composed of lines from the songs of Tom Waits.</span>

            <span><br>
            <a target="_blank" href="https://tom-waits-ipsum-generator.2024-josephp.dev.io-academy.uk/" class="project-nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/tom-waits-ipsum-generator" class="project-nav-links">Github repo</a>
            </span></p>
        </div>
        <div class="project">
            <p class="project-title">How Old Are You On Mars?<br> 
                        <img src="./img/planet-age-calculator.png" class="project-img"><br>
            <span class="tools">Typescript | Sass | HTML</span><br>
            <span class="description">Calculates how old you would be on other planets in the Solar system.</span>
            <span><br>
            <a target="_blank" href="https://joseph-padfield.github.io/how-old-are-you-on-mars/" class="project-nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/how-old-are-you-on-mars" class="project-nav-links">Github repo</a>
            </span></p>
        </div>
        <div class="project">
            <p class="project-title">Famous Last Words<br> 
                        <img src="./img/movie_quote_quiz.png" class="project-img"><br>
            <span class="tools">Javascript | CSS | HTML</span><br>
            <span class="description">Early project at iO Academy. A timed quiz game based on lines from famous films.</span>

            <span><br>
            <a target="_blank" href="https://joseph-padfield.github.io/movie-quote-quiz-project/" class="project-nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/movie-quote-quiz-project" class="project-nav-links">Github repo</a>
            </span></p>
        </div>
        <div class="project">
            <p class="project-title">Reels From the Crypt<br> 
                        <img src="./img/reels-from-the-crypt.png" class="project-img"><br>
            <span class="tools">PHP | SQL | CSS | HTML</span><br>
            <span class="description">First solo project at iO Academy. An app for displaying my collection of horror films.</span>

            <span><br>
            <a target="_blank" href="https://2024-josephp.dev.io-academy.uk/collection_app/" class="project-nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/joseph-padfield/collection-app-project" class="project-nav-links">Github repo</a>
            </span></p>
        </div>
        <div class="project">
            <p class="project-title">Furniture Store<br> 
                        <img src="./img/furniture-store.png" class="project-img"><br>
            <span class="tools">PHP | SQL | JSON</span><br>
            <span class="description">Group project building a back-end for a furniture store site based on a provided front-end.</span>

            <span><br>
            <a target="_blank" href="https://2024-henryt.dev.io-academy.uk/build/" class="project-nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/iO-Academy/24-jul-hippos-furniture-store-API" class="project-nav-links">Github repo</a>
            </span></p>
        </div>

        <div class="project">
            <p class="project-title">Academy Portal<br> 
                        <img src="./img/AcademyPortal.png" class="project-img"><br>
            
            <span class="tools">Slim | MVC</span><br>
            <span class="description">Contributed to an existing, 10-year-old codebase. Added a new 'Edit Trainer' feature.</span>

            <span><br>
            <a target="_blank" href="https://github.com/iO-Academy/AcademyPortal/commits/main/?author=joseph-padfield" class="project-nav-links">Github repo (my commits)</a>
            </span></p>
        </div>
        <div class="project">
            <p class="project-title">Job Search Site<br> 
                        <img src="./img/job-search.png" class="project-img">
            <span class="tools">React | Bootstrap</span><br>
            <span class="description">Group project building the front-end of a job-search site based on a provided back-end.</span><br>
            <a target="_blank" href="https://2024-thomask.dev.io-academy.uk/dist/" class="project-nav-links">Live link</a><br>
            <a target="_blank" href="https://github.com/iO-Academy/2024-jul-fst-job-search-fe" class="project-nav-links">Github repo</a>
            </span></p>
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
    I am a passionate and enthusiastic full-stack developer with a unique background in the performing arts. <br>
    I have recently graduated from iO Academy, in Bath, where I honed my skills in HTML, CSS, Javascript, Typescript 
    PHP, SQL and MongoDB using a wide range of frameworks, methodologies and paradigms.
    Prior to coding, I enjoyed a 12-year career as an opera singer, performing leading roles on international stages. 
    This career has given me strong communication, collaboration, problem-solving and time management skills, which 
    have already proved their worth during both individual and collaborative projects as part of a scrum team.
    I am excited to continue expanding my skill-set and take on new challenges as I progress further as a developer.
`

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
