const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=db10eaf58a4d0a2fae9355c262a4613e';
fetch(apiURL)
  .then((response) => response.json())
  .then((res) => {
    // console.log("return", res);
    document.getElementById('currently').textContent = res.weather[0].main;
    document.getElementById('temperature').textContent = res.main.temp;
    document.getElementById('humidity').textContent = res.main.humidity;
    document.getElementById('speed').textContent = res.wind.speed;

    let temp = parseFloat(document.getElementById("temperature").innerHTML);
    let speed = parseFloat(document.getElementById("speed").innerHTML);
     
    if (temp <= 50 && s > 3) {
      let Wchill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    
      Wchill = document.getElementById("windchill_no").innerHTML =
        Wchill.toFixed(2);
    } 
    
    else {
      Wchill = "Not Applicable";
    }  

});




const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=db10eaf58a4d0a2fae9355c262a4613e';
fetch(URL)
  .then((response) => response.json())
  .then((res) => {
    const dayofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const fiveDays = res.list.filter((element) =>
      element.dt_txt.includes("18:00:00")
    );

    for (let i = 0; i < fiveDays.length; i++ ) {
        let d = new Date(fiveDays[i].dt_txt);
        let forecast_item = document.createElement('div');
        let day = document.createElement('div');
        let image =document.createElement('img');
        let celcius = document.createElement('div');

        forecast_item.classList.add("forecast-item");

        image.setAttribute('src', 'https://openweathermap.org/img/w/' + fiveDays[i].weather[0].icon + '.png');
        day.textContent = dayofWeek[d.getDay()];
        celcius.textContent =  fiveDays[i].main.temp

        forecast_item.appendChild(day);
        forecast_item.appendChild(image);
        forecast_item.appendChild(celcius);
 

        document.querySelector('div.forecast').appendChild(forecast_item);
    } 
    
  })

