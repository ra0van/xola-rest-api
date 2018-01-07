# XOLO REST API Example

### Task: Find me a fun Sailing activity within 20km of San Francisco which costs less than $75.

#### I'm using axios to make request because it's easy to handle async calls

`const axios = require("axios");`

#### Implementation 

Step 1: Get the secret API Key

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

Step 2: Call the Xola API with params:

    1. geo : 'lat', 'lon', 'limit' (in this example: geo=37.7756,-122.4193,20)
    2. price : upper limit (in this example: price=75)
    3. category : category of event (in this example: `category=Sailing)
    4. limit : number of records in response (in this example: limit=1)
    
```javascript
function getExperienceData(key) {
    return axios.get('https://sandbox.xola.com/api/experiences?geo=37.7756,-122.4193,20&price=75&category=Sailing&limit=1', 
        {
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

### Sample Response

```javascript
Name => San Francisco City Lights Night Cruise
Price => 60
```
