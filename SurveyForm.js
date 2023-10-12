function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.getElementsByName('gender')).filter(input => input.checked).map(input => input.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (!isValidMobile(mobile) || !isValidEmail(email)) {
        alert('Please enter a valid email and a 10-digit mobile number.');
        return false;
    }
    
    const resultsHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    document.getElementById('popupResults').innerHTML = resultsHTML;
    document.getElementById('popup').style.display = 'block';

    return false; 
}

function limitCheckbox(checkbox) {
    const checkboxes = document.getElementsByName("gender");
    checkboxes.forEach((item) => {
        if (item !== checkbox) {
            item.checked = false;
        }
    });
}

function populateCountryDropdown() {
    const dropdown = document.getElementById("country");

    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        dropdown.appendChild(option);
    });
}

window.onload = populateCountryDropdown;

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupResults').innerHTML = '';
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function validateMobile() {
    const mobileInput = document.getElementById("mobile");
    const mobileValue = mobileInput.value.trim(); 

    const mobileRegex = /^\d{10}$/;

    if (mobileRegex.test(mobileValue)) {
        alert("Valid mobile number: " + mobileValue);
        return true;
    } else {
        alert("Please enter a 10-digit mobile number.");
        return false;
    }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
  }

  function submitForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    if (firstName === "" && lastName === "" && dob === "" && country === "" && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a first Name, Last Name, Date of Birth, Country, Gender, Profession, Email and Mobile Number.");
      return;
    }

    if (firstName === (firstName) && lastName === "" && dob === "" && country === "" && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a Last Name, Date of Birth, Country, Gender, Profession, Email and Mobile Number.");
      return;
    }

    
    if (firstName === (firstName) && lastName === (lastName) && dob === "" && country === "" && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a Date of Birth, Country, Gender, Profession, Email and Mobile Number.");
      return;
    }
    if (firstName === "" && lastName === (lastName) && dob === "" && country === "" && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a First Name, Date of Birth, Country, Gender, Profession, Email and Mobile Number.");
      return;
    }
    if (firstName === (firstName) && lastName === (lastName) && dob === (dob) && country === "" && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a country, Gender, Profession, Email and Mobile Number.");
      return;
    }
    if (firstName === "" && lastName === "" && dob === (dob) && country === "" && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a First name,Last Name, country, Gender, Profession, Email and Mobile Number.");
      return;
    }
    if (firstName === "" && lastName === "" && dob === "" && country === (country) && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a First name, Last Name, Date of Birth, Gender, Profession, Email and Mobile Number.");
      return;
    }
    if (firstName === "" && lastName === "" && dob === "" && country === "" && genderElements.length === 1 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a First name, Last Name, Date of Birth, Country, Profession, Email and Mobile Number.");
      return;
    }
    if (firstName === "" && lastName === "" && dob === "" && country === "" && genderElements.length === 0 && profession === (profession) && email=== "" && mobile === "") {
      alert("Please enter a First name, Last Name, Date of Birth, Country, Gender, Email and Mobile Number.");
      return;
    }
    if (firstName === "" && lastName === "" && dob === "" && country === "" && genderElements.length === 0 && profession === "" && email=== (email) && mobile === "") {
      alert("Please enter a First name, Last Name, Date of Birth, Country, Gender, Prfession and Mobile Number.");
      return;
    }
    if (firstName === "" && lastName === "" && dob === "" && country === "" && genderElements.length === 0 && profession === "" && email=== "" && mobile === (mobile)) {
      alert("Please enter a First name, Last Name, Date of Birth, Country, Gender, Prfession and Email.");
      return;
    }
    if (firstName === "" && lastName === "" && dob === "" && country === (country) && genderElements.length === 1 && profession === (profession) && email=== (email) && mobile === (mobile)) {
      alert("Please enter a First name, Last Name, Date of Birth.");
      return;
    }
    if (firstName === (firstName) && lastName === (lastName) && dob === (dob) && country === (country) && genderElements.length === 0 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a gender, Profession, Email and Mobile.");
      return;
    }

    if (firstName === (firstName) && lastName === (lastName) && dob === (dob) && country === (country) && genderElements.length === 1 && profession === "" && email=== "" && mobile === "") {
      alert("Please enter a Profession, Email and Mobile Number.");
      return;
    }
    if (firstName === (firstName) && lastName === (lastName) && dob === (dob) && country === (country) && genderElements.length === 1 && profession === (profession) && email=== "" && mobile === "") {
      alert("Please enter a Email and Mobile Number.");
      return;
    }

    if (firstName === (firstName) && lastName === (lastName) && dob === (dob) && country === (country) && genderElements.length === 1 && profession === (profession) && email=== (email) && mobile === "") {
      alert("Please enter a Mobile Number Number.");
      return;
    }
    
    if (firstName === "") {
      alert("Please enter a First Name.");
      return;
    }

    if (firstName === "" && lastName === "") {
      alert("Please enter a first Name and Last Name.");
      return;
    }

    if (dob === "") {
      alert("Please enter a Date of Birth.");
      return;
    }
    if (country === "") {
      alert("Please select a country");
      return;
    }

    if (genderElements.length === 0) {
      alert("Please select a gender.");
      return;
    }

    const gender = Array.from(genderElements).map(el => el.value).join(", ");
    if (profession === "") {
      alert("Please enter a Profession.");
      return;
    }
    if (email=== "") {
      alert("Please enter a mail");
      return;
    }

    if (mobile === "") {
      alert("Please enter a Mobile Number.");
      return;
    }

    const popupText = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Date of Birth: ${dob}
      Country: ${country}
      Gender: ${gender}
      Profession: ${profession}
      Email: ${email}
      Mobile Number: ${mobile}
    `;

    alert(popupText);
    document.getElementById("surveyForm").reset();
  }



  function openPopup() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const profession = document.getElementById("profession").value;
    const mobile = document.getElementById("mobile").value;

  }