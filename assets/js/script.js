const tombolone = document.getElementById("grigliaTombola");
const btnEstrazione = document.getElementById('estrai');

document.addEventListener('load', init());

function init(){
    grigliaTombolone();
}

function grigliaTombolone() {
    for ( let i = 0; i < 90; i++ ){
        const numeriDiv = document.createElement('div');
        numeriDiv.innerText = i + 1;
        grigliaTombola.appendChild(numeriDiv);
    }
};

btnEstrazione.addEventListener('click', function() {
    extract = Math.floor(Math.random()*90) + 1
})
