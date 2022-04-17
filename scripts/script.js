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
            fetch(`https://xivapi.com/character/search?name=${nameToSearch}&server=${server}`)
                .then(resp=>{
                    document.querySelector(`#searchButton`).disabled = true;
                    return resp.json()
                })
                    .then(data=>{
                        // console.log(data['Results']);
                        const playerList = data['Results'].slice(4);
                        // debugger;
                        console.log(playerList);
                        for (const player of playerList) {
                            const {Avatar, Name} = player;
                            //debugger;
                            const li = document.createElement(`li`);
                            li.className = 'playerLI';
                            li.id = player[`ID`];

                            li.innerHTML = `
                            <img src=${Avatar}>
                            <h3>${Name}</h3>
                            `
                            li.addEventListener('click',(listEvent)=>{
                                // I need to show the player information in #resultsDetails div
                                fetch(`https://xivapi.com/character/${listEvent.target.parentNode.id}`).then(callForResp=>callForResp.json()).then(playerData=>{
                                    console.log(playerData);
                                    const {Name, ActiveClassJob,Portrait} = playerData[`Character`];
                                    const playerName = document.createElement('h2');
                                    playerName.innerText = Name;
                                    const playerPortrait = document.createElement('img');
                                    playerPortrait.src = Portrait;
                                    const playerJob = document.createElement('h3');
                                    playerJob.innerText = ActiveClassJob[`UnlockedState`][`Name`];
                                    const playerJobLevel = document.createElement(`h4`);
                                    playerJobLevel.innerText =  ActiveClassJob[`Level`];

                                   const searchResults = document.createElement(`div`);
                                   searchResults.id = `playerInfo`
                                   clearPlayerInfo();
                                   document.querySelector('#resultsDetails').appendChild(searchResults);

                                   searchResults.appendChild(playerName);
                                   searchResults.appendChild(playerPortrait);
                                   searchResults.appendChild(playerJob);
                                   searchResults.appendChild(playerJobLevel);

                                })
                            })
                            document.querySelector('#searchResults').appendChild(li);
                        }
                        document.querySelector(`#searchButton`).disabled = false;
                    })
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

function clickOnCard(event){
    const card = event.target;
    const searchForm = document.querySelector(`#searchForm`);
    searchForm.classList.remove('hidden')

    // add the submit event listener to the search button
    document.querySelector(`#searchButton`).addEventListener('click',(searchEvent)=>{
        searchEvent.preventDefault();
        const nameToSearch = document.querySelector(`#searchName`).value.replaceAll(` `,`&`);
        if(server != `default`){
            // clear old list data
            clearPlayerList();
            console.log(`name to search: ${nameToSearch} // server to search in: ${server}`);
            // remove the server warning if it exists
            if(document.querySelector(`#noServerWarning`) != null){
                document.querySelector(`#noServerWarning`).remove();
            }
            // build out the functionality with the API
            fetch(`https://xivapi.com/character/search?name=${nameToSearch}&server=${server}`)
                .then(resp=>{
                    document.querySelector(`#searchButton`).disabled = true;
                    document.querySelector(`#partyPanel`).className = 'hidden';
                    return resp.json()
                })
                    .then(data=>{
                        // console.log(data['Results']);
                        const playerList = data['Results'].slice(4);
                        // debugger;
                        console.log(playerList);
                        for (const player of playerList) {
                            const {Avatar, Name} = player;
                            //debugger;
                            const li = document.createElement(`li`);
                            li.className = 'playerLI';
                            li.id = player[`ID`];

                            li.innerHTML = `
                            <img src=${Avatar}>
                            <h3>${Name}</h3>
                            `
                            li.addEventListener('click',(listEvent)=>{
                                // I need to show the player information in #resultsDetails div
                                fetch(`https://xivapi.com/character/${listEvent.target.parentNode.id}`).then(callForResp=>callForResp.json()).then(playerData=>{
                                    console.log(playerData);
                                    // const {} = playerData;
                                    /*
                                    using:
                                    [`Character`]
                                        [`Portrait`] - full body
                                        [`Avatar`] - portrait
                                        [`Name`]
                                        [`Nameday`]
                                        [`ActiveClassJob`]
                                            [`UnlockedState`]
                                                [`Name`]
                                            [`Level`]
                                    */
                                   // Extract portrait, name, active job's name, and active job's level
                                   // use these values to put into #resultsDetails
                                   const {Name, ActiveClassJob,Portrait} = playerData[`Character`];
                                   const playerName = document.createElement('h2');
                                   playerName.innerText = Name;
                                   const playerPortrait = document.createElement('img');
                                   playerPortrait.src = Portrait;
                                   const playerJob = document.createElement('h3');
                                   playerJob.innerText = ActiveClassJob[`UnlockedState`][`Name`];
                                   const playerJobLevel = document.createElement(`h4`);
                                   playerJobLevel.innerText =  ActiveClassJob[`Level`];

                                   const addPlayerBtn = document.createElement(`button`);
                                   addPlayerBtn.innerText = `+Party`;
                                   // player button functionality
                                   // when player presses button, this player is added to the party

                                   const searchResults = document.createElement(`div`);
                                   searchResults.id = `playerInfo`
                                   clearPlayerInfo();
                                   document.querySelector('#resultsDetails').appendChild(searchResults);

                                   searchResults.appendChild(playerName);
                                   searchResults.appendChild(playerPortrait);
                                   searchResults.appendChild(playerJob);
                                   searchResults.appendChild(playerJobLevel);
                                   searchResults.appendChild(addPlayerBtn);

                                   addPlayerBtn.addEventListener(`click`,()=>{
                                       clearPlayerInfo();
                                       clearPlayerList();
                                       document.querySelector(`#partyPanel`).classList.remove('hidden');

                                       const playerCardDiv = document.createElement('div');
                                       playerCardDiv.className = `playerCard`;

                                       playerCardDiv.appendChild(playerPortrait);
                                       playerCardDiv.appendChild(playerName);
                                       playerCardDiv.appendChild(playerJob);
                                       playerCardDiv.appendChild(playerJobLevel);

                                       card.appendChild(playerCardDiv);

                                       document.querySelector(`#searchName`).value = '';
                                       searchForm.className = `hidden`;
                                       
                                       card.querySelector('button').classList.remove('hidden');
                                       card.querySelector('button').addEventListener('click',removePartyMember);

                                       event.target.removeEventListener('click',clickOnCard);
                                   })
                                })
                            })
                            document.querySelector('#searchResults').appendChild(li);
                        }
                        document.querySelector(`#searchButton`).disabled = false;
                    })
        }
        else{
            const serverWarning = document.createElement(`p`);
            serverWarning.innerText = `Please select a server from the dropdown box`
            serverWarning.id = `noServerWarning`
            document.querySelector('#characterPanel').appendChild(serverWarning);
        }
    })
}

function removePartyMember(event){
    event.target.className = 'hidden';
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
