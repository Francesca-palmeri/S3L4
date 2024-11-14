const tombolone = document.getElementById("grigliaTombola");

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

