// GET /resource/3k2p-39jp.json HTTP/1.1
// Host: data.seattle.gov
// Accept: application/json
// X-App-Token: [REDACTED]


// const parksApi = () => {
//     fetch("https://data.nashville.gov/resource/74d7-b74t.json")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         console.table(parsedFoods)
//     })
// }


// const inputFormContainer = element.innerHTML("#parksInput")
// console.log(inputFormContainer)
// debugger


const parksApi = (keyword) => {
  console.log(parksApiKey)
  return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?playground=Yes`, {
      "headers": {
        "Accept": "application/json",
        "X-App-Token": `${parksApiKey}`
      }
    })
    .then(r => r.json())
}


// document.getElementById("parksButton").addEventListener("click", function (event) {
//   console.log("parks", event);

// })