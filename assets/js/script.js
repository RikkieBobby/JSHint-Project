const API_KEY = "aIUOcErWKLLJho-NBzG4DHGfSV4";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById('resulrtsModal'));

document.getElementById('status').addEventListener('click', e => getStatus(e));

async fucntion getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data.expiry);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {

    let heading = 'API key status';
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>;`

    document.getElementById("resulstModalTitle").innerText = heading;
    document.getElementById("results.cotent").innerHTML = results;

    resultsModal.show();
}