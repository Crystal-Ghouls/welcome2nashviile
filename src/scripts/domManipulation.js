/*
This is a function for the Input Container created in group 
The Return : populates any html content via a string and then makes it dynamic by using interpolation and cancatenation.
*/

const inputFormContainer = () => {
    return `
    <h1>Welcome To Nashville</h1>
    <h3>Search for Stuff to do Today</h3>
    <form>
    <fieldset>
    <input type="text" name="Parks" id="parksInput"> <button>Parks Search</button>
    <br>
    <br>
    <input type="text" name="Meetups" id="meetupsInput"> <button id= meetUpButton>Meetups Search</button>
    <br>
    <br>
    <input type="text" name="Concerts" id="concertsInput"> <button id= concertButton>Concerts Search</button>
    <br>
    <br>
    <input type="text" name="Restaraunts" id="restarauntsInput"> <button>Restaraunts Search</button>
    </fieldset>
    </form>
    
    `;
};

// This declares a constant and makes that constant equal to the value of the inside of the container div with ID: #formContainer.
const inputContainer = document.querySelector('#formContainer');

// This calls the function and makes it equal to the previously declared variable effectively linking or wrapping the function in that variable.
inputContainer.innerHTML = inputFormContainer();


// This function declares for the Results box and will eventually output our container for the data from input container and will have save buttons added in soon.

const outputContainerEl = () => {
    return `
    <h1>Results</h1>
    <form>
    <fieldset>

    </form>
    </fieldset>
    `;
};

// This declares a variable to fit with the function for input container and sets it equal to the inside of the container div ID: outptFormContainer.
const outputContainer = document.querySelector('#outputFormContainer');

// This calls the function and sets it to be equal to the inner HTML by linking it with the function and the DOM.
outputContainer.innerHTML = outputContainerEl();
