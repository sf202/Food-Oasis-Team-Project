//URL variable
const url = 'http://localhost:8080/'


//data variables
const username = document.getElementById('Username')
const password = document.getElementById('Password')
const companyName = document.getElementById('CompanyName')
const companyID = document.getElementById('CompanyID')
const address = document.getElementById('Address')
const city = document.getElementById('City')
const state = document.getElementById('state')
const postalcode = document.getElementById('postalcode')
const phone = document.getElementById('tel')
const email = document.getElementById('email')
const foodCategories = document.getElementById('categoryFilter')

//Date Function to get the Date of Registration
function getCurrentDate(){
    let currentDate = new Date();

    // Get the year, month, and day
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    let day = currentDate.getDate().toString().padStart(2, '0');

    // Create the YYYY-MM-DD format
    formattedDate = `${year}-${month}-${day}`;
}

// This function should be invoked when the submit button is clicked
// function submitBtm() {
//     const supplierID = companyID.value; // Assuming companyID is the SupplierID field
//     const supplierName = companyName.value;
//     const supplierAddress = address.value;
//     const supplierCityState = `${city.value}, ${state.value}`;
//     const supplierZip = postalcode.value;
//     const registrationDate = new Date(); // You may need to format the date accordingly
//     const usernameVal = username.value;
//     const passwordVal = password.value;
//     const foodCategory = FoodCategories.value;
// }

async function postInfo() {
    console.log(foodCategories.value);
    //e.preventDefault()
    let cityState = city.value +', ' + state.value 

    try{
        const response = await fetch(url + 'sellerData', 
        {
            //Lets fetchAPI know we want to post data
            method: 'POST',
            //Lets server know what format of the data
            headers: {
                'Content-Type': 'application/json'
            },
            //What is the actual data sent
            body: JSON.stringify(
                {
                    supplierID: companyID.value,  
                    supplierName: companyName.value, 
                    supplierAddress: address.value, 
                    supplierCityState: cityState,
                    supplierZip: postalcode.value, 
                    registrationDate: formattedDate,
                    username: username.value, 
                    password: password.value,
                    FoodCategories: foodCategories.value,
                    PhoneNumber: phone.value,
                    Email: email.value,
                    FoodCategories:foodCategories.value
                }
            )
        })
        //Prints if
        if (!response.ok) {
            console.log('Something went wrong')
        }
        if (response.ok) {
            //window.location.href = '/src/pages/pform.html'
        }
    }
    catch(error){
        console.log(error)
        console.log("Try Catches Error");
    }
}

  // Function to check if the phone number contains alphanumeric characters
  function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById('tel');
    const phoneNumberValue = phoneNumberInput.value.trim();

    if (/\W/.test(phoneNumberValue)) {
        alert('Phone number cannot contain alphanumeric characters.');
        phoneNumberInput.focus();
        return false;
    }

    return true;
}


// Function to handle form submission
function submitBtm() {
    getCurrentDate();
    postInfo();
    

        // Check phone number validation before proceeding
    // if (!validatePhoneNumber()) {
    //     console.log('Please enter a valid phone number');
    //     return;
    // }
    // ... other form submission logic ...
    // Example: Assuming you want to create a user with the provided data
    // const userData = {
    //     // ... extract other user data from the form ...
    //     phone: document.getElementById('tel').value.trim()
    // };
    // // Call the createUser function with the extracted data
    // createUser(userData);
}



// ... your existing JavaScript code ...
