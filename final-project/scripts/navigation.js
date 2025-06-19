// Select hamburger button and navigation menu

const hambutton = document.querySelector('#menuButton');
const navigation = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open')
})
