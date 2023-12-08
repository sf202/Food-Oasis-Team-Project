//google API key
const apiKey = 'AIzaSyAkW0iGM8DniteJO7xa_yEuJseeFGQJLBM'



//URL variable
const url = 'http://localhost:8080/'

//Functions to change pages
document.addEventListener("DOMContentLoaded", function() {
    const acceptButton = document.getElementById("seller");
    acceptButton.addEventListener("click", function() {
    window.location.href = "/src/pages/rform.html";
});
});

// Added a JavaScript function to navigate to the sellers login page
function navigateToSellersLogin() {
    window.location.href = "sellers-login.html"; 
}

//Main Page Map
//Variables for Map Functions
let map;
let currentMarker;
let currentMarkerTitle;
let currentMarkerLocation;
let address = [];
let supplierName = [];
let supplierCategory = [];
let coordinates = [];
let hardCodedMarker = [];
let supplierMarker = [];
let markers = [];
let selectedCategory
//Hard Coded Variables
const arrayWithHardcodedNames = [
    'Feeding GA Families',
    'St. Vincent De Paul Society',
    'Project Open Hand - Atlanta',
    'Action Ministries - Atlanta',
    'FreeFoodCommune',
    'Sconiers Homeless Preventive Organization - Food Pantry',
    'Atlanta Inner-City Ministry Food Pantry',
    'REDEEMED Community Outreach Food Pantry',
    'Lutheran Community Food Ministry',
    'Wheat Street Baptist Church Food Pantry',
    'Antioch Urban Ministries Food Pantry',
    'Feeding GA Families',
    'Buckhead Christian Ministry Food Pantry',
    'Butler Street CME Church Food Pantry',
    'Calvary United Methodist Church Food Pantry',
    'Caring for Others Food Pantry',
    'Clifton United Methodist Church Food Bank',
    'Emmaus House Food Pantry',
    'Walmart SuperCenter',
    'Walmart SuperCenter',
    'McDonald',
    'McDonald',
    'McDonald',
    'Walmart SuperCenter',


    // Add more names as needed
  ];
  
