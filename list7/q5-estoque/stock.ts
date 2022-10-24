import Product from "./product";
import PerishableProduct from "./perishableProduct";

export default class Stock{
    private _products: Array<Product> = [];

    constructor(products: Array<Product> = []) {
        this._products = products;
    }
    
    public insert(product: Product): boolean{
        if(this.searchIndex(product.identifier) != -1 || this.searchIndex(product.identifier) != -1){
            return false;
        }
        this._products.push(product);
        return true;
    }

    public searchIndex(identifier: string){
        let index: number = -1;

        for(let i: number = 0; i < this._products.length; i++){
            if(this._products[i].identifier == identifier){
                return i;
            }
        }

        return index;
    }

    public searchIndexByDescription(description: string){
        let index: number = -1;

        for(let i: number = 0; i < this._products.length; i++){
            if(this._products[i].description == description){
                return i;
            }
        }

        return index;
    }

    public consult(identifier: string): Product{
        let index: number = this.searchIndex(identifier);
        let searchedProduct !: Product;
        if(index != -1){
            searchedProduct = this._products[index];
        }

        return searchedProduct;

    }

    public delete(identifier: string){
        let index: number = this.searchIndex(identifier);
        if (index != -1) {
            const indice: number = this.searchIndex(identifier);
            this._products.splice(indice, 1);
            return true;
        }
        return false;
    }

    public writeOff(identifier: string, quantity: number): boolean{
        let product: Product = this.consult(identifier);
        if(product){
            if(product instanceof PerishableProduct){
                (<PerishableProduct> product).writeOff(quantity);
                return true;
            }
            if(product instanceof
                 Product){
                (<Product> product).writeOff(quantity);
                return true;
            }        
        }
        return false;
    }

    public replanish(identifier: string, quantity: number): boolean{
        let product: Product = this.consult(identifier);
        if(product){
            if(product instanceof PerishableProduct){
                (<PerishableProduct> product).replanish(quantity);
                return true;
            }
            if(product instanceof Product){
                (<Product> product).replanish(quantity);
                return true;
            }        
        }
        return false;
    }

    public listProductsInStock(): void{
        for(let product of this._products){
            console.log(product);
        }
    }

}