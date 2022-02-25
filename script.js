function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('Imagem')
    var data = new Date()
    var hora = data.getHours()
    //  var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
            //bom dia!
            img.src = 'manhã.png'   
            document.body.style.background = '#ffa16f'
    }   else if(hora >= 12 && hora <= 18) {
            //BOA tarde
            img.src = 'tarde.png'
            document.body.style.background = '#993605'
    }   else {
            //boa noite
            img.src = 'noite.png'
            document.body.style.background = '#5b4063'
    } 
}