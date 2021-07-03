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
        })
    }
})