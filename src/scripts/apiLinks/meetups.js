// This is a function that is going to be used in a function which is my api
// for this group. 
const everbriteApi = () => {
fetch("https://raw.githubusercontent.com/nss-cohort-36/temp-eb-api/master/search-response.json")
    .then(r => r.json())
    .then(results => console.log(results));
};

everbriteApi();




// This is an example from the EventBriteAPI that allows you to actually get the API running. THe above code is a workaround when hosting the API from a different position

// fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${search string}&location.address=nashville&token=${V35VXGKPMWBJ6RSDRZB5}`, {
//   "headers": {
//       "Accept": "application/json"
//   }
// }