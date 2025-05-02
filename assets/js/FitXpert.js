window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 0);
});

function bmicalculator(event) {
    event.preventDefault();

    let weight = document.getElementById("calculate-kg").value;
    let height = document.getElementById("calculate-cm").value;
    let bmiCalculator = 0;

    localStorage.setItem("Weight", weight);
    localStorage.setItem("Height", height);


    weight = parseFloat(weight);
    height = parseFloat(height);

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("calculate_message").innerText = "Please enter valid numbers for weight and height.";
        return;
    }

    bmiCalculator = (weight / height / height) * 10000;

    localStorage.setItem("YourBMI", bmiCalculator.toFixed(2)); 

    let bmiMessageElement = document.getElementById("calculate_message");
    let bmiCategoryElement = document.getElementById("calculate_message2");

    bmiMessageElement.innerText = localStorage.YourBMI;

    if (bmiCalculator > 30.0) {
        bmiCategoryElement.innerText = "Obesity";
        bmiCategoryElement.style.color = "red";
    } else if (bmiCalculator >= 25.0 && bmiCalculator <= 29.9) {
        bmiCategoryElement.innerText = "Overweight";
        bmiCategoryElement.style.color = "orange";
    } else if (bmiCalculator >= 18.5 && bmiCalculator <= 24.9) {
        bmiCategoryElement.innerText = "Normal";
        bmiCategoryElement.style.color = "green";
    } else {
        bmiCategoryElement.innerText = "Underweight";
        bmiCategoryElement.style.color = "red";
    }

}

function connectwithus(event) {
    event.preventDefault();

    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let submittedMessage = document.getElementById("submitted");

    localStorage.setItem("FirstName", fname.value);
    localStorage.setItem("LastName", lname.value);
    localStorage.setItem("Email", email.value);

    if (fname.value.trim() === "" || email.value.trim() === "") {
        submittedMessage.innerText = "Please fill up the required fields";
        submittedMessage.style.color = "red"; 
    } else {
        submittedMessage.innerText = "Submitted Successfully";
        submittedMessage.style.color = "green"; 
    }
}

function register() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var street = document.getElementById("street").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var resultMessage = document.getElementById("result-p");

    if (!firstName || !lastName || !street || !phoneNumber || !email) {
        resultMessage.innerText = "Please fill up all the required fields.";
    } else {
        // Your existing logic for successful submission
        resultMessage.innerText = "Submitted Successfully";
    }
}



