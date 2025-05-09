// audio.js – stub Web Audio API (à compléter)
export async function initMic(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia({audio:true});
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const source = ctx.createMediaStreamSource(stream);
        const analyser = ctx.createAnalyser();
        source.connect(analyser);
        return {ctx, analyser};
    }catch(err){
        alert("Impossible d'accéder au micro : " + err.message);
        throw err;
    }
}
