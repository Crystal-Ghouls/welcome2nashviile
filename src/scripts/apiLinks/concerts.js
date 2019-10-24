const ticketMasterBaseUrl = "https://app.ticketmaster.com/discovery/v2/"

const searchConcerts = (searchInput) => fetch(`${ticketMasterBaseUrl}events/?keyword=${searchInput}&city=Nashville&classificationName=genre&apikey=${ticketMasterKey}`)
.then(response => response.json())
.then(results => console.log(results))




// 1. The Base URL is declared as a variable

// 2. A function named searchRecipes is made with a parameter called searchInput to tell the computer that when someone types something in the input field, the API should return results parsed to .json format.

// The API gives the response.
// The .then is telling the code to parse the response into json

// searchConcerts();