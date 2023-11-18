let searchInputel = document.getElementById('searchInput');

let searchResultsel = document.getElementById('searchResults');

 let spinnnerel = document.getElementById('spinner');


function createandAppendsearchResult(results){

    let {link, title, description} = results;

    // Div Container -- 

    let divContainer = document.createElement('div');

    divContainer.classList.add('result-item');
    
    // Anchor Title -- 

    let anchorTitle = document.createElement('a');

    anchorTitle.classList.add('result-title');

    anchorTitle.textContent = title;

    divContainer.appendChild(anchorTitle);

    // Title Break -- 

    let titleBreak = document.createElement('br');

    divContainer.appendChild(titleBreak);

    // Anchor URls -- result-url

    let anchorURL = document.createElement('a');

    anchorURL.classList.add('resulr-url');

    anchorURL.href = link;

    anchorURL.target = "_blank";

    anchorURL.textContent = link;

    divContainer.appendChild(anchorURL);

    // line break

    let lineBreak = document.createElement('br');

    divContainer.appendChild(lineBreak);

    // Description -- result-description

    let Resultdescription = document.createElement('p');

    Resultdescription.classList.add('result-description');

    Resultdescription.textContent = description;

    divContainer.appendChild(Resultdescription);

    searchResultsel.appendChild(divContainer);

};


function displaySearchResults(searchResults){

    spinnnerel.classList.toggle("d-none");

    for ( let results of searchResults ){

        createandAppendsearchResult(results);

    }

}


function searchInput(event){

    if ( event.key === "Enter" ){

        spinnnerel.classList.toggle("d-none");

        searchResultsel.textContent = "";

        let searchInput = searchInputel.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        let options = {
            method : "GET"
        };

        fetch(url, options)
        .then(function(response){

            return response.json();

        })
        .then(function(jsonData){

            let { search_results } = jsonData; // short form of storing objects and arrays and assigning to a variable

            displaySearchResults(search_results);

        });

    }

}

searchInputel.addEventListener('keydown', searchInput);

