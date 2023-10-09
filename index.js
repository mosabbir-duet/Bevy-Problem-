const https = require('https');
const { json } = require('stream/consumers');


const cleaingJsonData = (cleaningData) => {
    console.log(`Mr. ${cleaningData.name.first}'s age is ${cleaningData.age}`)
    console.log(Object.keys(cleaningData.name).length)

    for (let key in cleaningData.name) {
        if (!cleaningData.name[key]) {
            value = cleaningData.name[key];
            console.log(key, value);
            console.log(key)
            delete cleaningData.name.key
        }
    }
}

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        data = JSON.parse(data)
        let cleaningData = {...data}
        cleaingJsonData(cleaningData)
        console.log(data)
    });
})
.on('error', () => {
    console.log(error)
})