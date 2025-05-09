import { FRICATIVE_DATA } from './data.js';
import { loadState, saveState } from './storage.js';
import { clear, createEl, snackbar } from './ui.js';

const app = document.getElementById('app');
const DEFAULT_STATE = {
    profile:{agentName:"Agent 000", avatar:"🕵️"},
    progress:{ f_v:0, s_z:0, ch_j:0 }
};
let state = loadState() || DEFAULT_STATE;

function renderDashboard(){
    clear(app);
    app.appendChild(createEl("section",{},[
        createEl("h2",{},["Quartier des Agents"]),
        createEl("p",{},[`Bienvenue, ${state.profile.agentName}. Voici ta progression :`]),
        createProgressTable()
    ]));
}

function createProgressTable(){
    const table = createEl("table");
    Object.keys(state.progress).forEach(key=>{
        const tr = createEl("tr");
        tr.appendChild(createEl("td",{},[FRICATIVE_DATA[key].label]));
        tr.appendChild(createEl("td",{},[state.progress[key] + " %"]));
        table.appendChild(tr);
    });
    return table;
}

function renderTraining(pairKey){
    clear(app);
    const data = FRICATIVE_DATA[pairKey];
    if(!data){snackbar("Données manquantes");return;}

    const section = createEl("section");
    section.appendChild(createEl("h2",{},["Mission : ", data.label]));
    section.appendChild(createEl("p",{},["Prononce clairement les mots suivants :"]));

    data.words.forEach(word=>{
        const btn = createEl("button",{className:"large"},[word]);
        btn.addEventListener("click", ()=>snackbar(`👍 Bien prononcé : ${word}`));
        section.appendChild(btn);
    });
    app.appendChild(section);
}

// ---- navigation handlers ----
document.getElementById("dashboardBtn").addEventListener("click", ()=>{
    setActive(this); renderDashboard();
});
document.getElementById("trainingBtn").addEventListener("click", ()=>{
    setActive(this); renderTraining('f_v');
});
// more nav buttons soon…

function setActive(btn){
    document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
}

// Initial load
renderTraining('f_v');
saveState(state);
