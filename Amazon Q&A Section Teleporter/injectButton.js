function injectButton() {
    // Prepare the button to inject
    const injectElement = document.createElement('button');
    injectElement.className = 'questionSection-button';
    injectElement.innerHTML = 'Go To Questions Section';
    injectElement.id = 'questionSection-button';
    injectElement.style.fontSize = '20px';
    injectElement.style.backgroundColor = '#252f3e';
    injectElement.style.color = '#ffffff';
    injectElement.style.borderRadius = '15px';

    // Append the button to the site (change this to add it by the title)
    document.body.appendChild(injectElement);
}

function goToQandA() {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
        const url = tabs[0].url; // Get the URL from the first tab object
        const regex = new RegExp("^(http[s]?://[^/]+)/(?:.+?/)?(?:dp|gp/product|asin)/(?:.+?/)?([a-zA-Z0-9]{10})(?:[/?]|$)", "i");
        const matches = url.match(regex);
        if (matches && matches[1] && matches[2]) { 
            var scheme_and_host = matches[1];
            var asin = matches[2];
            var questions_url = `${scheme_and_host}/ask/questions/asin/${asin}`;
            chrome.tabs.create({url: questions_url}); // Use chrome.tabs.create to open the URL in a new tab
        }
        else {
                alert("URL does not match expected pattern");
        }
    });
}


injectButton();
                
document.getElementById('questionSection-button').addEventListener('click', goToQandA);
