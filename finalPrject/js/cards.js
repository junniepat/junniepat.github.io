const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

.then(function (jsonObject) {
const towns = jsonObject['towns'];
    
// loop through the data array assign the variables to each
for (let i=0; i < towns.length; i++) {
    

    
    // Add data to the cards
    if (towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {

            let card = document.createElement('article');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');
            let textWriteup = document.createElement('div')

            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;    
            year.textContent = "Year Founded:" + " " + towns[i].yearFounded;
            pop.textContent = "Population:" + " " + towns[i].currentPopulation;
            rain.textContent = "Annual Rain Fall:" + " " +  towns[i].averageRainfall;
            image.setAttribute('src', `images/towns/${towns[i].photo}`);
            image.setAttribute('alt', towns[i].name);
            image.setAttribute('class', 'townPhoto');
            card.setAttribute('class', "homeSection" );
            textWriteup.setAttribute('class', 'homeTownText');

            card.appendChild(textWriteup);
            textWriteup.appendChild(h2);
            textWriteup.appendChild(motto);
            textWriteup.appendChild(year);
            textWriteup.appendChild(pop);
            textWriteup.appendChild(rain);
            card.appendChild(image);

        document.querySelector('#cards').appendChild(card);
    }

    else {
        document.querySelector('.NoData').innerHTML = " "
    }
        

}
});
