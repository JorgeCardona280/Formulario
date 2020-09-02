var inputs = document.getElementsByClassName('formulario__input'); //arrive varios datos en una variable
for (var i=0; i < inputs.length; i++) { //length cuantos elementos hay
    inputs[i].addEventListener('keyup', function(){//addEventListener=escuchar un evento 'keyup' deje de teclear una tecla 
        if (this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');    
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

