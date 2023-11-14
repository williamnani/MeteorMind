

const key = "6a17c8aba57c4ec6657a4551be33d48d"

function colocarDadosNaTela(dados){
  console.log(dados)
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
  document.querySelector(".forecast-text").innerHTML = dados.weather[0].description
  document.querySelector(".moisture").innerHTML = "Umidade " + dados.main.humidity + "%"
  document.querySelector(".img-forecast").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-city").value
  
  buscarCidade(cidade)
}