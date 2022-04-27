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

// presi gli id in cui stampare
const newName = document.getElementById("name");
const role = document.getElementById("role");
const image = document.getElementById("image");


console.log(newName);
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
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    }
]

// stampo gli array nell'html
container.innerHTML = `
<div class="team-card">
    <div class="card-image">
      <img
        src="${memberArr[0].image}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${memberArr[0].name}</h3>
      <p>${memberArr[0].role}</p>
    </div>
</div>

<div class="team-card">
    <div class="card-image">
      <img
        src="${memberArr[1].image}"
        alt="Angela Caroll"
      />
    </div>
    <div class="card-text">
      <h3>${memberArr[1].name}</h3>
      <p>${memberArr[1].role}</p>
    </div>
</div>

<div class="team-card">
    <div class="card-image">
      <img
        src="${memberArr[2].image}"
        alt="Angela Caroll"
      />
    </div>
    <div class="card-text">
      <h3>${memberArr[2].name}</h3>
      <p>${memberArr[2].role}</p>
    </div>
</div>

<div class="team-card">
    <div class="card-image">
      <img
        src="${memberArr[3].image}"
        alt="Angela Caroll"
      />
    </div>
    <div class="card-text">
      <h3>${memberArr[3].name}</h3>
      <p>${memberArr[3].role}</p>
    </div>
</div>

<div class="team-card">
    <div class="card-image">
      <img
        src="${memberArr[4].image}"
        alt="Angela Caroll"
      />
    </div>
    <div class="card-text">
      <h3>${memberArr[4].name}</h3>
      <p>${memberArr[4].role}</p>
    </div>
</div>

<div class="team-card">
    <div class="card-image">
      <img
        src="${memberArr[5].image}"
        alt="Angela Caroll"
      />
    </div>
    <div class="card-text">
      <h3>${memberArr[5].name}</h3>
      <p>${memberArr[5].role}</p>
    </div>
</div>
`