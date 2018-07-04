/**
 * Created by Denis on 28.06.2017.
 */

let allButton = document.querySelectorAll('button');
for ( button of allButton ) {
    button.addEventListener('click', (e) => e.preventDefault())
}


/*	СКРИПТ ДЛЯ СТРАНИЦЫ HOSTEL ( РЕАЛИЗАЦИЯ КНОПКИ 'ПОКАЗАТЬ' ) */

let controlBlock = document.querySelector('.control-block');
let blockWrap = document.querySelectorAll('.wrap1');
let showButton = document.querySelector('.table-button');
let titleSearch = document.querySelector('.title-block');


showButton.addEventListener('click', showContent);


function showContent() {
    let arrWraps = document.querySelectorAll('.wrap1');
    let countChecked = $("input:checkbox:checked");
    let allHorizontalStrip = document.querySelectorAll('hr.tmp-class');

    if ( countChecked.length <= 0  ) {
        document.querySelector('.prise-before').innerHTML = 'ОТ 0';
        document.querySelector('.prise-after').innerText = 'ДО 0';
        for ( wraps of arrWraps ){
            wraps.classList.add('hidden');
        }
        controlBlock.classList.remove('hidden');
        titleSearch.innerHTML = 'НАЙДЕНО : 0 ';
        for ( strip of allHorizontalStrip ) strip.classList.add('hidden')

    } else if ( countChecked.length > 0 ) {
        document.querySelector('.prise-before').innerHTML = 'ОТ 2000';
        document.querySelector('.prise-after').innerText = 'ДО 4000';
        for ( wraps of arrWraps ) {
            wraps.classList.remove('hidden');
        }
        titleSearch.innerHTML = 'НАЙДЕНО : 3 ';
        for ( strip of allHorizontalStrip ) strip.classList.remove('hidden')
    }
}