const hardCodedAddresss = [
    '2514 W Point Ave, Atlanta,  GA, 30337',
    '2050-C Chamblee Tucker Rd, Atlanta, GA, 30341',
    '176 Ottley Drive NE, Atlanta,GA , 30324',
    '458 Ponce de Leon Ave NE, Atlanta, GA, 30308',
    '1560 Memorial Drive SE, Atlanta, GA, 30317',
    '848 Pegg Rd, Atlanta,  GA, 30274',
    '1966 Lakewood Terrace, Atlanta,, GA, 30315',
    '555 Hopkins Street SW, Bldg A, Atlanta, GA,  30310',
    '731 Peachtree St NE, Atlanta, GA, 30308',
    '18 William Holmes Borders, Sr. Drive, Atlanta,  GA,  30312',
    '466 Northside Drive, Atlanta, GA , 30318',
    '2514 W Point Ave., Atlanta, GA, 30337',
    '2847 Piedmont Rd. NE, Atlanta, GA, 30305',
    '23 Jesse Hill Jr. Drive SE, Atlanta, GA, 30303',
    '1471 Ralph David Abernathy Blvd SW, Atlanta, GA, 30310',
    '3537 Browns Mill Rd., Atlanta, GA, 30354',
    '2918 Clifton Church Road, Atlanta,  GA, 30316',
    '1017 Hank Aaron Dr SW, Atlanta, GA, 30315',   
    ' 844 Cleveland Ave, East Point, GA, 30344',  
    ' 1105 Research Center Drive Atlanta, Atlanta Point, GA, 30331',
    ' 3670 Cascade Rd, Atlanta, GA, 30311',  
    ' 6000 N Terminal Pkwy Suite 4000, Atlanta, GA, 30320',  
    ' 550 Gray Hwy, Macon, GA, 31201',
    ' 1401 Gray Hwy, Macon, GA, 31211',
];
let supplierAddresses = [
    /*put addresses here; can be geocode or street address */
   /* { lat: 33.42282051456218, lng: -84.2339243975608 }, 
    { lat: 33.52282051456218, lng: -84.2339243975608 }, 
    { lat: 33.22282051456218, lng: -84.2339243975608 }, 
    { lat: 33.32282051456218, lng: -84.2339243975608 },
    { lat: 28.46, lng: -80.53 },   // 28.396837 -80.605659   28.46,-80.53  33.62838334036501, -84.47175545088831
    // Local FREE FOOD RESOURCES */
    { lat:33.62838334036501 , lng:-84.47175545088831  },
    { lat:33.88612664717054 , lng:- -84.30397735882603},// 33.88612664717054, -84.30397735882603
    { lat:33.776904030269144 , lng:-84.35469669708337},  //33.776904030269144, -84.35469669708337
    { lat:33.77398278288585 , lng: -84.37184978766753 },//33.77398278288585, -84.37184978766753
    { lat:33.748697592298925 , lng:-84.33667771835168   },//33.748697592298925, -84.33667771835168
    { lat:33.545905354012625 , lng: -84.39206687079991  },// 33.545905354012625, -84.39206687079991
    { lat:33.70196386452506 , lng:-84.3851018490369 },//33.70196386452506, -84.3851018490369
    { lat:33.74016987316225 , lng: -84.43077794534008       },//33.74016987316225, -84.43077794534008
    { lat:33.77495509866906 , lng:-84.38405249136227        },// 33.77495509866906, -84.38405249136227
    { lat:33.75543943510453 , lng: -84.375836062528         },//33.75543943510453, -84.375836062528
    { lat:33.76733055953841 , lng: -84.4050202281499     },//33.76733055953841, -84.4050202281499
    { lat:33.832613263730714 , lng:-84.36763954554489      },   //{ lat: 33.62808070740952, lng, -84.47147595962609},  33.76711650572798, -84.40518115963775
    { lat:33.83250973984249 , lng:-84.36759877601773     }, //33.83250973984249, -84.36759877601773
    { lat:33.75404649496749 , lng:-84.38100035698592      },//33.75404649496749, -84.38100035698592
    { lat:33.74194552406991 , lng:   -84.43579136252869   },  //33.74194552406991, -84.43579136252869
    { lat:33.660103733393235 , lng:  -84.38643617233245    }, //33.660103733393235, -84.38643617233245
    { lat: 33.70149883682402, lng: -84.30002029136628     }, //33.70149883682402, -84.30002029136628
    { lat:33.72699221223137 , lng: -84.38860488554154    },//33.72699221223137, -84.38860488554154  
    { lat:33.69090837650457 , lng: -84.41268848156022    },//33.69090837650457, -84.41268848156022
    { lat:33.740141546356284 , lng: -84.50659323114735    },//33.740141546356284, -84.50659323114735
    { lat:33.7240101028159 , lng: -84.50766210658522    },//33.7240101028159, -84.50766210658522
    { lat:33.645649763068114 , lng: -84.42803339972477    },//33.645649763068114, -84.42803339972477
    { lat:32.853171167281715 , lng: -83.62851224462479    },//32.853171167281715, -83.62851224462479
{ lat:32.87965585992675 , lng: -83.60484544628063    },//32.87965585992675, -83.60484544628063
];


function initMap() {
    const mapOptions = {
        center: { lat: 33.75243, lng: -84.39354 },
        zoom: 12,
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'Geocodable address',
            from: '1FjVvT2lxm_meECyU7Mn1TaZOvvwu3rJnpZztPqvr',
        },
    });

    layer.addListener('click', function (event) {
        document.getElementById('end').value = event.row.Address.value;
        calculateAndDisplayRoute();
    });

    layer.setMap(map);

    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

    const control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    document.getElementById('but').addEventListener('click', function () {
        calculateAndDisplayRoute();
    });

    pinAllSellers();
}


//Route Distance via Driving Functions
async function calculateAndDisplayRoute() {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;

    directionsService.route(
        {
            origin: start,
            destination: end,
            travelMode: 'DRIVING',
        },
        function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);

                // Extract distance and duration from the response
                const route = response.routes[0].legs[0];
                const distance = route.distance;
                const duration = route.duration;

                // Update the distance and time information on the page
                updateDistanceTimeInfo(distance, duration);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        }
    );
}

// Rest of the code remains the same.
function updateDistanceTimeInfo(distance, duration) {
    const infoElement = document.getElementById('distance-time-info');
    infoElement.innerHTML = `Distance: ${distance.text}<br>Duration: ${duration.text}`;
}

