function injectButton() {
    // Prepare the button to inject
    const injectElement = document.createElement('button');
    injectElement.className = 'questionSection-button';
    injectElement.innerHTML = 'Go To Questions Section';
    injectElement.id = 'questionSection-button';

    // Style
    injectElement.style.fontSize = '15x';
    injectElement.style.backgroundColor = '#252f3e';
    injectElement.style.color = '#ffffff';
    injectElement.style.borderRadius = '10px';

    // Find the title element and insert the button after it
    const targetElement = document.getElementById('title_feature_div');
    targetElement.insertAdjacentElement('afterend', injectElement);
}

// Use the url to find the url for the questions page and go there
function goToQandA() {
    const url = document.URL;
    const regex = new RegExp("^(http[s]?://[^/]+)/(?:.+?/)?(?:dp|gp/product|asin)/(?:.+?/)?([a-zA-Z0-9]{10})(?:[/?]|$)", "i");
    const matches = url.match(regex);
    if (matches && matches[1] && matches[2]) { 
        var scheme_and_host = matches[1];
        var asin = matches[2];
        var questions_url = `${scheme_and_host}/ask/questions/asin/${asin}`;
        window.open(questions_url, '_blank');
    }
    else {
            alert("URL does not match expected pattern");
    }
}

// Call the function to inject the button
injectButton();

// Add an event listener to call the function to go to the questions page when the button is clicked
document.getElementById('questionSection-button').addEventListener('click', goToQandA);
