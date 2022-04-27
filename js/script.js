/*

Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.


 */
const container = document.querySelector(".team-container");
console.log(container);
const newMemberArr = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    }
]

console.log(newMemberArr);

container.innerHTML = `
<div class="team-card">
    <div class="card-image">
      <img
        src="${newMemberArr[0].image}"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${newMemberArr[0].name}</h3>
      <p>${newMemberArr[0].role}</p>
    </div>
</div>

<div class="team-card">
    <div class="card-image">
      <img
        src="${newMemberArr[1].image}"
        alt="Angela Caroll"
      />
    </div>
    <div class="card-text">
      <h3>${newMemberArr[1].name}</h3>
      <p>${newMemberArr[1].role}</p>
    </div>
</div>
`