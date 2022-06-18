let axios = require("axios")


// =================[ Get Weather London ]=============
let getWeather = async (req, res) => {
    try {
        let london = req.query.q
        let id = req.query.appid
        
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${id}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// =================[ Get Tempreture London ]=============

let getTempLondon = async (req, res) => {
    try {
        let london = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${id}`
        }
        let result = await axios(options);
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// =================[ Get Sorted By Temp ]=============

let getSortedCities = async (req, res) => {

    try{
        let allCities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cities = []

        for(let i=0; i<allCities.length; i++){
            let obj = {city: allCities[i]}
            
            let options = {
                    method: "get",
                    url: `http://api.openweathermap.org/data/2.5/weather?q=${allCities[i]}&appid=6bfbc542748eef734986086cd3780486`
                }
                let result = await axios(options);
                obj.temp = result.data.main.temp
                cities.push(obj)
        }

        let sorted = cities.sort( (a,b)=>{return a.temp - b.temp})
        res.status(200).send({ msg: sorted, status: true })


    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




module.exports.getWeather = getWeather
module.exports.getTempLondon = getTempLondon
module.exports.getSortedCities = getSortedCities