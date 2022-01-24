let request = new XMLHttpRequest();

request.open('GET','https://api.openweathermap.org/data/2.5/weather?q=oslo&appid=93f26e3c57081a6210de53b8dcfdfea4',true);

request.onload = function() {
    if( request.status >=200 && request.status < 400){
        let data = JSON.parse(request.responseText);
        console.log(data);
        var icon = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
        document.getElementById('myimg').src=icon;
        document.getElementById('myweather').innerHTML = data.main.temp+ 'F';
        document.getElementById('moreweather').innerHTML = data.weather[0].main;
    }
    else{
        console.log('failed connecting')
    }
}

request.onerror = function() {
    console.log(" Error ")
}

request.send();