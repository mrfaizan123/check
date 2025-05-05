function alert1() {
    if (localStorage.getItem("alertShown")) {
        return;
    }
    
    alert("Please Register first💫for tracking your activity⚠");
    localStorage.setItem("alertShown", "true"); 
}
alert1();


// App Download

document.getElementById("downloadLink").addEventListener("click", function(event) {     
    event.preventDefault();  

    let link = document.createElement("a");     
    link.href = "https://tpoo.in/app-release.apk"; 
    link.setAttribute("download", "ngo-app.apk"); 

    document.body.appendChild(link);     
    link.click();     
    document.body.removeChild(link); 
   setn();
   
  
   
});

function setn() {
   alert("Your app download has started!");
    let get_count = localStorage.getItem('users_count');
   
    if (get_count === null) {
        get_count = 0;
    } else {
        get_count = parseInt(get_count); 
    }

    get_count++; 
    localStorage.setItem('users_count', get_count); 
    console.log(localStorage.getItem('users_count')); 
}

// Background Image Slider
const images = [
    "../images/img1.jpg",
    "../images/img2_s.jpeg",
    "../images/img6.avif",
    "https://assets.change.org/photos/3/td/cz/pytdCZcRKwxmInH-1600x900-noPad.jpg?1589957690",
    "../images/image15.png",
    "../images/image8.png",
];

let currentIndex = 0;
const bannerElement = document.querySelector(".banner");

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    bannerElement.style.backgroundImage = url("${images[currentIndex]}");
}
setInterval(changeBackgroundImage, 5000);

// Toggle Dark Mode
function toggleDarkMode() {
    let button = document.getElementById('dark');
    document.body.classList.toggle('dark-mode');
  
    let isDarkMode = document.body.classList.contains('dark-mode');
    document.body.style.backgroundColor = isDarkMode ? 'rgb(6, 2, 53)' : 'azure';
    document.body.style.color = isDarkMode ? '#ecf0f1' : '#333';
    
    if (isDarkMode) {
        button.innerHTML = "Light Mode";
        button.style.width = "60px";
        button.style.height = "53px";
        button.style.fontSize = "15px";
        button.style.color = "#2c3e50";
        button.style.fontWeight = "450";
    } else {
        button.innerText = "Dark Mode";
    }
}

// Toggle Navigation Menu
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

// Show Reminder Form
function showRemind() {
    let form = document.getElementById('remind-form');
    form.style.display = "flex";
    setTimeout(() => form.classList.add('show'), 10);
}

// Close Reminder Form
function closeRemindForm() {
    let form = document.getElementById("remind-form");
    form.classList.remove("show");
    setTimeout(() => form.style.display = "none", 300);
}

// Handle Reminder Form Submission
// function handleFormSubmit1(event) {
//     event.preventDefault();
//     let get = document.getElementById("num").value;

//     if (get.length < 10) {
//         alert("Please enter a valid number!");
//     } else {
        
//         event.target.reset();
//         alert("Thank you for the reminder💫");
//     }
// }





function handleFormSubmit1(event) {
    event.preventDefault(); // Stop the default form submission

    let inputField = document.getElementById("num");
    let mobileNumber = inputField.value.trim(); // Remove extra spaces

    // Check if the number is exactly 10 digits
    if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert("Please enter a valid 10-digit number!");
        return; // Stop the function if invalid input
    }

    // ✅ Submit the form after successful validation
    event.target.submit();

    // ✅ Reset the form & show confirmation after a short delay
    setTimeout(() => {
        event.target.reset();
        alert("Thank you for the reminder💫");
    }, 200);
}


// Show Login Form
function showLoginForm() {
    let form = document.getElementById("login-form");
    form.style.display = "flex";
    setTimeout(() => form.classList.add("show"), 10);
}

// Close Login Form
function closeLoginForm() {
    let form = document.getElementById("login-form");
    form.classList.remove("show");
    setTimeout(() => form.style.display = "none", 300);
}

// Handle Login Form Submission
function handleFormSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    event.target.submit();
    event.target.reset();
}

// Show User Profile
function showUserProfile() {
    let name = localStorage.getItem("name");
    let status = document.getElementById('s');
    let button = document.getElementById('sub');

    status.style.fontSize = '19px';
    status.style.color = 'blue';

    let totalDonations = parseInt(localStorage.getItem("totalDonations")) || 0;
    document.getElementById("profile-name").textContent = name;
    document.getElementById("result").textContent = ₹${totalDonations};
    
    let level = updateLevel(totalDonations);
    updateCircularProgress(totalDonations, level);

    let profileBox = document.getElementById("profile-box");
    profileBox.style.display = "flex";
    status.innerText = profileBox.style.display === "flex" ? "Active" : "Inactive";

    button.addEventListener('click', function() {
        localStorage.removeItem('totalDonations');
        alert("Press the (keep) to download your certificate💫(download app->about me)");
    });
}

// Close User Profile
function closeUserProfile() {
    document.getElementById("profile-box").style.display = "none";
}

// Update Level Based on Donations
function updateLevel(totalDonations) {
    document.getElementById("level").style.color = 'Blue';
    let level = "Sprout";

    if (totalDonations >= 200 && totalDonations <= 500) {  
        level = "Advocate";  
    } else if (totalDonations > 500) {  
        level = "Pioneer";  
    }

    document.getElementById("level").textContent = level;
    return level;
}

// Circular Progress for Donation Levels
function updateCircularProgress(totalDonations, level) {
    const linesContainer = document.getElementById("lines-container");
    const levelLabel = document.getElementById("level-label");
    linesContainer.innerHTML = "";

    const totalLines = 100;
    const thresholds = { sprout: 200, advocate: 500, max: 1000 }; 
    const sproutFill = Math.floor((thresholds.sprout / thresholds.max) * totalLines);
    const advocateFill = Math.floor((thresholds.advocate / thresholds.max) * totalLines);
    const fillLines = Math.min(Math.floor((totalDonations / thresholds.max) * totalLines), totalLines);

    for (let i = 0; i < totalLines; i++) {
        const line = document.createElement("div");
        line.classList.add("line");
        line.style.transform = rotate(${(220 / totalLines) * i}deg);
        line.style.background = "white"; 

        if (i < fillLines) {
            if (i < sproutFill) {
                line.style.background = "rgb(3, 31, 193)"; 
            } else if (i < advocateFill) {
                line.style.background = "rgb(234, 0, 0)"; 
            } else {
                line.style.background = "rgb(9, 255, 0)"; 
            }
            line.style.boxShadow = 0 0 10px ${line.style.background};
        }

        linesContainer.appendChild(line);
    }

    levelLabel.textContent = level;
    linesContainer.style.animation = level === "Pioneer" ? "pulse 2s infinite" : "";
}

// Send Message
function sendm(event) {
    let textArea = document.getElementById('text');
    let message = textArea.value.trim();

    if (message !== "") {  
        alert("Thank you for your message 🤗");

        // ✅ Form ko manually submit karein
        event.target.form.submit();

        // ✅ Form reset karne ke liye thoda delay
        setTimeout(() => {
            textArea.value = "";
        }, 500);
    } else {
        alert("Please write a message before sending.");
        event.preventDefault(); // ❌ Submit rokne ke liye
    }
}
