import { Client, LogLevel } from "@notionhq/client"

const locations = [
  {
    name: 'Din Tai Fung',
    location: { lat: 47.6172005, lng: -122.2011831 }
  }
]

async function getDatabase() {
  const notion = new Client({
    baseUrl: "https://notion.spradling.me",
    logLevel: LogLevel.DEBUG,
  })
  
  try {
    return await notion.databases.query({
      database_id: '9c6a532dc92c4649aadd129906e51383',
    })
  } catch (error) {
      console.error(error)
  }  
}

// async function geocode(restaurant) {
//   console.log(google.Geocoder.geocode({'address': restaurant.address}))
// }

export {
  // geocode,
  getDatabase
}
