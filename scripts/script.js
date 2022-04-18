let server = `default`;

document.addEventListener('DOMContentLoaded',init);

function init(event){
    document.querySelector(`#serverSelect`).addEventListener('change',(event)=>{
        server = event.target.value.toLowerCase();
    })

    document.querySelector("#searchButton").addEventListener('click', searchForPlayer)
}

function searchForPlayer(searchEvent){
    searchEvent.preventDefault();
    const nameToSearch = document.querySelector(`#searchName`).value.replaceAll(` `,`&`);
        if(server != `default` && nameToSearch != ''){
            // clear old list data
            clearPlayerList();
            console.log(`name to search: ${nameToSearch} // server to search in: ${server}`);
            // remove the server warning if it exists
            if(document.querySelector(`#noServerWarning`) != null){
                document.querySelector(`#noServerWarning`).remove();
            }
            // build out the functionality with the API
            buildPlayerList(nameToSearch);
        }
        else{
            const serverWarning = document.createElement(`p`);
            serverWarning.innerText = `Please select a server from the dropdown box and type a name into the input field to search `
            serverWarning.id = `noServerWarning`
            if(document.querySelector(`#noServerWarning`) === null){
                document.querySelector('#characterPanel').appendChild(serverWarning);
            }
        }
}

function buildPlayerList(nameToSearch) {
    fetch(`https://xivapi.com/character/search?name=${nameToSearch}&server=${server}`)
        .then(resp => {
            document.querySelector(`#searchButton`).disabled = true;
            return resp.json();
        })
        .then(data => {
            // console.log(data['Results']);
            const playerList = data['Results'].slice(4);
            // debugger;
            console.log(playerList);
            for (const player of playerList) {
                const { Avatar, Name } = player;
                //debugger;
                const li = document.createElement(`li`);
                li.className = 'playerLI';
                li.id = player[`ID`];

                li.innerHTML = `
                            <img src=${Avatar}>
                            <h3>${Name}</h3>
                            `;
                li.addEventListener('click', buildCharacterInfo);
                document.querySelector('#searchResults').appendChild(li);
            }
            document.querySelector(`#searchButton`).disabled = false;
        });
}

function buildCharacterInfo(listEvent){
    fetch(`https://xivapi.com/character/${listEvent.target.parentNode.id}`).then(callForResp => callForResp.json()).then(playerData => {
                        console.log(playerData);
                        const { Name, ActiveClassJob, Portrait } = playerData[`Character`];
                        const playerName = document.createElement('h2');
                        playerName.innerText = Name;
                        const playerPortrait = document.createElement('img');
                        playerPortrait.src = Portrait;
                        const playerJob = document.createElement('h3');
                        playerJob.innerText = ActiveClassJob[`UnlockedState`][`Name`];
                        const playerJobLevel = document.createElement(`h4`);
                        playerJobLevel.innerText = ActiveClassJob[`Level`];

                        const searchResults = document.createElement(`div`);
                        searchResults.id = `playerInfo`;
                        clearPlayerInfo();
                        document.querySelector('#resultsDetails').appendChild(searchResults);

                        searchResults.appendChild(playerName);
                        searchResults.appendChild(playerPortrait);
                        searchResults.appendChild(playerJob);
                        searchResults.appendChild(playerJobLevel);

                    });
                }

function clearPlayerInfo() {
    if (document.querySelector('#playerInfo') != null) {
        document.querySelector('#playerInfo').remove();
    }
}

function clearPlayerList() {
    if(document.querySelector('.playerLI') != null){
        for (const listItem of document.querySelectorAll(`.playerLI`)) {
            listItem.remove();
        }
    }
}
