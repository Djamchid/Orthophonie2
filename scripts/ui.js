// ui.js – fonctions de rendu DOM
export function clear(element){
    while(element.firstChild) element.removeChild(element.firstChild);
}

export function createEl(tag, props={}, children=[]){
    const el = document.createElement(tag);
    Object.assign(el, props);
    children.forEach(child=>{
        if(typeof child === "string") el.appendChild(document.createTextNode(child));
        else el.appendChild(child);
    });
    return el;
}

export function snackbar(message){
    const bar = createEl("div",{className:"snackbar"},[message]);
    document.body.appendChild(bar);
    setTimeout(()=>bar.remove(),3000);
}
