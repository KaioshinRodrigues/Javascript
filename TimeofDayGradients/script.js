function load(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('image')
var data = new Date()
var hour = data.getHours()
var min = data.getMinutes()
var PmAm = `pm`
var gradient = document.querySelector('body');
if(hour >= 0 && hour <= 12){
    PmAm = `am`
}
if (min < 10){
    min = "0" + min
}
if (hour < 10){
    hour = "0" + hour
}

msg.innerHTML = `Right now the time is <big><strong>${hour}:${min}<small>${PmAm}</small></strong></big>`

if(hour >= 6 && hour < 12){
    img.src = `image/Morning.png`
    gradient.setAttribute('class', 'gradient');
    gradient.setAttribute('style', 'min-height: 100vh; background: linear-gradient(to bottom, #B2BABE, #e2cd9f, #F89B77, #C9837F); background-repeat: no-repeat;');
} else if(hour >= 12 && hour < 18){
    img.src = `image/Afternoon.png`
    gradient.setAttribute('class', 'gradient');
    gradient.setAttribute('style', 'min-height: 100vh; background: linear-gradient(to bottom, #603D55, #E59077, #EF9A7E, #CE7D5F); background-repeat: no-repeat;');
} else if(hour >= 18 && hour < 20){
    img.src = `image/PastAfternoon.png`
    gradient.setAttribute('class', 'gradient');
    gradient.setAttribute('style', 'min-height: 100vh; background: linear-gradient(to bottom, #413162, #664F97 50%, #C8323F, #E8003F); background-repeat: no-repeat;');
} else if(hour >= 20 && hour <= 23 && min <= 59 ){
    img.src = `image/Night.png`
    gradient.setAttribute('class', 'gradient');
    gradient.setAttribute('style', 'min-height: 100vh; background: linear-gradient(to bottom, #54408F, #454799, #415382, #457399); background-repeat: no-repeat;');
} else{
    img.src = `image/PastNight.png`
    gradient.setAttribute('class', 'gradient');
    gradient.setAttribute('style', 'min-height: 100vh; background: linear-gradient(to bottom, #363740, #575B7A, #536572, #5C656E); background-repeat: no-repeat;');
}
}
setInterval(load, 1000);

/*const gradient = document.querySelector('body');
gradient.setAttribute('class', 'value');
gradient.setAttribute('style', 'background: linear-gradient(to bottom, green, red);');*/