const requestURL = "https://junniepat.github.io/finalPrject/directory.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

.then(function (jsonObject) {
    console.log("jsonObject", jsonObject.length)
const business = jsonObject;
    
// loop through the data array assign the variables to each
for (let i=0; i < business.length; i++) {
    

    
    // Add data to the cards


            let card = document.createElement('article');
            let image = document.createElement('img');
            let h2 = document.createElement('h2');
            let address = document.createElement('h3');
            let link = document.createElement('a');

            let textWriteup = document.createElement('div')

            h2.textContent = business[i].company_name;
            address.textContent = business[i].address;    
            link.textContent = "visit website";

            link.setAttribute('href', `${business[i].web_url}`);
            link.setAttribute('target', `_blank`);

            image.setAttribute('src', `images/business/${business[i].image}`);
            image.setAttribute('alt', business[i].name);
            image.setAttribute('class', 'townPhoto');
            card.setAttribute('class', "directory-item" );
            textWriteup.setAttribute('class', 'entry-content');

            card.appendChild(textWriteup);
            textWriteup.appendChild(h2);
            textWriteup.appendChild(address);
            textWriteup.appendChild(link);
            // card.appendChild(image);

        document.querySelector('.directory-container').appendChild(card);
   
        

}
});
