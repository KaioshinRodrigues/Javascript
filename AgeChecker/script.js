function verify(){
    var data = new Date()
    var year = data.getFullYear()
    var fano = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || fano.value > year){
        window.alert('Verify the data and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gender = 'Man'
            if(age >= 0 && age < 10){
                img.setAttribute('src', 'image/childBoy.png')
            } else if(age < 21){
                img.setAttribute('src', 'image/youngMan.png')
            } else if(age < 50){
                img.setAttribute('src', 'image/adultMan.png')
            } else{
                img.setAttribute('src', 'image/oldMan.png')
            }
        } else if(fsex[1].checked){
            gender = 'Woman'
            if(age >= 0 && age < 10){
                img.setAttribute('src', 'image/childGirl.png')
            } else if(age < 21){
                img.setAttribute('src', 'image/youngWoman.png')
            } else if(age < 50){
                img.setAttribute('src', 'image/adultWoman.png')
            } else{
                img.setAttribute('src', 'image/oldWoman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `It was identified ${gender} with ${age} years of age`
        res.appendChild(img)
    }

}

/*const gradient = document.querySelector('body');
gradient.setAttribute('class', 'success');
gradient.setAttribute('style', 'background: linear-gradient(to bottom, green, red);');*/