//Location and Zip Functions
async function useMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                currentMarkerLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                currentMarkerTitle = 'User Location';
                updateLocation(currentMarkerTitle, currentMarkerLocation);
            },

            (error) => {
            console.error('Error getting user location:', error);
            }, 
            {
                //This fixes the delay (not sure if it affects accuracy by too much)
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: Infinity
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

async function searchZipCode() {
    const zipCode = document.getElementById('zip-code').value;
    if (zipCode) {
        try {
            currentMarkerLocation = await geocodeZipCode(zipCode);
            
            currentMarkerTitle = 'Zip Code Location'
            updateLocation(currentMarkerTitle, currentMarkerLocation);

        } catch (error) {
            console.error('Error geocoding zip code:', error);
            alert('Invalid zip code or unable to find location.');
        }
    } else {
        alert('Please enter a zip code.');
    }
}

function geocodeZipCode(zipCode) {
    return new Promise((resolve, reject) => {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: zipCode }, (results, status) => {
            if (status === 'OK' && results.length > 0) {
                resolve(results[0].geometry.location);
            } else {
                reject(new Error('Invalid zip code or unable to find location.'));
            }
        });
    });
}

function geocodeAddress() {
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('addressInput').value;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            var location = results[0].geometry.location;
            console.log('Latitude: ' + location.lat());
            console.log('Longitude: ' + location.lng());
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
}

//General Map Functions
async function pinAllSellers(){
    await getSupplierAddresses()
    .then(getCoordinates)
    .then(pinSellers)
}

async function updateLocation(markerTitle, location)
{
    map.setCenter(location);

    if (currentMarker) {
        currentMarker.setMap(null);
    }
    //RePins Supplier Markers to recalculate distance from new location
    if(supplierMarker) {
        setMapOnAll(null);
        markers = [];
        pinSellers(selectedCategory);
    }

    currentMarker = await addMarker(map, markerTitle, location);
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
}


// 40.7484° N, 73.9857° W

//-----------------------------------------------------------------------------------------------------------------------------


async function addMarker(toMap, title, location, address) {
    var marker = new google.maps.Marker({
        position: location,
        map: toMap,
        title: title
    });

    markers.push(marker);

    var distance = google.maps.geometry.spherical.computeDistanceBetween(map.center, location) * 0.000621371;
    distance = distance.toFixed(2);

    var infoContent = `<div style="color: black;">
        <h3 style="color: black;">${title}</h3>
        <p style="color: black;">${address}</p>
        <p style="color: black;">${distance}mi</p>
        <p style="color: black;">Link: <a href="#" id="linkPlaceholder">[Link]</a></p>
        </div>`;

    // Create an InfoWindow with the content
    var infowindow = new google.maps.InfoWindow({
        content: infoContent
    });

    //When ready can make infowindow html template in a separate html file, but for now just using html string
        /*fetch('infowindow-content.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load infowindow-content.html');
                }
                return response.text();
            })
            .then(htmlContent => {
                // Set the content of the InfoWindow to the loaded HTML
                infowindow.setContent(htmlContent);

                // Add a click event listener to the marker
                marker.addListener('click', function () {
                    // Open the InfoWindow when the marker is clicked
                    infowindow.open(map, marker);
                });
            })
            .catch(error => {
                console.error(error);
            });*/
   
    //Opens and closes the Marker's InfoWindow
    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
        infowindow.close(map, marker);
    });

    return marker;
}


async function pinSellers(category) {

    //First probably need to move the JS code from rform.html to an external .js file
    
    //Then above import from that file into this js file (something like this at the top of this file: 
    //import {getAllSuppliers} from './path/to/file.js')

    //Then loop through getAllSuppliers...

    //var suppliers = getAllSuppliers();

    //for (var i = 0; i < suppliers.length; i++) { //do this instead later



    setMapOnAll(null);
    markers = [];

    //Keeps track of the Zip Code or GPS location marker 
    if (currentMarker){
        currentMarker = await addMarker(map, currentMarkerTitle, currentMarkerLocation);
    }
    

    if (category === 'all' || category === undefined) {
   //Adds the hard coded Seller Markers to the map
        for (let i = 0; i < supplierAddresses.length; i++) {
            hardCodedMarker = await addMarker(map, arrayWithHardcodedNames[i], supplierAddresses[i], hardCodedAddresss[i]);
        }
        if(coordinates.length > 0){
            for(let i = 0; i < coordinates.length; i++){
                    supplierMarker = await addMarker(map, supplierName[i], coordinates[i], address[i]);  
            }
        }
    }

    else {
        db_supplierCategory(category);
        for (let i = 0; i < supplierAddresses.length; i++) {
            const isFoodBank = !['Walmart SuperCenter', 'McDonald'].includes(arrayWithHardcodedNames[i]);
            const isSupermarket = arrayWithHardcodedNames[i] === 'Walmart SuperCenter';
            const isFastFood = arrayWithHardcodedNames[i] === 'McDonald';

            if (
                (category === 'foodbank' && isFoodBank) ||
                (category === 'supermarket' && isSupermarket) ||
                (category === 'fastfood' && isFastFood)
            ) {
                hardCodedMarker = await addMarker(map, arrayWithHardcodedNames[i], supplierAddresses[i], hardCodedAddresss[i]);
            }
        }
    }
}

