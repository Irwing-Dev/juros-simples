const btnCalc = document.querySelector(".btn-calc");
const res = document.querySelector("#res");

var optsFee = document.querySelectorAll(".opts-fee");
var optsPeriod = document.querySelectorAll(".opts-period");

const calculate = () => {
    let capital = document.querySelector(".capital").value;
    let fee = document.querySelector(".fee").value;
    let period = document.querySelector(".period").value;

    let equation = capital * fee * period / 100

    if (capital == 0 || fee == 0 || period == 0) {
        res.innerHTML = `<p style="color: red;">Por favor, preencha todos os campos</p>`
    } else {
        optsFee[0].selected === true && optsPeriod[0].selected === true ? res.innerHTML = `Juros: R$${equation.toLocaleString()} <br> <br> Montante: R$${(Number(capital) + equation).toLocaleString()}` : null
        optsFee[0].selected === true && optsPeriod[1].selected === true ? res.innerHTML = `Juros: R$${(equation * 12).toLocaleString()} <br> <br> Montante: R$${(Number(capital) + equation * 12).toLocaleString()}` : null
        optsFee[1].selected === true && optsPeriod[0].selected === true ? res.innerHTML = `Juros: R$${(equation / 12).toLocaleString()} <br> <br> Montante: R$${(Number(capital) + equation / 12).toLocaleString()}` : null
        optsFee[1].selected === true && optsPeriod[1].selected === true ? res.innerHTML = `Juros: R$${equation.toLocaleString()} <br> <br> Montante: R$${(Number(capital) + equation).toLocaleString()}` : null

    }
}

btnCalc.addEventListener("click", calculate);