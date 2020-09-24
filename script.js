/** @type {HTMLElement} */
const topFive = document.querySelectorAll(".card");
const listaCompras = document.querySelector(".sacola-carrinho-x");
const listaComprasUltimo = document.querySelector(".sacola-carrinho-x");
let topfilmes = [];
let filmesSacola = [];

/*const filmesGeral = fetch("https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR")
.then(resposta => {
    return resposta.json()
}).then(respostaJson => {
    //    console.log(respostaJson)
    let filmesGlobal=respostaJson.results
    return(filmesGlobal)
})
console.log(filmesGeral)*/

fetch(
  "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR"
)
  .then((resposta) => {
    return resposta.json();
  })
  .then((respostaJson) => {
    //    console.log(respostaJson)
    let filmes = respostaJson.results;
    topfilmes = respostaJson.results;
    //top five

    for (let i = 0; i < 5; i++) {
      let imagem = filmes[i].poster_path;
      let name = filmes[i].title;
      let price = filmes[i].price;
      let rate = filmes[i].vote_average;

      topFive[i].querySelector("img").setAttribute("src", imagem);

      const elementoName = topFive[i].querySelector(".filmex");
      elementoName.innerText = `${name}`;

      const elementoPrice = topFive[i].querySelector(".preco");
      elementoPrice.innerText = `R$ ${price}`;

      const elementoRate = topFive[i].querySelector(".nota");
      elementoRate.innerText = `${rate}`;

      const elmentoButton = topFive[i].querySelector(".card-sacola"); //pegando o id do filme e igualando no botão
      elmentoButton.id = filmes[i].id;
    }
  });

//all movies
const top20 = document.querySelectorAll(".filmes .card");

const todos = document
  .querySelector(".filmes-1-button .todos")
  .addEventListener("click", () =>
    fetch(
      "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR"
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaJson) => {
        let filmes2 = respostaJson.results;

        for (let i = 0; i < 20; i++) {
          let imagem2 = filmes2[i].poster_path;
          let name2 = filmes2[i].title;
          let price2 = filmes2[i].price;
          let rate2 = filmes2[i].vote_average;

          top20[i].querySelector("img").setAttribute("src", imagem2);

          const elementoName = top20[i].querySelector(".filmex");

          if (name2.length > 15) {
            let namex = name2.slice(0, 13) + "...";
            elementoName.innerText = `${namex}`;
          } else {
            elementoName.innerText = `${name2}`;
          }

          const elementoPrice = top20[i].querySelector(".preco");
          elementoPrice.innerText = `R$ ${price2}`;

          const elementoRate = top20[i].querySelector(".nota");
          elementoRate.innerText = `${rate2}`;

          const elmentoButton = top20[i].querySelector(".card-sacola"); //pegando o id do filme e igualando no botão
          elmentoButton.id = filmes2[i].id;
        }
      })
  );

const acao = document
  .querySelector(".filmes-1-button .acao")
  .addEventListener("click", () =>
    fetch(
      `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=28&language=pt-BR`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaJson) => {
        let filmes2 = respostaJson.results;

        for (let i = 0; i < 20; i++) {
          let imagem2 = filmes2[i].poster_path;
          let name2 = filmes2[i].title;
          let price2 = filmes2[i].price;
          let rate2 = filmes2[i].vote_average;

          top20[i].querySelector("img").setAttribute("src", imagem2);

          const elementoName = top20[i].querySelector(".filmex");
          if (name2.length > 15) {
            let namex = name2.slice(0, 13) + "...";
            elementoName.innerText = `${namex}`;
          } else {
            elementoName.innerText = `${name2}`;
          }

          const elementoPrice = top20[i].querySelector(".preco");
          elementoPrice.innerText = `R$ ${price2}`;

          const elementoRate = top20[i].querySelector(".nota");
          elementoRate.innerText = `${rate2}`;
        }
      })
  );

const romance = document
  .querySelector(".filmes-1-button .romance")
  .addEventListener("click", () =>
    fetch(
      `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=10749&language=pt-BR`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaJson) => {
        let filmes2 = respostaJson.results;

        for (let i = 0; i < 20; i++) {
          let imagem2 = filmes2[i].poster_path;
          let name2 = filmes2[i].title;
          let price2 = filmes2[i].price;
          let rate2 = filmes2[i].vote_average;

          top20[i].querySelector("img").setAttribute("src", imagem2);

          const elementoName = top20[i].querySelector(".filmex");
          if (name2.length > 15) {
            let namex = name2.slice(0, 13) + "...";
            elementoName.innerText = `${namex}`;
          } else {
            elementoName.innerText = `${name2}`;
          }

          const elementoPrice = top20[i].querySelector(".preco");
          elementoPrice.innerText = `R$ ${price2}`;

          const elementoRate = top20[i].querySelector(".nota");
          elementoRate.innerText = `${rate2}`;
        }
      })
  );
