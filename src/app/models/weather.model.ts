

export interface weatherData {
  location: Location
  current_observation: CurrentObservation
  forecasts: Forecast[]
}

export interface Location {
  city: string
  woeid: number
  country: string
  lat: number
  long: number
  timezone_id: string
}

export interface CurrentObservation {
  pubDate: number
  wind: Wind
  atmosphere: Atmosphere
  astronomy: Astronomy
  condition: Condition
}

export interface Wind {
  chill: number
  direction: string
  speed: number
}

export interface Atmosphere {
  humidity: number
  visibility: number
  pressure: number
}

export interface Astronomy {
  sunrise: string
  sunset: string
}

export interface Condition {
  temperature: number
  text: string
  code: number
}

export interface Forecast {
  day: string
  date: number
  high: number
  low: number
  text: string
  code: number
}
// export interface weatherData {
//   coord: Coord
//   weather: Weather[]
//   base: string
//   main: Main
//   visibility: number
//   wind: Wind
//   rain: Rain
//   clouds: Clouds
//   dt: number
//   sys: Sys
//   timezone: number
//   id: number
//   name: string
//   cod: number
// }

// export interface Coord {
//   lon: number
//   lat: number
// }

// export interface Weather {
//   id: number
//   main: string
//   description: string
//   icon: string
// }

// export interface Main {
//   temp: number
//   feels_like: number
//   temp_min: number
//   temp_max: number
//   pressure: number
//   humidity: number
// }

// export interface Wind {
//   speed: number
//   deg: number
// }

// export interface Rain {
//   "1h": number
// }

// export interface Clouds {
//   all: number
// }

// export interface Sys {
//   type: number
//   id: number
//   country: string
//   sunrise: number
//   sunset: number
// }

  