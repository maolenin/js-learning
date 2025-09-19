const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function search_destination(event) {
    event.preventDefault();
    const input = document.getElementById('search').value.toLowerCase();    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';    

    fetch('travel_recommendation_api.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let itemsToDisplay = [];
        let categoryFound = false;
        
        switch (input) {
            case 'countries':
            case 'country':
                itemsToDisplay = data.countries;
                categoryFound = true;
                break;
            case 'beach':
            case 'beaches':
                itemsToDisplay = data.beaches;
                categoryFound = true;
                break;
            case 'temple':
            case 'temples':
                itemsToDisplay = data.temples;
                categoryFound = true;
                break;
            default:
                alert("Sorry, We don't have that category");
                console.log('Didnt find')
        }
        console.log(itemsToDisplay);      
        if (categoryFound) {
            resultDiv.innerHTML = '';

            if (input.startsWith('countr')) {   
                itemsToDisplay.forEach(item => {
                const itemDiv = document.createElement('div');

                item.cities.forEach( city => {
                    itemDiv.className = 'item-card'; // Add a class for styling
                    itemDiv.innerHTML = `
                    <div class="destiny-card">
                        <img src="${city.imageUrl}">
                        <h3>${city.name}</h3>    
                        <p>${city.description}</p>
                        <button id="visit">visit</button>
                    </div>
                    `;
                    resultDiv.appendChild(itemDiv);
                    });
                });           
            }
            else {
                itemsToDisplay.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item-card'; // Add a class for styling
                itemDiv.innerHTML = `
                    <div class="destiny-card">
                        <img src="${item.imageUrl}">                    
                        <h3>${item.name}</h3>         
                        <p>${item.description}</p>
                        <button id="visit">visit</button>
                    </div>
                `;
                resultDiv.appendChild(itemDiv);
                });
            }
        } else {            
            resultDiv.innerHTML = 'Condition not found.';
        }      
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });    
}

btnSearch.addEventListener('click', search_destination);
//console.log(data);


