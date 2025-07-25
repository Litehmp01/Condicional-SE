 const Verificar = document.getElementById("verificar");

        Verificar.addEventListener("click", function () {
            let ano = document.getElementById("ano").value;
            let imgIdade = document.getElementById("imgIdade");
            let txt = document.getElementById("txtDetect");
            let anoAtual = new Date().getFullYear();
            let idade = anoAtual - ano;

            if (ano === "" || ano > anoAtual || ano < 0) {
                alert("Ano inválido, por favor insira um ano válido.");
                txt.innerHTML = "";
                imgIdade.src = "";
                return;
            }
    if (idade >= 0 && idade < 3) {
        document.getElementById("txtDetect").innerHTML = `Detectamos que vc é um bebê de ${idade} anos`;
        imgIdade.src = "img/bebe.jpg";
    }

    else if (idade >= 4 && idade < 11) {
        document.getElementById("txtDetect").innerHTML = `Detectamos que vc é uma criança de ${idade} anos`;
        imgIdade.src = "img/Crianca01.jpg"
    }
    else if (idade >= 12 && idade < 17) {
        document.getElementById("txtDetect").innerHTML = `Detectamos que vc é um adolescente de ${idade} anos`;
        imgIdade.src = "img/adolescente.jpg";
    }
    else if (idade >= 18 && idade < 59) {
        document.getElementById("txtDetect").innerHTML = `Detectamos que vc é um adulto de ${idade} anos`;
        imgIdade.src = "img/adulto.jpg";
    }
    else if (idade >= 60 && idade ) {
        document.getElementById("txtDetect").innerHTML = `Detectamos que vc é um adulto de ${idade} anos`;
        imgIdade.src = "img/velho.jpg";
    }
    else if (idade < 0) {
        alert("Ano inválido, por favor insira um ano válido.");
    }
    else {
        document.getElementById("txtDetect").innerHTML = `Detectamos que vc é um idoso de ${idade} anos`;
        imgIdade.src = "img/velho.jpg";
    }
        });