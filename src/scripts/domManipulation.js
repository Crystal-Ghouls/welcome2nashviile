/*
This is a function for the Input Container created in group 
The Return : populates any html content via a string and then makes it dynamic by using interpolation and cancatenation.
*/

const inputFormContainer = () => {
    return `
    <h1>Welcome To Nashville</h1>
    <h3>Search for Stuff to do Today</h3>
    <input type="text" name="Parks" id="parksInput"> <button>Parks Search</button>
    <br>
    <br>
    <input type="text" name="Meetups" id="meetupsInput"> <button>Meetups Search</button>
    <br>
    <br>
    <input type="text" name="Concerts" id="concertsInput"> <button>Concerts Search</button>
    <br>
    <br>
    <input type="text" name="Restaraunts" id="restarauntsInput"> <button>Restaraunts Search</button>
    
    
    `
}

// This declares a constant and makes that constant equal to the value of the inside of the container div with ID: #formContainer.
const inputContainer = document.querySelector('#formContainer');

// This calls the function and makes it equal to the previously declared variable effectively linking or wrapping the function in that variable.
inputContainer.innerHTML = inputFormContainer();


