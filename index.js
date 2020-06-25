const request = require('request')
let url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
let apiKey = 'a8b84862497fc23b06b7fd564f36bbbb'
let city = "Charlotte"


request(url, function(error, response, body){
    if(error){
        console.log('error:', error)
    }
    else {
        console.log('body:',body)
    }
})