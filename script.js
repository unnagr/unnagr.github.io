// list to store labels 
let labels = [];

// button to get api key
const btn = document.querySelector('#btn')
const api_input = document.querySelector('#api_input')


//citing
const citeBtn = document.querySelector('#cite-btn')
const citeSection = document.querySelector('.cite')

// Instruction link for api
const guide = document.querySelector('.guide')


// codes of all superSectors

// List to store data fetched from the api
const educationHealthList = [];
const totalNonfarmList = [];
const totalPrivateList = [];
const goodsProducingList = [];
const serviceProvidingList = [];
const privateServiceProvidingList = [];
const MiningLoggingList = [];
const miningConstructionList = [];
const constructionList = [];
const manufacturingList = [];
const durableGoodsList = [];
const nonDurableGoodsList = [];
const tradeTransportationList = []
const transportationUtilitiesList = []
const wholesaleTradeList = [];
const RetailTradeList = [];
const informationList = [];
const financialActivitiesList = [];
const professionalServicesList = [];
const leisureHospitalityList = [];
const otherServicesList = [];
const governmentList = [];

// variables to store urls
let educationHealthSeries = ""
let totalNonfarm = ""
let totalPrivate = ""
let goodsProducing = ""
let serviceProviding = ""
let privateServiceProviding = ""
let MiningLogging = ""
let miningConstruction = ""
let construction = ""
let manufacturing = ""
let durableGoods = ""
let nonDurableGoods = ""
let tradeTransportation = ""
let transportationUtilities = ""
let wholesaleTrade = ""
let RetailTrade = ""
let information = ""
let financialActivities = ""
let professionalServices = ""
let leisureHospitality = ""
let otherServices = ""
let government = ""

let apiKey;

// handler for api_key button 
btn.addEventListener('click', async() => {
    const value = api_input.value
    if (value === '') {
        alert('kindly add an api key to fetch data')
    } else {
        apiKey = value
        educationHealthSeries = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU6500000001?registrationkey=${apiKey}`
        totalNonfarm = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0000000001?registrationkey=${apiKey}`
        totalPrivate = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0500000001?registrationkey=${apiKey}`
        goodsProducing = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0600000001?registrationkey=${apiKey}`
        serviceProviding = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0700000001?registrationkey=${apiKey}`
        privateServiceProviding = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU0800000001?registrationkey=${apiKey}`
        MiningLogging = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU1000000001?registrationkey=${apiKey}`
        miningConstruction = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU1500000001?registrationkey=${apiKey}`
        construction = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU2000000001?registrationkey=${apiKey}`
        manufacturing = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU3000000001?registrationkey=${apiKey}`
        durableGoods = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU3100000001?registrationkey=${apiKey}`
        nonDurableGoods = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU3200000001?registrationkey=${apiKey}`
        tradeTransportation = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4000000001?registrationkey=${apiKey}`
        wholesaleTrade = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4100000001?registrationkey=${apiKey}`
        RetailTrade = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4200000001?registrationkey=${apiKey}`
        transportationUtilities = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU4300000001?registrationkey=${apiKey}`
        information = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU5000000001?registrationkey=${apiKey}`
        financialActivities = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU5500000001?registrationkey=${apiKey}`
        professionalServices = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU6000000001?registrationkey=${apiKey}`
        leisureHospitality = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU7000000001?registrationkey=${apiKey}`
        otherServices = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU8000000001?registrationkey=${apiKey}`
        government = `https://api.bls.gov/publicAPI/v2/timeseries/data/CEU9000000001?registrationkey=${apiKey}`
        fetchData(educationHealthList, educationHealthSeries, true)
            .then(() => fetchData(totalNonfarmList, totalNonfarm, false))
            .then(() => fetchData(totalPrivateList, totalPrivate, false))
            .then(() => fetchData(goodsProducingList, goodsProducing, false))
            .then(() => fetchData(serviceProvidingList, serviceProviding, false))
            .then(() => fetchData(privateServiceProvidingList, privateServiceProviding, false))
            .then(() => fetchData(MiningLoggingList, MiningLogging, false))
            .then(() => fetchData(miningConstructionList, miningConstruction, false))
            .then(() => fetchData(constructionList, construction, false))
            .then(() => fetchData(manufacturingList, manufacturing, false))
            .then(() => fetchData(durableGoodsList, durableGoods, false))
            .then(() => fetchData(nonDurableGoodsList, nonDurableGoods, false))
            .then(() => fetchData(tradeTransportationList, tradeTransportation, false))
            .then(() => fetchData(transportationUtilitiesList, transportationUtilities, false))
            .then(() => fetchData(wholesaleTradeList, wholesaleTrade, false))
            .then(() => fetchData(RetailTradeList, RetailTrade, false))
            .then(() => fetchData(informationList, information, false))
            .then(() => fetchData(financialActivitiesList, financialActivities, false))
            .then(() => fetchData(professionalServicesList, professionalServices, false))
            .then(() => fetchData(leisureHospitalityList, leisureHospitality, false))
            .then(() => fetchData(otherServicesList, otherServices, false))
            .then(() => fetchData(governmentList, government, false))
    }
})
async function fetchData(list, url, first_timer) {
    let xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        try {
            if (this.status === 200) {
                let rawdata = JSON.parse(this.responseText)
                let data = rawdata.Results.series[0].data
                console.log(rawdata)
                if (first_timer) {
                    createLabels(data)
                }
                getvalues(data, list)
                if (rawdata.status == "REQUEST_NOT_PROCESSED") {
                    throw "THE API KEY IS INCORRECT"

                } else {
                    if (first_timer) {
                        alert('Success, Click on the box of the economic sector(s) you would like statistics')
                    }
                }
            }
        } catch (e) {
            if (first_timer) {
                guide.style.display = 'block'
                alert("THE API KEY IS INCORRECT, If you do not have an api key click on the link that will appear below the input")
            }
        }
    }
    xhttp.open("GET", url)
    xhttp.send()
}