async function db_supplierCategory(category){
    if(coordinates.length>0){
        for(let i = 0; i < coordinates.length; i++){
            if(supplierCategory[i] === 'foodbank' && category === 'foodbank'){
                supplierMarker = await addMarker(map, supplierName[i], coordinates[i], address[i]); 
            }
            else if(supplierCategory[i] === 'supermarket' && category === 'supermarket'){
                supplierMarker = await addMarker(map, supplierName[i], coordinates[i], address[i]); 
            }
            else if(supplierCategory[i] === 'fastfood' && category === 'fastfood'){
                supplierMarker = await addMarker(map, supplierName[i], coordinates[i], address[i]); 
            }
            else if(supplierCategory[i] === 'farmers_market' && category === 'farmers_market'){
                supplierMarker = await addMarker(map, supplierName[i], coordinates[i], address[i]); 
            }
            else if(supplierCategory[i] === 'groceryStore' && category === 'groceryStore'){
                supplierMarker = await addMarker(map, supplierName[i], coordinates[i], address[i]); 
            }
        }
    }
}

//Gets Supplier Addresses from database
async function getSupplierAddresses() {
    try{
        const response = await fetch(url + 'supplierAddress', 
        {
            //Lets fetchAPI know we want to post data
            method: 'GET',
        })
        if(response.status === 200) {
            console.log(response)
            const data = await response.json()

            for (let i = 0; i < data.length; i++) {
                address[i] = data[i].SupplierAddress + ", " +
                data[i].SupplierCityState + " " + data[i].SupplierZip;
                supplierCategory[i] = data[i].FoodCategories 

                supplierName[i] = data[i].SupplierName;

                console.log(supplierName[i] + ": " + address[i])
                console.log("Food Category: " + supplierCategory[i])
            }
        }
        else if (response.status === 204) {
            console.log("Database is empty");
            pinSellers('all');
        }
    
        //Prints if  
        else if (!response.ok) {
            console.log('Something went wrong')
        }
    }
    catch(error){
        console.log("Error with getSupplierAddress")
    }
}

//Gets Coordinates from Supplier Addresses
async function getCoordinates() {
    for(let i = 0; i < address.length; i++) {
    
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address[i])}&key=${apiKey}`)
        if(!response.ok){
            console.log("Couldn't get coordinates")
        }
        const data = await response.json()


        if(!data || data.status === 'ZERO_RESULTS') {
            console.log('No results found')
        }
        else{

        coordinates[i] = data.results[0].geometry.location 
        console.log(coordinates[i])
    }
    }
}
// Handdling requests for different food categories.
function getFoodByCategory(category) {
    fetch(`/foods?category=${category}`) // Adjust the endpoint to your server route handling food categories
    .then(handleErrors)
    .then((data) => {
        console.log(data); // Log or handle retrieved data
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
function testmain() {
    alert("hello");
   
    
}

// Add an event listener to the dropdown menu to call pinSellers with the selected category
document.getElementById('categoryFilter').addEventListener('change', function () {
    selectedCategory = this.value;
    pinSellers(selectedCategory);
});




// Add an event listener to the dropdown menu to adjust map zoom level
document.getElementById('radiusDropdown').addEventListener('change', function () {
    const selectedRadius = parseInt(this.value); // Parse the selected radius as an integer

    // Check if the selectedRadius is a valid number
    if (!isNaN(selectedRadius)) {
        // Adjust the map's zoom level based on the selected radius
        const newZoomLevel = calculateZoomLevel(selectedRadius);

        // Set the new zoom level for the map
        map.setZoom(newZoomLevel);
    }
});

// Function to calculate the zoom level based on the selected radius
function calculateZoomLevel(radius) {
    // You can customize this formula based on your specific requirements
    // For example, you may want to set a minimum and maximum zoom level
    // This is a simple example, you may need to adjust it based on your specific use case
    const minZoom = 3;
    const maxZoom = 25;
    const zoomIncrement = 5;

    // Calculate the zoom level based on the radius
    const zoomLevel = Math.min(maxZoom, Math.max(minZoom, Math.ceil(radius / zoomIncrement) * zoomIncrement));

    return zoomLevel;
}
