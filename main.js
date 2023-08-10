const num = document.querySelectorAll(".num")
const container = document.querySelector(".container")
let ratingNum = ""

num.forEach((el) => {
    
    el.addEventListener('click', () => {
        removeClass()
        el.classList.add("active")
        ratingNum = el.innerHTML
    })
})

function removeClass() {
    num.forEach((el) => {
        el.classList.remove("active")
    })
}

function response() {
    container.innerHTML = `
    <img src="./images/illustration-thank-you.svg" alt="Thank You Image">
    <div class="rating">
        <p>
            You selected <span id="rate">${ratingNum}</span> out of 5
        </p>
    </div>
    <h1 class="responseTitle">Thank You!</h1>
    <p class="responseText">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
    </p>
    `
}