// fetching values from the json data
function getvalues(data, list) {
    for (var y = data.length - 1; y >= 0; y--) {
        list.push(data[y].value)
    }
}


// These are colors from chart.js utils
const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
    navy: 'rgb(0,0,128)',
    teal: 'rgb(0,128,128)',
    maroon: 'rgb(128,0,0)',
    silver: 'rgb(192,192,192)',
    cyan: 'rgb(30, 132, 73  )',
    lime: 'rgb(0,255,0)',
    olive: 'rgb(128,128,0)',
    magenta: 'rgb(255,0,255)',
    pink: 'rgb(255,105,180)',
    black: 'rgb(0, 0, 0)',
    chocolate: 'rgb(210,105,30)',
    rosyBrown: 'rgb(188,143,143)',
    lightSteel: 'rgb(176,196,222)',
    indigo: 'rgb(75,0,130)',
    aqua: 'rgb(0,255,255)',
};
//    console.dir(CHART_COLORS);

const CHART_COLORS_50_Percent = {
    red: 'rgba(255, 99, 132, 0.5)',
    orange: 'rgba(255, 159, 64, 0.5)',
    yellow: 'rgba(255, 205, 86, 0.5)',
    green: 'rgba(75, 192, 192, 0.5)',
    blue: 'rgba(54, 162, 235, 0.5)',
    purple: 'rgba(153, 102, 255, 0.5)',
    grey: 'rgba(201, 203, 207, 0.5)',
    navy: 'rgba(0,0,128, 0.5)',
    teal: 'rgba(0,128,128, 0.5)',
    maroon: 'rgba(128,0,0, 0.5)',
    silver: 'rgba(192,192,192, 0.5)',
    cyan: 'rgba(30, 132, 73  , 0.5)',
    lime: 'rgba(0,255,0, 0.5)',
    olive: 'rgba(128,128,0, 0.5)',
    magenta: 'rgba(255,0,255, 0.5)',
    pink: 'rgba(255,105,180, 0.5)',
    black: 'rgba(0, 0, 0, 0.5)',
    chocolate: 'rgba(210,105,30, 0.5)',
    rosyBrown: 'rgba(188,143,143, 0.5)',
    lightSteel: 'rgba(176,196,222, 0.5)',
    indigo: 'rgba(75,0,130, 0.5)',
    aqua: 'rgba(0,255,255, 0.5)',
};

