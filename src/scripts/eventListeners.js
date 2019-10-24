const parksInputEl = document.getElementById("parksInput")



document.getElementById("parksButton").addEventListener("click", function (event) {
    const parksInput = document.querySelector("#parksInput").value
    console.log("parks input", parksInput)
    // console.log("parks", event);
    parksApi(parksInput)
        .then(response => {
            console.log(response)
        })
})


const meetUpInputEl = document.getElementById("meetupsInput")

document.getElementById("meetUpButton").addEventListener("click", function (event) {
    console.log("meet-up", event);

})


const concertsInputEl = document.getElementById("concertInput")

document.getElementById("concertButton").addEventListener("click", function (event) {
    console.log("concerts", event);

})


const restarauntInputEl = document.getElementById("meetrestarauntInput")

document.getElementById("restarauntButton").addEventListener("click", function (event) {
    console.log("restaraunt", event);

})