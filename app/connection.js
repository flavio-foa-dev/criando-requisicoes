const baseUrl = 'http://localhost:3000/movies'

const apiGet = async () => {
  const result = await fetch(baseUrl);
  return result.json();
};

async function apiPost(titulo, descricao, url, imagem) {
  const result = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      titulo,
      descricao: `${descricao} mil visualizacoes`,
      url,
      imagem
    })
  });
  if (!result.ok){
    throw new Error("nao foi possivel enviar o videos")
  }
  const dataParse = await result.json();
  return dataParse
}

async function getMoviesByWord(word) {
  const dataResult = await fetch(baseUrl + "?q=" + word)
  const dataParse = await dataResult.json();
  return dataParse
}

export {
  apiGet,
  apiPost,
  getMoviesByWord
}