const scifi = document
  .querySelector(".filmes-1-button .scifi")
  .addEventListener("click", () =>
    fetch(
      `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=878&language=pt-BR`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaJson) => {
        let filmes2 = respostaJson.results;

        for (let i = 0; i < 20; i++) {
          let imagem2 = filmes2[i].poster_path;
          let name2 = filmes2[i].title;
          let price2 = filmes2[i].price;
          let rate2 = filmes2[i].vote_average;

          top20[i].querySelector("img").setAttribute("src", imagem2);

          const elementoName = top20[i].querySelector(".filmex");
          if (name2.length > 15) {
            let namex = name2.slice(0, 13) + "...";
            elementoName.innerText = `${namex}`;
          } else {
            elementoName.innerText = `${name2}`;
          }

          const elementoPrice = top20[i].querySelector(".preco");
          elementoPrice.innerText = `R$ ${price2}`;

          const elementoRate = top20[i].querySelector(".nota");
          elementoRate.innerText = `${rate2}`;
        }
      })
  );

const terro = document
  .querySelector(".filmes-1-button .terro")
  .addEventListener("click", () =>
    fetch(
      `https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=27&language=pt-BR`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((respostaJson) => {
        let filmes2 = respostaJson.results;

        for (let i = 0; i < 20; i++) {
          let imagem2 = filmes2[i].poster_path;
          let name2 = filmes2[i].title;
          let price2 = filmes2[i].price;
          let rate2 = filmes2[i].vote_average;

          top20[i].querySelector("img").setAttribute("src", imagem2);

          const elementoName = top20[i].querySelector(".filmex");
          if (name2.length > 15) {
            let namex = name2.slice(0, 13) + "...";
            elementoName.innerText = `${namex}`;
          } else {
            elementoName.innerText = `${name2}`;
          }

          const elementoPrice = top20[i].querySelector(".preco");
          elementoPrice.innerText = `R$ ${price2}`;

          const elementoRate = top20[i].querySelector(".nota");
          elementoRate.innerText = `${rate2}`;
        }
      })
  );

//carrinho virtual - lógica para selecionar os botões, checar os id dos filmes (variavel) global,
const sacola = document.querySelectorAll(".card-sacola"); //seleciona todos os botões
//console.log(sacola)
sacola.forEach((element) => {
  //iterando em cada botão selecionado
  //console.log(element)
  element.addEventListener("click", (event) => {
    //adicionando o eventlistener
    //        event.target.offsetParent.id --> eh equivalente ao id do botao que foi colocado lá na linha 43
    const idFilme = Number(event.target.offsetParent.id);
    const filtroFilmes = topfilmes.filter((filme) => {
      //retorna um array de true quando o id do filme é igual ao botão
      return filme.id === idFilme;
    });

    const sacolaFilme = filmesSacola.filter((filme) => {
      //verificando se já existe determinando filme selecionado
      return filme.id === idFilme;
    });

    if (sacolaFilme[0]) {
      //se determinado filme já foi selecionado, ele mapeia tal filme e altera apenas a quantidade
      const filmesQtd = filmesSacola.map((filme) => {
        if (filme.id == idFilme) {
          return {
            id: filme.id,
            price: filme.price,
            title: filme.title,
            img: filme.img,
            qtd: filme.qtd + 1,
          };
        }
        return filme;
      });
      filmesSacola = filmesQtd; //alterando a quantidade aqui
    } else {
      const filmeAdicionado = {
        id: filtroFilmes[0].id,
        price: filtroFilmes[0].price,
        title: filtroFilmes[0].title,
        img: filtroFilmes[0].poster_path,
        qtd: 1,
      };

      //se não há determinado filme selecionado, ele dá o push no elemento
      filmesSacola.push(filmeAdicionado);

      let carrinhoV1 = document.querySelector(".sacola .sacola-2");
      let carrinhoV2 = document.querySelector(".sacola .sacola-3");
      let carrinhoV3 = document.querySelector(".sacola .sacola-img");

      if (filmesSacola.length !== 0) {
        carrinhoV1.setAttribute("hidden", true);
        carrinhoV2.setAttribute("hidden", true);
        carrinhoV3.setAttribute("hidden", true);

        let li = document.createElement("li");
        let imagem = document.createElement("img");

        li.setAttribute("id", filmeAdicionado.id);

        imagem.setAttribute("src", filmeAdicionado.img);
        let elementoNome = document.createElement("div");
        elementoNome.innerText = filmeAdicionado.title;
        let elementoPrice = document.createElement("div");
        elementoPrice.innerText = filmeAdicionado.price;


        li.append(imagem);
        li.append(elementoNome);
        li.append(elementoPrice);
        listaComprasUltimo.append(li);
        console.log(listaComprasUltimo);
        console.log(listaCompras);
      } else {
        carrinhoV1.setAttribute("hidden", false);
        carrinhoV2.setAttribute("hidden", false);
      }
    }
  });
});
