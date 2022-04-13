document.addEventListener('DOMContentLoaded',init);

function init(event){
    console.log(`hello`);

    const cards = document.querySelectorAll('.card');
    for (const card of cards    ) {
        card.addEventListener('click',selectCard);
    }
}

function selectCard(event){
    console.log(event.target);
    const searchForm = document.querySelector(`#searchForm`);
    searchForm.classList.remove('hidden')
}