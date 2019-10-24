// const parksInputEl = document.getElementById("parksInput")

// document.getElementById("parksButton").addEventListener("click", function (event) {
// console.log("parks", event);

// })


// const meetUpInputEl = document.getElementById("meetupsInput")

// document.getElementById("meetUpButton").addEventListener("click", function (event) {
// console.log("meet-up", event);

// })


//  const concertsInputEl = document.getElementById("concertInput")

//  document.getElementById("concertButton").addEventListener("click", function (event) {
//   console.log("concerts", event);

//   })


document.getElementById("restaurantButton").addEventListener("click", function (event) {
      const restaurantInputEl = document.getElementById("restaurantsInput")
      searchRestaurants(restaurantInputEl.value).then(restaurants => {
        console.log(restaurants)
      })
      console.log("restaurant", event);
      
    })


console.log("hey buddy")



// // Restaurant Search 
        const restaurantHandleSearch = event => { 
        // console.log(event)
        const inputField = document.querySelector("#restaurantsInput")
        console.log("user input", inputField)

        searchRestaurants(inputField.value)
        .then(response => {
            console.log(response.recipes)
          displayRestaurantHtml(response.recipes)
          inputField.value = ""
        })
      }

      
