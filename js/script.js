/*

Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.


 */
// preso il valore  del container dall'html
const container = document.querySelector(".team-container");
console.log(container);

// id del bottone
const addMemberBtn = document.getElementById("addMemberButton");

addMemberBtn.addEventListener("click", function(){
    const newName = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const image = document.getElementById("image").value;
    container.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src="${image}"
                alt="${newName}"
              />
            </div>
            <div class="card-text">
              <h3>${newName}</h3>
              <p>${role}</p>
            </div>
        </div>
        `;
    document.getElementById("name").value = " ";
    document.getElementById("role").value = " ";
    document.getElementById("image").value = " ";    
})

// array dei membri come lo screenshot
const memberArr = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    }
]

// stampo gli array nell'html
newObject();

function newObject(){
    
    for (let i in memberArr){
        const member = memberArr[i];
        console.log(member);
        container.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              <img
                src="${memberArr[i].image}"
                alt="${memberArr[i].name}"
              />
            </div>
            <div class="card-text">
              <h3>${memberArr[i].name}</h3>
              <p>${memberArr[i].role}</p>
            </div>
        </div>
        `;
    }
}



