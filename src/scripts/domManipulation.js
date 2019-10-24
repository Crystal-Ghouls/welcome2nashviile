/*
This is a function for the Input Container created in group 
The Return : populates any html content via a string and then makes it dynamic by using interpolation and cancatenation.
*/

const inputFormContainer = () => {
    return `
    <h1>Welcome To Nashville</h1>

    <h3>Search for Stuff to do Today</h3>

    <select name="Parks" id="parksInput">
        <option value="playground">Playground</option>
        <option value="skate_park">Skate Park</option>
        <option value="dog_park">Dog Park</option>
        <option value="restrooms_available">Restrooms Available</option>
    </select> 
    <button id= parksButton>Parks Search</button>
    <br>
    <br>

    <input type="text" name="Meetups" id="meetupsInput"> <button id= meetUpButton>Meetups Search</button>
    <br>
    <br>

    <input type="text" name="Concerts" id="concertsInput"> <button id= concertButton>Concerts Search</button>
    <br>
    <br>
    
    <input type="text" name="Restaraunts" id="restarauntsInput"> <button id= restarauntButton>Restaraunts Search</button>
    
    
    `
}

// This declares a constant and makes that constant equal to the value of the inside of the container div with ID: #formContainer.
const inputContainer = document.querySelector('#formContainer');

// This calls the function and makes it equal to the previously declared variable effectively linking or wrapping the function in that variable.
inputContainer.innerHTML = inputFormContainer();