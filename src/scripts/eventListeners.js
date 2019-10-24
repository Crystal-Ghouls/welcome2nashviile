

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
      
      




      
