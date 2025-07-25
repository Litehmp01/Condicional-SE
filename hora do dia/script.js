let horario = document.getElementById("horario");
let imgHorario = document.getElementById("imgHorario");
let data = new Date();
let hora = data.getHours();
let minuto = data.getMinutes();
let saudacao = "";

if (hora > 6 && hora < 12) {
    saudacao = "Bom Dia";
    imgHorario.src = "img/manhã.png";
    document.querySelector("body").style.backgroundColor = "#ee9026ff";
}

else if (hora > 12 && hora < 18) {
    saudacao = "Boa Tarde";
    imgHorario.src = "img/tarde.png";
    document.querySelector("body").style.backgroundColor = "#53bbceff";

}
else {
    saudacao = "Boa Noite";
    imgHorario.src = "img/noite.png";
    document.querySelector("body").style.backgroundColor = "#030b38ff";
}
document.getElementById("horario").innerHTML = ` ${saudacao} O horario atual é:<strong> ${hora} : ${minuto}</strong>`;