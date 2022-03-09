import kenzieMovies from "../utils/kenzieMovies.js"
import { Filmes } from "./Filmes.js"

class Interface{
    static body = document.querySelector('body')

    static montaInterface(array){
        let tabela = document.querySelector('table')
        if(tabela){
            tabela.remove()
        }
        const table = document.createElement('table')
        const tr    = document.createElement('tr')
        table.appendChild(tr)

        for(let key in array[0]){
            const th = document.createElement('th')
            th.innerText = key
            tr.appendChild(th)
        }

        array.forEach(filme => {
            const tr = document.createElement('tr')
            table.appendChild(tr)
            for(let key in filme){
                const td = document.createElement('td')
                td.innerText = filme[key]
                tr.appendChild(td)
            }
        });

        this.body.appendChild(table)
    }

    static montaLegenda (set,nome){
        
        let tabela = document.querySelector('table')
        
        if(tabela){
            tabela.remove()
        }

        const p = document.createElement('p')
        const table = document.createElement('table')
        const tr = document.createElement('tr')
        const th = document.createElement('th')

        p.innerText = `${nome} não encontrado na base de dados, insira um dos ${nome}'s da tabela abaixo:`
        th.innerText = nome
        this.body.appendChild(p)
        tr.appendChild(th)
        table.appendChild(tr)
        this.body.appendChild(table)

        set.forEach((value)=>{
            let tr = document.createElement('tr')
            tr.innerText = value
            table.appendChild(tr)
        })   
    }

    static select (event){
        const value = event.target.value
        if(event.target.id === 'ordenar'){
            if(value === 'todos'){
                this.montaInterface(kenzieMovies.filmes)
            }else if (value === 'score'){
                Filmes.ordenaPontuacao()
            }else if (value === 'goodReviews'){
                Filmes.ordenaRevisao(value)
            }
            Filmes.ordenaRevisao(value)
        }
    }

    static filtro (event){
        const btn = event.target
        const select = btn.closest('div').children[1]
        const input = btn.closest('div').children[2]
        if(btn.tagName === "BUTTON"){
            if(select.value === 'genero'){
                Filmes.filtraGenero(input.value)
            }else{
                Filmes.filtraCor    (input.value)
            }
        }
    }
}

export {Interface}