const form = document.querySelector("[data-formulario]")
import { apiPost } from '../app/connection.js';


async function createMovie(e){
  e.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.ceil(Math.random() * 10000).toString();

  try {
    await apiPost(titulo, descricao, url, imagem)
    window.location.href = "../pages/envio-concluido.html"

  } catch (error) {
    alert("Error: " + error.message)
  }

}

form.addEventListener('submit',(e)=> createMovie(e))