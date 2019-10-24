/*
This is a function for the Input Container created in group 
The Return : populates any html content via a string and then makes it dynamic by using interpolation and cancatenation.
*/

const inputFormContainer = () => {
    return `<body>
    <header>
        <div class="box">
        </div>
        <div class="headerTitle">
            <h1>Welcome to Nashville</h1>
        </div>
    </header>
    <p class="introText">
        </span>
        <section class="wrapper">
            
                <fieldset>
                    <label for="concerts">Search concerts</label>
                    <input type="text" name="Whatever Charles Wants" id="Whatever Charles Sets this too">
                    <button class="concertsButton" type="button">Charles Picks What this Says</button>
                </fieldset>
            
            
                <fieldset>
                    <label for="nashvilleRestaurants">Search Restaurants Golden One Picks What This Says</label>
                    <input type="text" name="restaurants" class="restaurantsInput" placeholder="What's your favorite type of cuisine? Type it here!">
                    <button class="restaurantsButton" type="button">This is Corris Button</button>
                </fieldset>
            
            
                <fieldset>
                <select name="Parks" id="parksInput">
                <option value=" https://data.nashville.gov/resource/74d7-b74t.json?playground=Yes">Playground</option>
                <option value="https://data.nashville.gov/resource/74d7-b74t.json?skate_park=Yes">Skate Park</option>
                <option value="https://data.nashville.gov/resource/74d7-b74t.json?dog_park=Yes">Dog Park</option>
                <option value="https://data.nashville.gov/resource/74d7-b74t.json?restrooms_available=Yes">Restrooms Available</option>
            </select> 
            <button id= parksButton>Parks Search</button>
            <br>
            <br>
                  </select>
                    </div>
                    <br>
                </fieldset>
            
            
                <fieldset>
                    <label for="nashvilleMeetups">Checkout Meetups</label>
                    <input type="text" name="meetups" class="meetupsInput">
                    <button id="meetUpsInput" type="button">Checkout These Meetups!</button>
                </fieldset>
            
    </section>
    <hr>
    <div class="box2">
    </div>
    <h2 class="resultsList">These are your results</h2>
    <article class ="resultsContainer">
        <button id="clearButton" type="button">Clear Results</button> 
        <section id="meetupsResults"></section>
        <section id="concertsResults"></section>
        <section id="restaurantsContainer"></section>
        <section id="parksContainer"></section>
    </article>
    <hr>
    <div class="box3">
            <h2 class="intineraryList">Here is Your Itinerary</p>
    <article class="itineraryContainer">
            <div id="meetupsItinerary"></div>
            <section id="parkItinerary"></section>
            <section id="concertItinerary"></section>
            <section id="restuarantItinerary"></section>
            
        </article>
    </div>
    <footer>
    </footer>

</body>
   
    `;
};

// This declares a constant and makes that constant equal to the value of the inside of the container div with ID: #formContainer.
const inputContainer = document.querySelector('#formContainer');

// This calls the function and makes it equal to the previously declared variable effectively linking or wrapping the function in that variable.
inputContainer.innerHTML = inputFormContainer();


// // This function declares for the Results box and will eventually output our container for the data from input container and will have save buttons added in soon.

// const outputContainerEl = () => {
//     return `
//     <h1>Results</h1>
//     <form>
//     <fieldset>
//     <h3></h3>
//     </form>
//     </fieldset>
//     `;
// };

// // This declares a variable to fit with the function for input container and sets it equal to the inside of the container div ID: outptFormContainer.
// const outputContainer = document.querySelector('#outputFormContainer');

// // This calls the function and sets it to be equal to the inner HTML by linking it with the function and the DOM.
// outputContainer.innerHTML = outputContainerEl();


// //  Itinerary this function dynamically populates information on the dom by using JS to interject it into the code. The same as the other functions.

// const itineraryContainerEl = () => {
//     return `
//     <h1>Itinerary</h1>
//     <section><ul>
//     </ul></section>
//     `;
// }

// // This declares a variable to fit with the function to populate the data for itinerary container. Eventually it should be able to populate saved data for us.
// const itineraryContainer = document.querySelector('#itineraryFormContainer');

// // This calls our function and allows us to move forward so that we can have a box that puts something on the dom and eventually will populate data from our fetch.
// itineraryContainer.innerHTML = itineraryContainerEl();