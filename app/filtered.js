
import { getMoviesByWord } from "./connection.js"

const searchBtn = document.querySelector("[data-btn-pesquisa]")
const searchInput = document.querySelector("[data-pesquisa]")

searchBtn.addEventListener("click", (e)=> getMovie(e))

async function getMovie(e){
  e.preventDefault()
  const result = await getMoviesByWord(searchInput.value)
  console.log(result, ">>>>>>>")

  const ulList = document.querySelector("[data-list]")

  if (result.length === 0){
    return ulList.innerHTML = `
    <h2 class="mensagem__titulo"> Busca nao encontrada!</h2>`
  }

  while(ulList.firstChild){
    ulList.removeChild(ulList.firstChild)
  }

  //ulList.innerHTML = ""
  result.forEach((item) => {

  // ulList.appendChild(createCard(item.titulo, item.descricao, item.url, item.imagem))
    ulList.innerHTML += `
      <li classe="videos__item">
        <iframe width="100%" height="72%" src="${item.url}"
          title="${item.titulo}" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <div class="descricao-video">
          <img src="${item.imagem}" alt="logo">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
        </div>
      </li>
    `;
  })
}