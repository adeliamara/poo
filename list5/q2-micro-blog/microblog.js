"use strict";
class Postagem {
    constructor(id, texto) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }
    curtir() {
        this.quantidadeCurtidas++;
    }
    toString() {
        return `Id: ${this.id} \n \t curtidas: ${this.quantidadeCurtidas}\n\t texto:  ${this.texto}\n`;
    }
}
class MicroBlog {
    constructor() {
        this.postagens = new Array;
    }
    adicionarNovaPostagemNoBlog(...postagens) {
        this.postagens.push(...postagens);
    }
    encontraIndice(postagemId) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == postagemId) {
                return i;
            }
        }
        return -1;
    }
    excluirPostagem(idPostagem) {
        const indice = this.encontraIndice(idPostagem);
        if (this.postagens[indice].id == idPostagem) {
            this.postagens.splice(indice, 1);
        }
    }
    buscarPostagemMaisCurtida() {
        let maior = this.postagens[0].quantidadeCurtidas;
        let i = 0;
        let indice_maior = 0;
        for (i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas > maior) {
                maior = this.postagens[i].quantidadeCurtidas;
                indice_maior = i;
            }
        }
        const post = this.postagens[indice_maior];
        return [post];
    }
    curtir(idPostagem) {
        const indice = this.encontraIndice(idPostagem);
        this.postagens[indice].curtir();
    }
    toString() {
        let texto_parcial = '';
        for (let i in this.postagens) {
            texto_parcial += this.postagens[i].toString() + ' ';
        }
        return texto_parcial;
    }
}
let microblog1 = new MicroBlog();
let postagem1 = new Postagem(1, "TypeScript do zero ao 100%");
let postagem2 = new Postagem(2, "Vagas no IFPI");
let postagem3 = new Postagem(3, "esse eh um teste");
postagem1.curtir();
postagem2.curtir();
postagem2.curtir();
postagem1.curtir();
postagem1.curtir();
postagem2.curtir();
postagem2.curtir();
microblog1.adicionarNovaPostagemNoBlog(postagem1, postagem2);
microblog1.adicionarNovaPostagemNoBlog(postagem3);
microblog1.curtir(3);
microblog1.curtir(1);
console.log(microblog1.toString());
console.log(microblog1.buscarPostagemMaisCurtida());
