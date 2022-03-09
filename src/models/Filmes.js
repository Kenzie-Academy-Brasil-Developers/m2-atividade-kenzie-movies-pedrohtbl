import kenzieMovies from "../utils/kenzieMovies.js";
import { Interface } from "./Interface.js";

class Filmes{

    static filtraGenero (genero){
       let set = this.meuSet('genre1')
       let arr = []
       if(set.has(genero.toLowerCase())){
        arr = kenzieMovies.filmes.filter(({genre1}) => genero.toLowerCase() === genre1.toLowerCase())  
        Interface.montaInterface(arr)
       }else{
        Interface.montaLegenda(set,'Genero')
       }  
    }

    static filtraCor (cor){
        let set = this.meuSet('color')
        let arr = []
        if(set.has(cor.toLowerCase())){
            arr = kenzieMovies.filmes.filter(({color}) => cor.toLowerCase() === color.toLowerCase())  
            Interface.montaInterface(arr)
        }else{
            Interface.montaLegenda(set,'Color')
        }
    }

    static ordenaPontuacao(){
        const arr = [...kenzieMovies.filmes]
        arr.sort((a,b) => Number(b.score) - Number(a.score))
        Interface.montaInterface(arr)
    }

    static ordenaRevisao (reviews){
        const arr = [...kenzieMovies.filmes]
        arr.sort((a,b) => Number(b[reviews]) - Number(a[reviews]))
        Interface.montaInterface(arr)
    }

    static meuSet (prop){
        let mySet = new Set()
        kenzieMovies.filmes.forEach(filme =>{
            mySet.add(filme[prop].toLowerCase())
        });    
        return mySet
    }
}

export {Filmes}