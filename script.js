let long;
let lat;
let temp = document.querySelector(".temp");
let summ = document.querySelector(".summary");
let location = document.querySelector(".location");
let icon = document.querySelector(".icon");

// const api = "";

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition ( (position) => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            // API ID 
            const api = "";

            // API URL
            const base = ``;

            // Calling the API
            fetch(base)
                .then ((response) => {
                    return response.json();
        })
        .then((data) => {
            temp.textContent = 
                Math.floor(data.main.temp - kelvin) + "°C";
            summ.textContent = data.weather[0].description;
            location.textContent = data.name + "," + data.sys.country;
            let icon1 = data.weather[0].icon;
            icon.innerHTML = `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
        })
    }
})