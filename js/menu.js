var boton = document.getElementById('boton');
var lista = document.getElementById('lista');
var checks = document.querySelectorAll('.valores');

boton.addEventListener('click', function(){
    lista.innerHTML = '';
    checks.forEach((e)=>{
          if(e.checked == true){
            var elemento = document.createElement('li');
            elemento.className = 'otro';
            elemento.innerHTML = e.value;
            lista.appendChild(elemento);
          }
    });
});