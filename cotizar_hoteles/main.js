const texts = [
    [
        "Hotel Estrella de Mar: Un Refugio de Lujo en la Costa",
        `Sumérgete en un paraíso frente al mar en el Hotel Estrella de Mar, 
        donde cada amanecer es un cuadro pintado en tonos dorados y cada atardecer 
        es un espectáculo de colores cálidos sobre las aguas cristalinas. Nuestro 
        lujoso resort te ofrece una experiencia de 5 estrellas, con habitaciones elegantemente decoradas, 
        restaurantes gourmet que satisfacen todos los paladares y un spa de clase mundial para tu relajación total.
        Descubre la armonía entre el lujo y la naturaleza en este rincón de tranquilidad en la costa.`
    ],
    [
        "Hotel Montaña Mágica: Vive una Aventura en las Alturas",
        `Experimenta la magia de la naturaleza desde las alturas en el Hotel 
        Montaña Mágica. Nuestro hotel es una maravilla arquitectónica escondida en 
        el corazón de un bosque frondoso. Aquí, las habitaciones son refugios de cuentos
        de hadas, adornadas con cascadas de agua que fluyen desde lo alto y rodeadas 
        de un entorno de selva virgen. Aventúrate en excursiones emocionantes, disfruta
        de la observación de aves raras y rejuvenece en nuestro spa en medio de la naturaleza.
        El Hotel Montaña Mágica es tu puerta de entrada a un mundo de maravillas naturales.`
    ],
    [
        "Hotel Ciudad de las Luces: Donde el Glamour se Encuentra con la Cultura",
        `Sumérgete en la vibrante energía de la metrópolis en el Hotel Ciudad de 
        las Luces. Situado en el corazón de la ciudad, nuestro hotel es un oasis
        de lujo y sofisticación. Las habitaciones están diseñadas con un toque de
        elegancia contemporánea y ofrecen vistas panorámicas de los rascacielos
        iluminados por la noche. Disfruta de la vida nocturna en los bares y 
        clubes de moda, o explora la cultura local en museos y galerías de arte
        cercanos. En el Hotel Ciudad de las Luces, el glamour urbano se encuentra
        con la riqueza cultural, creando una experiencia única en la ciudad.`
    ]
];

const info_background_images = ["./img/bg1.jpeg","./img/bg2.jpeg","./img/bg3.jpeg"]
const images = ["./img/hotel1.jpeg", "./img/hotel2.jpeg", "./img/hotel3.jpeg"];
const hotel_description = document.getElementById("hotel-description");
const button_next = document.getElementById("next-button");
const button_prev = document.getElementById("prev-button");
const discount_output = document.getElementById("des_box");
const info_background = document.querySelector(".div-info");
const total_output = document.getElementById("total_box");
const hotel_name = document.getElementById("hotel-name");
const image = document.getElementById("image-container");
const iva_output = document.getElementById("iva_box");
let currentIndex = 0; 

const button_cotizar = document.getElementById("btn_cotizar");
const subtotal_output = document.getElementById("sub_box");
const number_of_people = document.getElementById("input_personas");
const value_per_person = document.getElementById("input_valorXpersona");
const number_days = document.getElementById("input_dias");

button_cotizar.addEventListener('click', function(){
    let subtotal_ = number_of_people.value * value_per_person.value * number_days.value
    let discount_ = subtotal_ * 0.15
    let iva_ = (subtotal_ - discount_) * 0.19
    subtotal_output.value = parseFloat(subtotal_);
    discount_output.value = parseFloat(discount_)
    iva_output.value = parseFloat(iva_)
    total_output.value = (subtotal_ - discount_) + iva_
})

function clean_calc(){
    number_days.value = ''
    number_of_people.value = ''
    value_per_person.value = ''
    subtotal_output.value = ''
    discount_output.value = ''
    iva_output.value = ''
    total_output.value = ''
}

function show_info(index) {
    let tittle = texts[index][0];
    let description = texts[index][1];
    let img_hotel = images[index];
    info_background.style.backgroundImage = `url("${info_background_images[index]}")`;
    hotel_name.textContent = tittle;
    hotel_description.textContent = description;
    image.src = img_hotel
    currentIndex = index; 
}

button_next.addEventListener("click", function () {
    if (currentIndex < texts.length - 1) {
        clean_calc()
        show_info(currentIndex + 1);
    }
});

button_prev.addEventListener("click", function () {
    if (currentIndex > 0) {
        clean_calc()
        show_info(currentIndex - 1);
    }
});
show_info(0);
