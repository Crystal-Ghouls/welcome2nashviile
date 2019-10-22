// This is a function that is going to be used in a function which is my api
// for this group. 
const everbriteApi = () => {
fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
    .then(r => r.json())
    .then(results => console.log(results));
};