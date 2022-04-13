let server = `default`;

document.addEventListener('DOMContentLoaded',init);

function init(event){
    // const cards = document.querySelectorAll('.card');
    for (const card of document.querySelectorAll('.card')) {
        card.addEventListener('click',clickOnCard);
    }

    document.querySelector(`#serverSelect`).addEventListener('change',(event)=>{
        server = event.target.value.toLowerCase();
    })
}

function clickOnCard(event){
    console.log(event.target);
    const card = event.target;
    const searchForm = document.querySelector(`#searchForm`);
    searchForm.classList.remove('hidden')

    // add the submit event listener to the search button
    document.querySelector(`#searchButton`).addEventListener('click',(searchEvent)=>{
        searchEvent.preventDefault();
        const nameToSearch = document.querySelector(`#searchName`).value.replaceAll(` `,`&`);
        if(server != `default`){
            console.log(`name to search: ${nameToSearch} // server to search in: ${server}`);
            // remove the server warning if it exists
            if(document.querySelector(`#noServerWarning`) != null){
                document.querySelector(`#noServerWarning`).remove();
            }
            // build out the functionality with the API
        }
        else{
            const serverWarning = document.createElement(`p`);
            serverWarning.innerText = `Please select a server from the dropdown box`
            serverWarning.id = `noServerWarning`
            document.querySelector('#characterPanel').appendChild(serverWarning);
        }
    })
}