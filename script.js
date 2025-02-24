const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startbtn = document.getElementById('start-btn');
const stopbtn = document.getElementById('stop-btn');

startbtn.addEventListener('click',()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    startbtn.disabled=false;
    stopbtn.disabled=true;
})

stopbtn.addEventListener('click',()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    logDiv.textContent= "";
    stateDiv.textContent="";
    startbtn.disabled=true;
    stopbtn.disabled=false;

})

function handleDown(e){
    logDiv.textContent = `key ${e.key} is pressed`;
    stateDiv.textContent = "key is Down"
}

function handleUp(e){
    logDiv.textContent = `key ${e.key} is up`;
    stateDiv.textContent = "key is up"
}