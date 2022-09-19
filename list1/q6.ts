//energia, vida, ataque, defesa


class Personagem {
 
    constructor(public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
        ) {}

        showStatus(): string {
            return (
                "\nNome: " +
                this.nome +
                ("\nEnergia: " + this.energia.toFixed(1)) +
                ("\nAtaque: " + this.ataque.toFixed(1)) +
                ("\nDefesa: " + this.defesa.toFixed(1))
            );
        }
        treinarAtaque(): void {
            this.ataque += Math.random() * 10;
            this.energia -= Math.random() * 10;
            if (this.defesa > 100) {
                this.defesa = 0;
            }
        }
        treinarDefesa(): void {
            this.defesa += Math.random() * 5;
            this.energia -= Math.random() * 10;
            if (this.energia < 0) {
                console.log('Ops, voce morreu!')
            }
        }
        descansar(hour: number): void {
            this.energia += hour * (Math.random() * 10);
            if (this.energia > 100) {
                this.energia = 100;
            }
        }
        batalhar(): number {
            let desgaste: number = Math.random() * 100;
            this.energia -= desgaste;
            return desgaste;
        }
        isDead(): boolean {
            return this.energia < 0;
        }
}

let naruto: Personagem;
naruto = new Personagem('Naruto', 100,40,20,20);

console.log(naruto.showStatus());



