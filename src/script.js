import kenzieMovies from "./utils/kenzieMovies.js";
import { Interface } from "./models/Interface.js";

const select = document.querySelector('#ordenar')
const filtro = document.querySelector('#filtrar')
const div      = document.querySelector('.filtro')

await kenzieMovies.buscaFilmes();

Interface.montaInterface(kenzieMovies.filmes)

select.addEventListener('change', Interface.select.bind(Interface))

div.addEventListener('click', Interface.filtro)