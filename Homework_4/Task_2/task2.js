/*На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. 
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - 
в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. 
Також потрібно нижче вивести назву обраної країни і місто.
*/

let citiesList = document.querySelector('#cities');

citiesList.insertAdjacentHTML('afterend', '<option value="ukr">Lviv</option>');


//citiesList.innerHTML += '<option value="ukr">Lviv</option>, <option value="ukr">Kyiv</option>';
console.log(citiesList.firstElementChild);

const ukrCities = {
    option.name: Lviv;
    option.name: Kyiv;
    option.name: Kharkiv;
}

const newList = document.createElement('option');
newList.textContent = 'Lviv';
