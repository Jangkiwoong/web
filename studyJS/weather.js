onGeoOk = (position) => {
    
}

onGeoError = () => {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 