const restaurantBaseUrl = ("https://developers.zomato.com/api/v2.1")


// setup to search using input value/ return results
const searchRestaurants = searchInput => fetch(`${restaurantBaseUrl}/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=${restaurantApiKey}`)
    .then(response => response.json())




    // https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=c469662e59f31a94390e69fe829b45cf


// // Restaurant Search 
    // const restaurantHandleSearch = event => { 
    // console.log(event)
    // const inputField = document.querySelector("input")
//     console.log("user input", inputField.value)

// const restarauntInputEl = document.getElementById("meetrestarauntInput")

// document.getElementById("restarauntButton").addEventListener("click", function (event) {
// console.log("restaraunt", restaurantHandleSearch);

//  })