const data = {
    labels: labels,
    datasets: [{
            label: 'Education & Health',
            data: educationHealthList,
            borderColor: CHART_COLORS.red,
            backgroundColor: CHART_COLORS_50_Percent.red,
            hidden: true
        },
        {
            label: 'Total Nonfarm',
            data: totalNonfarmList,
            borderColor: CHART_COLORS.orange,
            backgroundColor: CHART_COLORS_50_Percent.orange,
            hidden: true
        },
        {
            label: 'Total Private',
            data: totalPrivateList,
            borderColor: CHART_COLORS.yellow,
            backgroundColor: CHART_COLORS_50_Percent.yellow,
            hidden: true
        },
        {
            label: 'Goods Producing',
            data: goodsProducingList,
            borderColor: CHART_COLORS.green,
            backgroundColor: CHART_COLORS_50_Percent.green,
            hidden: true
        },
        {
            label: 'Service-Providing',
            data: serviceProvidingList,
            borderColor: CHART_COLORS.blue,
            backgroundColor: CHART_COLORS_50_Percent.blue,
            hidden: true
        },
        {
            label: 'Private Service Providing',
            data: privateServiceProvidingList,
            borderColor: CHART_COLORS.purple,
            backgroundColor: CHART_COLORS_50_Percent.purple,
            hidden: true
        },
        {
            label: 'Mining, Logging, and Construction',
            data: miningConstructionList,
            borderColor: CHART_COLORS.grey,
            backgroundColor: CHART_COLORS_50_Percent.grey,
            hidden: true
        },
        {
            label: 'Construction',
            data: constructionList,
            borderColor: CHART_COLORS.navy,
            backgroundColor: CHART_COLORS_50_Percent.navy,
            hidden: true
        },
        {
            label: 'Manufacturing',
            data: manufacturingList,
            borderColor: CHART_COLORS.teal,
            backgroundColor: CHART_COLORS_50_Percent.teal,
            hidden: true
        },
        {
            label: 'Durable Goods',
            data: durableGoodsList,
            borderColor: CHART_COLORS.maroon,
            backgroundColor: CHART_COLORS_50_Percent.maroon,
            hidden: true
        },
        {
            label: 'Non-Durable Goods',
            data: nonDurableGoodsList,
            borderColor: CHART_COLORS.silver,
            backgroundColor: CHART_COLORS_50_Percent.silver,
            hidden: true
        },
        {
            label: 'Trade, Transportation, and Utilities',
            data: transportationUtilitiesList,
            borderColor: CHART_COLORS.cyan,
            backgroundColor: CHART_COLORS_50_Percent.cyan,
            hidden: true
        },
        {
            label: 'Wholesale Trade',
            data: wholesaleTradeList,
            borderColor: CHART_COLORS.lime,
            backgroundColor: CHART_COLORS_50_Percent.lime,
            hidden: true
        },
        {
            label: 'Retail Trade',
            data: RetailTradeList,
            borderColor: CHART_COLORS.lightSteel,
            backgroundColor: CHART_COLORS_50_Percent.lightSteel,
            hidden: true
        },
        {
            label: 'Transportation and Utilities',
            data: transportationUtilitiesList,
            borderColor: CHART_COLORS.olive,
            backgroundColor: CHART_COLORS_50_Percent.olive,
            hidden: true
        },
        {
            label: 'Information',
            data: informationList,
            borderColor: CHART_COLORS.magenta,
            backgroundColor: CHART_COLORS_50_Percent.magenta,
            hidden: true
        },
        {
            label: 'Financial Activities',
            data: financialActivitiesList,
            borderColor: CHART_COLORS.pink,
            backgroundColor: CHART_COLORS_50_Percent.pink,
            hidden: true
        },
        {
            label: 'Professional and Business Services',
            data: professionalServicesList,
            borderColor: CHART_COLORS.indigo,
            backgroundColor: CHART_COLORS_50_Percent.indigo,
            hidden: true
        },
        {
            label: 'Leisure and Hospitality',
            data: leisureHospitalityList,
            borderColor: CHART_COLORS.aqua,
            backgroundColor: CHART_COLORS_50_Percent.aqua,
            hidden: true
        },
        {
            label: 'Other Services',
            data: otherServicesList,
            borderColor: CHART_COLORS.chocolate,
            backgroundColor: CHART_COLORS_50_Percent.chocolate,
            hidden: true
        },
        {
            label: 'Government',
            data: governmentList,
            borderColor: CHART_COLORS.rosyBrown,
            backgroundColor: CHART_COLORS_50_Percent.rosyBrown,
            hidden: true
        },
        {
            label: 'Mining and Logging',
            data: MiningLoggingList,
            borderColor: CHART_COLORS.black,
            backgroundColor: CHART_COLORS_50_Percent.black,
            hidden: true
        },
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            }
        }
    }
};

// chart.js configuration
const myChart = new Chart(
    document.getElementById('myChart'),
    config);

// utility function for createLables
function getMonthFromString(month) {
    return new Date(Date.parse(month + "1, 2012")).getMonth() + 1
}

// Label generation in required format
function createLabels(data) {
    for (var y = data.length - 1; y >= 0; y--) {
        const { year, periodName } = data[y]
        let month = getMonthFromString(periodName)
        let label = month + '/' + year
        labels.push(label)
    }
}

// Page citation 
let newUser = true
window.addEventListener('scroll', () => {
    if (newUser) {
        citeSection.classList.add('citing-open')
        newUser = false
    }
})

citeBtn.addEventListener('click', () => {
    citeSection.classList.remove('citing-open')
})