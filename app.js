// date function
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()
//links navabar
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
})
//fixed navbar and back to top btn
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll',function(){
    const scrollHeihgt = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height
    if(scrollHeihgt > navHeight){
        navBar.classList.add('fixed-nav')
    }
    else{
        navBar.classList.remove('fixed-nav')
    }
    if(scrollHeihgt > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})
//smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault()
        const id = event.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        const navHeight = navBar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight
        if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 82){
            position = position + containerHeight
        }
        window.scrollTo({
            left:0,
            top: position,
        })
        linksContainer.style.height = 0
    })
})
