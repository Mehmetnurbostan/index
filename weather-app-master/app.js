window.addEventListener('load',()=> {
let long;
let lat;
let temperatureDegree=document.querySelector('.temperature-degree');
let temperatureDescription=document.querySelector('.temperature-description');
let locationTimezone=document.querySelector('.location-timezone');
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a7b888574874a0b0548b175f64432ab2`;
        fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
            console.log(data);
            const {temp}=data.main;//degree
            const {main,description}=data.weather["0"]; //what is look like Clouds descreiption
            const {name}=data//timezone name
            temperatureDegree.textContent=temp- 273.15;
            temperatureDescription.textContent=main;
            locationTimezone.textContent=name;
            setIcons(document.querySelector(".icon"),description);
            });

    });

}
function setIcons(iconId,icon){
    const skycons = new Skycons({color:"white"});
    const currentIcon = icon.replace(/ /g,"_").toUpperCase();
    skycons.add(iconId, Skycons[currentIcon]);
    skycons.play();
    return skycons.set(iconId, Skycons[currentIcon]);

}
});