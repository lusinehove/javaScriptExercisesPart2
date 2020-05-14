var document = document || {};

var placeName = document.createElement('p');
document.body.appendChild(placeName);
placeName.innerHTML = 'Yerevan';

function weather() {

    var container = document.getElementById('outPut');

    fetch('http://dataservice.accuweather.com/forecasts/v1/daily/5day/16890?apikey=GGz2vtGGh9wGWCMA4MFXBROftW3evssb')
        .then(response => response.json())
        .then(data => {

            var weatherForecast = data.DailyForecasts;
//                    console.log(weatherForecast);
        

            for (var i = 0; i < weatherForecast.length; i++) {
                
                var content = document.createElement('div');

                var dateDay = document.createElement('h4');
                var temp = document.createElement('h2');
                

                var everyDay = weatherForecast[i];
//                console.log(everyDay);
                
                var dateTo = everyDay.Date.split('-');
//                console.log(dateTo);
                var getMonth = dateTo[1];
                var getDate = dateTo[2].slice(0, 2);
                console.log(getDate);
                
                var temperature = everyDay.Temperature.Maximum.Value;
//                console.log(temperature);

                //(50°F-32)×5/9 = 10°C
                
                var celsius =  Math.floor((temperature-32) * 5/9);
//                console.log(celsius);
                
                
                dateDay.innerHTML = getDate + ' / ' + getMonth;
                dateDay.setAttribute('id', 'dateDay');
                temp.innerHTML = celsius + 'C';
                
                container.appendChild(content);
                content.appendChild(dateDay);
                dateDay.appendChild(temp);
            }



        })
//        .catch(() => {
//            msg.textContent = "Please search for a valid city";
//        });


}
weather();