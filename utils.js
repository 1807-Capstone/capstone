const statesHash = {
  Alabama: 'AL',
  Alaska: 'AK',
  'American Samoa': 'AS',
  Arizona: 'AZ',
  Arkansas: 'AR',
  California: 'CA',
  Colorado: 'CO',
  Connecticut: 'CT',
  Delaware: 'DE',
  'District Of Columbia': 'DC',
  'Federated States Of Micronesia': 'FM',
  Florida: 'FL',
  Georgia: 'GA',
  Guam: 'GU',
  Hawaii: 'HI',
  Idaho: 'ID',
  Illinois: 'IL',
  Indiana: 'IN',
  Iowa: 'IA',
  Kansas: 'KS',
  Kentucky: 'KY',
  Louisiana: 'LA',
  Maine: 'ME',
  'Marshall Islands': 'MH',
  Maryland: 'MD',
  Massachusetts: 'MA',
  Michigan: 'MI',
  Minnesota: 'MN',
  Mississippi: 'MS',
  Missouri: 'MO',
  Montana: 'MT',
  Nebraska: 'NE',
  Nevada: 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  'Northern Mariana Islands': 'MP',
  Ohio: 'OH',
  Oklahoma: 'OK',
  Oregon: 'OR',
  Palau: 'PW',
  Pennsylvania: 'PA',
  'Puerto Rico': 'PR',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  Tennessee: 'TN',
  Texas: 'TX',
  Utah: 'UT',
  Vermont: 'VT',
  'Virgin Islands': 'VI',
  Virginia: 'VA',
  Washington: 'WA',
  'West Virginia': 'WV',
  Wisconsin: 'WI',
  Wyoming: 'WY'
}

const cleanAddress = vicinity => {
  let addressOne
  if (vicinity.includes('#')) {
    addressOne = vicinity.split('#')[0].slice(0, -1)
  } else {
    addressOne = vicinity.split(',')[0]
  }
  return addressOne
}

const cleanCity = vicinity => {
  return vicinity.split(',')[1].slice(1)
}

const cleanState = compoundCode => {
  let state = compoundCode.split(',')[1].slice(1)
  return statesHash[state]
}

const yelpQueryMakerOne = googleResultsArray => {
  let theState = ''
  let iterator = 0
  while (!theState) {
    if (googleResultsArray[iterator].plus_code) {
      theState = cleanState(googleResultsArray[iterator].plus_code.compound_code)
    }
    iterator++;
  }
  let finalQuery = '{\n'
  for (let i = 0; i < googleResultsArray.length/2; i++) {
    finalQuery += `b${i + 1}: business_match(
      name: "${googleResultsArray[i].name}",
      address1: "${cleanAddress(googleResultsArray[i].vicinity)}",
      city: "${cleanCity(googleResultsArray[i].vicinity)}",
      state: "${theState}",
      country: "US",
      limit: 1
  )
  {
      total
      business {
          name,
          id,
          price,
          rating,
          photos,
          location {
              address1,
              city,
              state,
          }
      }
  }
  `
  }
  finalQuery += '}'
  return finalQuery
}

const yelpQueryMakerTwo = googleResultsArray => {
  let theState = ''
  let iterator = 0
  while (!theState) {
    if (googleResultsArray[iterator].plus_code) {
      theState = cleanState(googleResultsArray[iterator].plus_code.compound_code)
    }
    iterator++;
  }
  let finalQuery = '{\n'
  for (let i = Math.round(googleResultsArray.length/2); i < googleResultsArray.length; i++) {
    finalQuery += `b${i + 1}: business_match(
      name: "${googleResultsArray[i].name}",
      address1: "${cleanAddress(googleResultsArray[i].vicinity)}",
      city: "${cleanCity(googleResultsArray[i].vicinity)}",
      state: "${theState}",
      country: "US",
      limit: 1
  )
  {
      total
      business {
          name,
          id,
          price,
          rating,
          photos,
          location {
              address1,
              city,
              state,
          }
      }
  }
  `
  }
  finalQuery += '}'
  return finalQuery
}

module.exports = {cleanAddress, cleanCity, cleanState, yelpQueryMakerOne, yelpQueryMakerTwo}
