let searchInputel = document.getElementById('searchInput');

let searchResultsel = document.getElementById('searchResults');


function createandAppendsearchResult(results){

    // Div Container -- 

    let divContainer = document.createElement('div');

    divContainer.classList.add('result-item');

    searchResultsel.appendChild(divContainer);
    
    // Anchor Title -- 

    let anchorTitle = document.createElement('a');

    anchorTitle.classList.add('result-title');

    anchorTitle.textContent = searchInputel;

    divContainer.appendChild(anchorTitle);

    // Title Break -- 

    let titleBreak = document.createElement('br');

    divContainer.appendChild(titleBreak);

    // Anchor URls -- result-url

    let anchorURL = document.createElement('a');

    anchorURL.classList.add('resulr-url');

    divContainer.appendChild(anchorURL);

    // line break

    let lineBreak = document.createElement('br');

    divContainer.appendChild(lineBreak);

    // Description -- result-description

    let description = document.createElement('p');

    description.classList.add('result-description');

    divContainer.appendChild(description);

};

function displaySearchResults(search_results){

    results =  search_results[4];

    console.log(results);

    createandAppendsearchResult(results);

}


function searchInput(event){

    if ( event.key === "Enter" ){

        searchInputel = searchInputel.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputel;

        let options = {
            method : "GET"
        };

        fetch(url, options)
        .then(function(response){

            return response.json();

        })
        .then(function(jsonData){

            let {search_results} = jsonData; // short form of storing objects and arrays and assigning to a variable

            displaySearchResults(search_results);

        });

    }

}

searchInputel.addEventListener('keydown', searchInput);

