
function main() {
    const form = document.querySelector('form');

    function creatP(msg){
        const p = document.createElement("p");
        p.innerHTML = msg;
        return p;
    }

    function calcularImc(evento) {
        evento.preventDefault();
        const peso = evento.target.querySelector(".peso");
        const altura = form.querySelector(".altura");
        const resultado = document.querySelector(".resultado");

        altura.setAttribute("style", "");
        peso.setAttribute("style", "");
        if (Number.isInteger(Number(peso.value)) && isNaN(altura.value) == false) {
            if (peso.value != 0 && altura.value != 0) {
                const imc = peso.value / (altura.value ** 2);
                resultado.innerHTML = `IMC ${imc.toFixed(2)} --  `;
                resultado.setAttribute("style", "  background-color:  rgb(107, 204, 23);color: white;")
                if (imc < 18.5) {
                    resultado.innerHTML += 'Abaixo do Peso';
                } else if (imc >= 18.5 && imc <= 24.9) {
                    resultado.innerHTML += 'Peso Normal';
                }
                else if (imc >= 25 && imc <= 29.9) {
                    resultado.innerHTML += 'Sobrepeso';
                }
                else if (imc >= 30 && imc <= 34.9) {
                    resultado.innerHTML += 'Obesidade grau 1';
                }
                else if (imc >= 35 && imc <= 39.9) {
                    resultado.innerHTML += 'Obesidade grau 2';
                }
                else {
                    resultado.innerHTML += 'Obesidade grau 3';
                }
            }
            else {
                resultado.setAttribute("style", "  background-color: rgba(255, 77, 77, 0.858);color: white;");
                resultado.innerHTML = ' ';
                const p = creatP('ERROR! os campos não podem ser zero');
                
                resultado.appendChild(p);
            }
        }
        else {
            resultado.setAttribute("style", "  background-color: rgba(255, 77, 77, 0.858);color: white;");
            resultado.innerHTML = '';
            const p = creatP('ERROR! verifique os campos');
            resultado.appendChild(p);
            
            if (isNaN(altura.value) && isNaN(peso.value)) {
                altura.setAttribute("style", "color:white;background-color: rgba(255, 77, 77, 0.858);");
                peso.setAttribute("style", "color:white;background-color: rgba(255, 77, 77, 0.858);");
            }
            else {
                if (isNaN(peso.value)) {
                    peso.setAttribute("style", "color:white;background-color: rgba(255, 77, 77, 0.858);");
                } else {
                    altura.setAttribute("style", "color:white;background-color: rgba(255, 77, 77, 0.858);");
                }

            }
        }

    };

    form.addEventListener('submit', calcularImc);

}
alert("Bem vindo");
main();