

const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=2343279&units=imperial&appid=db10eaf58a4d0a2fae9355c262a4613e';
fetch(URL)
  .then((response) => response.json())
  .then((res) => {
    console.log(res)
    const dayofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const fiveDays = res.list.filter((element) =>
      element.dt_txt.includes("18:00:00")
    );

    for (let i = 0; i < 3; i++ ) {
        let d = new Date(fiveDays[i].dt_txt);
        let forecast_item = document.createElement('div');
        let day = document.createElement('div');
        let image =document.createElement('img');
        let celcius = document.createElement('div');

        forecast_item.classList.add("featured-item");
        day.classList.add("featured-day");
        image.classList.add("featured-img");
        celcius.classList.add("featured-temp");

        image.setAttribute('src', 'https://openweathermap.org/img/w/' + fiveDays[i].weather[0].icon + '.png');
        day.textContent = dayofWeek[d.getDay()];
        celcius.textContent =  fiveDays[i].main.temp

        forecast_item.appendChild(image);
        forecast_item.appendChild(day);
        forecast_item.appendChild(celcius);
 

        document.querySelector('div.featured').appendChild(forecast_item);
    } 
    
  })




