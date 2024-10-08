const projectBox = document.querySelector('.project-container')
const projectImg = document.querySelectorAll('.project-img')
const aboutBox = document.querySelector('.about-container')
const closeButton = document.querySelector('.close-button')

const projectHtml = `
        <div class="project">
            <p class="project-title">Reels From the Crypt</p>
            <img src="./img/reels-from-the-crypt.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Tom Waits Ipsum</p>
            <img src="./img/tom-waits-ipsum.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Famous Last Words</p>
            <img src="./img/movie_quote_quiz.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Furniture Store</p>
            <img src="./img/furniture-store.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
            </span>
        </div>
                <div class="project">
            <p class="project-title">Reels From the Crypt</p>
            <img src="./img/reels-from-the-crypt.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Tom Waits Ipsum</p>
            <img src="./img/tom-waits-ipsum.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Famous Last Words</p>
            <img src="./img/movie_quote_quiz.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
            </span>
        </div>
        <div class="project">
            <p class="project-title">Furniture Store</p>
            <img src="./img/furniture-store.png" class="project-img">
            <span>
            <a class="nav-links">Live link</a><br>
            <a class="nav-links">Github repo</a>
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

    projectBox.classList.toggle('animate-box')

    projectImg.forEach(img => {  // Iterate over the NodeList
        img.classList.toggle('animate-img')
    })
})

const aboutText = document.createElement('p')
aboutText.classList.add('about-text')
const about = `
    <span class="box-header">About</span><br><br>
    I am a passionate and enthusiastic full-stack developer, recently graduated from an intensive training
    program at iO Academy in Bath. After a rewarding 12-year career as an opera singer, and driven by a lifelong
    love of technology, I decided to embark on a new career path in software development.<br><br>
    During my time at iO Academy I worked on a range of projects, both independently and collaboratively
    within a scrum team using a broad range of technologies.<br><br>
    Combining my skill-set from a long career in the performing arts with the skills and technologies that I
    have learnt during my time at iO Academy has given me a unique approach to problem-solving and team-work
    within this field, and I am excited to continue my learning and development as my career progresses.
`

aboutText.innerHTML = about

document.querySelector('.about').addEventListener('click', () => {

    projectBox.innerHTML = ''
    projectBox.appendChild(closeButton)
    projectBox.appendChild(aboutText)

    projectBox.classList.toggle('animate-box')
})

document.querySelector('.close-button').addEventListener('click', () => {
    projectBox.classList.toggle('animate-box')
    projectBox.innerHTML = ''

    projectImg.forEach(img => {  // Iterate over the NodeList
        img.classList.toggle('animate-img')
    })
})
