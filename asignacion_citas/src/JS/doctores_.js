const new_doctor = document.getElementById('new-doctor')
const save_button = document.getElementById('save-button')
const cancel_button = document.getElementById('cancel-button')
const reg_div = document.getElementById('reg-div')
const show_info_div = document.getElementById('div-show-info')
const home = document.getElementById('home')

home.addEventListener('click', function(){
    window.location.href = '/views/index.html'
})

new_doctor.addEventListener('click', function(){
    show_info_div.style.display = 'none'
    reg_div.style.display = 'block'
    save_button.addEventListener('click',function(){
        show_info_div.style.display = 'block'
        reg_div.style.display = 'none'
    })
    cancel_button.addEventListener('click',function(){
        show_info_div.style.display = 'block'
        reg_div.style.display = 'none'
    })
})