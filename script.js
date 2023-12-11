document.querySelectorAll('.scrollToSection').forEach(function(link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('#mainForm');
    });
});

function scrollToSection(sectionId) {
    let section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var numberOfSnowballs = 120;

    for (var i = 1; i <= numberOfSnowballs; i++) {
        var snowball = document.createElement("div");
        snowball.className = "snow-ball";
        snowball.style.top = Math.random() * 100 + "vh";
        snowball.style.left = Math.random() * 100 + "vw";
        snowball.style.width = Math.random() * 12 + 4 + "px";
        snowball.style.height = snowball.style.width; 
        snowball.style.backgroundColor = "rgba(255, 255, 255, " + (Math.random() * 0.5 + 0.3) + ")"; 
        document.querySelector(".snow-ball-container").appendChild(snowball);
    }
});

function setToCookies() {
    var randomUserData = getRandomUserDataFromCookies();

    let fullName = document.querySelector('input[name="fullName"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let subject = document.querySelector('input[name="subject"]').value;

    if (fullName && email && subject) {
        var now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 1000);

        document.cookie = "fullName=" + encodeURIComponent(fullName) + "; expires=" + now.toUTCString();
        document.cookie = "email=" + encodeURIComponent(email) + "; expires=" + now.toUTCString();
        document.cookie = "subject=" + encodeURIComponent(subject) + "; expires=" + now.toUTCString();

        if (randomUserData) {
            alert("You are the Secret Santa for:\n" + randomUserData);
        } else {
            alert("We will send you our helper soon!");
        }
    } else {
        alert("Please fill in all the fields.");
    }
}

function getRandomUserDataFromCookies() {
    let allCookies = document.cookie.split(';');

    if (allCookies.length < 3) {
        return null;
    }

    let randomCookieIndex = Math.floor(Math.random() * allCookies.length);
    let output = '';

    const attributes = ['fullName', 'email', 'subject'];

    for (let i = 0; i < attributes.length; i++) {
        output += attributes[i] + ': ' + decodeURIComponent(allCookies[randomCookieIndex].trim().split('=')[1]) + '\n';
        randomCookieIndex = (randomCookieIndex + 1) % allCookies.length;
    }

    return output;
}
