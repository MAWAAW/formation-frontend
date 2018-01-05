let favoriteCityId = "rome"
console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
citiesId.push("tokyo")
console.log(citiesId)

function getWeather(cityId) {
    let city = cityId.toUpperCase()
    let temperature = 20
    return { city, temperature }
}

const weather = getWeather(favoriteCityId)
console.log(weather)

const { city } = getWeather(favoriteCityId);
const { temperature } = getWeather(favoriteCityId);
console.log(city)
console.log(temperature)

const [parisId, nycId, ...otherCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(otherCitiesId.length)

class Trip {
    get price() {
        return this._price
    }
    set price(price) {
        this._price = price
    }
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }
    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]"
    }
    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
console.log(parisTrip)
console.log(parisTrip.name)

console.log(parisTrip.toString())

parisTrip.price = 100
console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip()
console.log(defaultTrip.toString())

class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price = 0) {
        super(id, name, imageUrl, 0)
        this.price = price
    }
    toString() {
        return "Free" + super.toString()
    }
}

let freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg", 0)
console.log(freeTrip.toString())

/********************************************************************************/
/*                      Promise, Set, Map, Arrow Function                       */
/********************************************************************************/

class TripService {
    constructor() {
        this.tripsSet = new Set()
        this.tripsSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.tripsSet.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'))
        this.tripsSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }
    findByName(tripName) {

        let trip = Array.from(this.tripsSet).find(e => e.name == tripName)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (trip) {
                    resolve(trip)
                }
                else {
                    reject("No trip with name " + tripName)
                }
            }, 2000)
        });
    }
}

class PriceService {
    constructor() {
        this.pricesMap = new Map()
        this.pricesMap.set('paris', 100)
        this.pricesMap.set('rio-de-janeiro', 800)
        this.pricesMap.set('nantes')
    }
    findPriceByTripId(tripId) {
        let price = this.pricesMap.get(tripId)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (price) {
                    resolve(price)
                }
                else {
                    reject("No price found for id " + tripId)
                }
            }, 2000)
        });
    }
}

let tripService = new TripService()
let priceService = new PriceService()
tripService.findByName('Paris')
    .then(function (tripName) {
        console.log("Trip found: " + tripName)
    }, function (error) {
        console.log(error)
    });
priceService.findPriceByTripId('paris')
    .then(function (price) {
        console.log("Price found: " + price)
    }, function (error) {
        console.log(error)
    });

tripService.findByName('Rio de Janeiro')
    .then(trip => priceService.findPriceByTripId(trip.id))
    .then(price => console.log("Price found: " + price))
    .catch(function (error) {
        console.log(error)
    })

tripService.findByName('Nantes')
    .then(trip => priceService.findPriceByTripId(trip.id))
    .then(price => console.log("Price found: " + price))
    .catch(function (error) {
        console.log(error)
    })
