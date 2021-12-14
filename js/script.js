//Registrarse bajo un nombre de usuario, email y contraseña
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const form = document.getElementById("form");
const warning = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let enter = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    warning.innerHTML = ""
    if (nombre.value.length < 3) {
        warnings += `The name is not valid <br>`
        enter = true
    }
    if (!regexEmail.test(email.value)) {
        warnings += `The email is not valid <br>`
        enter = true
    }
    if (pass.value.length < 4) {
        warnings += `The password is not valid <br>`
        enter = true
    }
    if (enter) {
        warning.innerHTML = warnings
    } else {
        warning.innerHTML = "Successful registration!"
    }

})

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}