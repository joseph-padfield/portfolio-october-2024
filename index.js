const projectBox = document.querySelector('.project-container')
const projectImg = document.querySelectorAll('.project-img')
const closeButton = document.querySelector('.close-button')
document.querySelector('.projects').addEventListener('click', () => {
    projectBox.classList.toggle('animate-box')

    projectImg.forEach(img => {  // Iterate over the NodeList
        img.classList.toggle('animate-img')
    })
})

document.querySelector('.close-button').addEventListener('click', () => {
    projectBox.classList.toggle('animate-box')

    projectImg.forEach(img => {  // Iterate over the NodeList
        img.classList.toggle('animate-img')
    })
})