class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return `Id: ${this.id} \n \t curtidas: ${this.quantidadeCurtidas}\n\t texto:  ${this.texto}\n`;
    }
}



class MicroBlog {
    postagens: Array<Postagem>;

    constructor() {
        this.postagens = new Array<Postagem>;
    }

    adicionarNovaPostagemNoBlog(...postagens: Array<Postagem>): void {
        this.postagens.push(...postagens);
    }

    encontraIndice(postagemId: number): number {
        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == postagemId) {
                return i;
            }
        }
        return -1;
    }

    excluirPostagem(idPostagem: number) {
        const indice = this.encontraIndice(idPostagem);
        if (this.postagens[indice].id == idPostagem) {
            this.postagens.splice(indice, 1);
        }
    }

    buscarPostagemMaisCurtida(): Array<Postagem> {
        let maior: number = this.postagens[0].quantidadeCurtidas;
        let i: number = 0;
        let indice_maior: number = 0;
        for (i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas > maior) {
                maior = this.postagens[i].quantidadeCurtidas;
                indice_maior = i;
            }
        }
        const post = this.postagens[indice_maior];
        return [post];
    }



    curtir(idPostagem: number): void {
        const indice = this.encontraIndice(idPostagem);
        this.postagens[indice].curtir();
    }

    toString(): string {
        let texto_parcial: string = '';

        for(let i in this.postagens){
            texto_parcial+= this.postagens[i].toString() + ' ';
        }

        return texto_parcial;
    }


}

let microblog1: MicroBlog = new MicroBlog();
let postagem1: Postagem = new Postagem(1, "TypeScript do zero ao 100%");
let postagem2: Postagem = new Postagem(2, "Vagas no IFPI");
let postagem3: Postagem = new Postagem(3, "esse eh um teste");

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


