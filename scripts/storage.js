// storage.js – wrapper localStorage
const KEY = "missionPhonixState";
export function loadState(){
    const raw = localStorage.getItem(KEY);
    if(!raw) return null;
    try { return JSON.parse(raw);} catch(e){console.error("Échec de chargement", e); return null;}
}
export function saveState(state){
    try{localStorage.setItem(KEY, JSON.stringify(state));}
    catch(e){console.error("Échec de sauvegarde", e);}
}
