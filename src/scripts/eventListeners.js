// This is the button that links event listeners to the console and allows for a log of parks event.
const parksInputEl = document.getElementById("parksInput")

document.getElementById("parksButton").addEventListener("click", function (event) {
console.log("parks", event);
parksApi()
.then (response => {
    console.log(response)
})
})

// THis is the meetup button event listener set up for a click response and console Log
const meetUpInputEl = document.getElementById("meetupsInput")

document.getElementById("meetUpsInput").addEventListener("click", function (event) {
console.log("meet-up", event);

})

const meetUpSearch = event => {
    const inputField = document.getElementById("")
}




// THis is the button that links the event listener for button Concert Input
const concertsInputEl = document.getElementById("concertInput")

document.getElementById("concertButton").addEventListener("click", function (event) {
console.log("concerts", event);

})

// This is the button that links the event listener to the buttons in restaraunts.
const restarauntInputEl = document.getElementById("meetrestarauntInput")

document.getElementById("restarauntButton").addEventListener("click", function (event) {
console.log("restaraunt", event);

})



