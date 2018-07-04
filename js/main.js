/**
 * Created by Denis on 24.06.2017.
 */

document.querySelector('iframe').classList.remove('hidden');
document.querySelector('.mapSedona').classList.add('hidden');
document.querySelector('#animatedForm').classList.add('hidden');


let allButton = document.querySelectorAll('button');
for ( button of allButton ) {
    button.addEventListener('click', (e) => e.preventDefault())
}


//  СКРИПТ ДЛЯ СЧЕТЧИКА В ФОРМЕ

let scoutingButtons  = document.querySelectorAll('.btn-js');
for ( buttons of scoutingButtons ) buttons.addEventListener('click', changeValue);


function changeValue(e) {
    let elem = e.target;
    let parentElem = elem.parentNode;

    if ( elem.classList.contains('minus-js') ) {
        let tmpValue = +parentElem.querySelector('input').value;
        if ( tmpValue === 0 ) tmpValue = 1;
        parentElem.querySelector('input').value = tmpValue - 1;
    }

    else if ( elem.classList.contains('plus-js') ) {
        let tmpValue = +parentElem.querySelector('input').value;
        parentElem.querySelector('input').value = tmpValue + 1;
    }
}



/* СКРИПТ ДЛЯ ФОРМЫ ( РЕАЛИЗАЦИЯ АНИМАЦИЯ С ПОМОЩЬЮ КЛАССОВ )  */

let buttonEnableForm = document.querySelector('#activateForm');
buttonEnableForm.addEventListener('click', enableAnimation);

function enableAnimation() {
    let form = document.querySelector('#animatedForm');
    if ( form.classList.contains('hidden') ) {
        form.classList.remove('hidden');
        form.classList.add('about-form');
    }
    else if ( form.classList.contains('about-form') ) {
        form.classList.remove('about-form');
        form.classList.add('exitWindows');
        setTimeout(() => {
            form.classList.remove('exitWindows');
            form.classList.add('hidden');
        }, 1001);
    }
}