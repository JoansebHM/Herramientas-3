const usuarios = document.getElementById('usuarios')
const doctores = document.getElementById('doctores')
const citas = document.getElementById('citas')

usuarios.addEventListener('click', function(){
    window.location.href = '/views/usuarios.html'
})

doctores.addEventListener('click', function(){
    window.location.href = '/views/doctores.html'
})

citas.addEventListener('click', function(){
    window.location.href = '/views/citas.html'
})