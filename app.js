window.addEventListener('load',()=> {
let long;
let lat;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        const proxy="https://cors-anywhere.herokuapp.com/";
        const api=`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a7b888574874a0b0548b175f64432ab2`;
        fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
            console.log(data);
            });

    });

}

});