const ulList = document.querySelector("[data-list]")

import { apiGet } from './app/connection.js';
apiGet().then((data) => createListMovies(data));

export function createCard(titulo, descricao, url, imagem) {
  const li = document.createElement('li');
  li.className = 'videos__item';
  li.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
      title="${titulo}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div class="descricao-video">
      <img src="${imagem}" alt="logo">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
    </div>
  `;
  return li
}


async function createListMovies(data){
  try {
    ulList.innerHTML = ""
    data.forEach((item)=>{
      ulList.appendChild(createCard(
        item.titulo,
        item.descricao,
        item.url,
        item.imagem
      ))
    })
  } catch (error) {
    ulList.innerHTML = `
    <h2 class="mensagem__titulo"> Carregando...!</h2>
    `;
  }
}
createListMovies()
