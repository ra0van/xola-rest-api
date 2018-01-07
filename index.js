const axios = require("axios");

const URL = 'https://sandbox.xola.com/api/users/me';
const EXP_URL = 'https://sandbox.xola.com/api/experiences';
const USERNAME = '<email>';
const PASSWORD = '<password>';

var API_KEY = '';

function getAPIKey() {
    return axios.get(`${URL}`, {
        auth: {
            username: USERNAME,
            password: PASSWORD
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                console.log('here');
                API_KEY = response.data.apiKey;
                getExperienceData(API_KEY);
            }
            else {
                console.error("Error : " + response.statusText);
            }
        })
        .catch((err) => console.log(err));
}

//Find me a fun Sailing activity within 20km of San Francisco which costs less than $75.

function getExperienceData(key) {
    return axios.get('https://sandbox.xola.com/api/experiences?geo=37.7756,-122.4193,20&price=75&category=Sailing&limit=1', {
        headers: {
            'X-API-KEY' : key,
        }
    })
    .then(function(response) {
        let len = response.data.data.length;
        for(var i = 0; i < len; i++) {
            console.log("Name => " + response.data.data[i].name);
            console.log("Price => " + response.data.data[i].price + "\n");
        }
    })
    .catch((err) =>  console.error(err));
}

getAPIKey();
