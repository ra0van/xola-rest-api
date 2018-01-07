# XOLO REST API Example

### I'm using axios to make request because it's easy to handle async calls

`const axios = require("axios");`



```javascript
function getAPIKey() {
    return axios.get(`${URL}`, {
            auth: {
                username: USERNAME,
                password: PASSWORD
            }
        })
        .then(function (response) {
            if (response.status === 200) {
                API_KEY = response.data.apiKey;
                getExperienceData(API_KEY);
            }
            else {
                console.error("Error : " + response.statusText);
            }
        })
        .catch((err) => console.log(err));
}
```

//Find me a fun Sailing activity within 20km of San Francisco which costs less than $75.

```javascript
function getExperienceData(key) {
    return axios.get('https://sandbox.xola.com/api/experiences?geo=37.7756,-122.4193,20&price=75&category=Sailing&limit=1', {
        headers: {
            'X-API-KEY' : key,
        }
    })
    .then(function(response) {
          console.log("Name => " + response.data.data.name);
          console.log("Price => " + response.data.data.price + "\n");
     }
  })
  .catch((err) =>  console.error(err));
}
```

### Response

```javascript
Name => San Francisco City Lights Night Cruise
Price => 60
```
