const kenzieMovies = class {
  static filmes = [];
  static async buscaFilmes() {
    await fetch(`https://m2-api-csv.herokuapp.com/movies`)
      .then((response) => response.json())
      .then((response) => {
        if (!response) {
          alert("Filmes não encontrados, tente novamente.");
          this.filmes = []
          return console.log("Filmes não encontrados, tente novamente.")
        } else {
          this.filmes = response;
        }
      });
  }
};

export default kenzieMovies;