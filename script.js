function envioM() {
    let capital = document.getElementById("capitalm").value;
    let taxa = document.getElementById("taxam").value;
    let tempo = document.getElementById("tempom").value;
    let res = document.getElementById("res");

    if (capital == null || capital == 0 || taxa == null || taxa == 0 || tempo == null || tempo == 0) {
        res.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos</p>'
    } else {
        let juros = capital * taxa * tempo;

        let jurosFinal = juros / 100
    
      let operacaoFinal = Number(capital) + Number(jurosFinal);
      
      let operacaoFinalForm = operacaoFinal.toFixed(2).toString().replace('.', ',');
    
        res.innerHTML = `<p>Juros = R$${jurosFinal.toFixed(2).toString().replace('.', ',')}.</p> <br> <p> Montate final = R$${operacaoFinalForm}</p>`
    }

} 

function envioD() {
    let capital = document.getElementById("capitald").value;
    let taxa = document.getElementById("taxad").value * 30 / 100;
    let tempo = document.getElementById("tempod").value;
    let res = document.getElementById("res2");

    if (capital == null || capital == 0 || taxa == null || taxa == 0 || tempo == null || tempo == 0) {
        res.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos</p>'
    } else {
        let juros = capital * taxa * tempo;
    
        let operacaoFinal = Number(capital) + Number(juros);
    
        res.innerHTML = `<p>Juros = R$${juros.toFixed(2).toString().replace('.', ',')}.</p> <br> <p> Montate final = R$${operacaoFinal.toFixed(2).toString().replace('.', ',')}</p>`
   }
}

function envioT() {
    let capital = document.getElementById("capitalt").value;
    let taxa = document.getElementById("taxat").value / 100 / 3;
    let tempo = document.getElementById("tempot").value;
    let res = document.getElementById("res3");

    if (capital == null || capital == 0 || taxa == null || taxa == 0 || tempo == null || tempo == 0) {
        res.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos</p>'
    } else {
        let juros = capital * taxa * tempo;
    
        let operacaoFinal = Number(capital) + Number(juros);
    
        res.innerHTML = `<p>Juros = R$${juros.toFixed(2).toString().replace('.', ',')}.</p> <br> <p> Montate final = R$${operacaoFinal.toFixed(2).toString().replace('.', ',')}</p>`
    }
}

function envioA() {
    let capital = document.getElementById("capitalA").value;
    let taxa = document.getElementById("taxaA").value / 12 / 100;
    let tempo = document.getElementById("tempoA").value;
    let res = document.getElementById("res4");

    if (capital == null || capital == 0 || taxa == null || taxa == 0 || tempo == null || tempo == 0) {
        res.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos</p>'
    } else {
        let juros = capital * taxa * tempo;
    
        let operacaoFinal = Number(capital) + Number(juros);
    
        res.innerHTML = `<p>Juros = R$${juros.toFixed(2).toString().replace('.', ',')}.</p> <br> <p> Montate final = R$${operacaoFinal.toFixed(2).toString().replace('.', ',')}</p>`
    }
}

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});