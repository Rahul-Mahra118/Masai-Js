document.addEventListener('DOMContentLoaded',async()=>{


   let Container= document.getElementById('showCharacters');
   let Characters= [];
    let URL='https://rickandmortyapi.com/api/character';
    async function fetchData(){
        let response= await fetch(URL);
        let data= await response.json();
        Characters= data.results;
        
        displayData()
    }
    fetchData()
    // Character image
// Character name
// Species
// Status (Alive, Dead, Unknown)
    function displayData(){
        Container.innerHTML='';
        Characters.forEach((character)=>{
            const characterCard=document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML=
            `  <img src="${character.image}" alt="character-img">
              <div>
               <h2>Name: ${character.name}</h2>
               <p>Species: ${character.species} </p>
               <p>Status: ${character.status}</p> 
               </div>
            `
            Container.appendChild(characterCard);
        })

    }
})