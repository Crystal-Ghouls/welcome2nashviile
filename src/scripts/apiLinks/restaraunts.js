




//  const restaurantAPIkey  fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=c469662e59f31a94390e69fe829b45cf")
// // .then(foods => foods.json())
// // .then(parsedFoods => {
// //     console.table(parsedFoods)
// // })

// // restaurantAPIkey();


// setup to search using input value/ return results
const restaurantBaseUrl = ("https://developers.zomato.com/api/v2.1")

const searchRestaurants = searchInput => fetch(`${restaurantBaseUrl})/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=c469662e59f31a94390e69fe829b45cf`)
    .then(response => response.json())
}




// // Restaurant Search 
// const restaurantHandleSearch = event => { 
//     // console.log(event)
//     const inputField = document.querySelector("input")
//     console.log("user input", inputField.value)

// const restarauntInputEl = document.getElementById("meetrestarauntInput")

// document.getElementById("restarauntButton").addEventListener("click", function (event) {
// console.log("restaraunt", restaurantHandleSearch);

//  })