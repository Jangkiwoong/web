onGeoOk = (position) => {
    const x = position.coords.longitude;
    const y = position.coords.latitude;
    console.log("You live in x = ", x, " y = ",y);
}

onGeoError = () => {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);