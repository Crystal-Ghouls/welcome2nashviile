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

const meetUpSearch = event => {
    const inputField = document.getElementById("meetUpsSearch")
    console.log("user input", inputField.value)


eventbriteApi(inputField.value)
    .then(response => {
        console.log(response.events)
        inputField.value = "";
    });
};

document.getElementById("meetUpsInput").addEventListener("click", meetUpSearch) 




// THis is the button that links the event listener for button Concert Input
const concertsInputEl = document.getElementById("concertInput")

const concertSearch = event => {
    const concertInputField = document.getElementById('concertsButton')
    console.log('user input', concertInputField.value)


}

document.getElementById("concertsButton").addEventListener("click", searchConcerts) 
console.log("concerts", event);


// RESTAURANT SECTION
// Restaurant Event Listener 
document.getElementById("restaurantButton").addEventListener("click", function (event) {
  restaurantHandleSearch()
})


// // Restaurant Search 
    const restaurantHandleSearch = event => { 
      // console.log(event)
      const inputField = document.querySelector("#restaurantsInput")
      console.log("user input", inputField.value)
      

      searchRestaurants(inputField.value)
      .then(response => {
        console.log(response.restaurants)
        // displayRestaurantHtml(response.restaurants)
        inputField.value = ""
    })
  }





