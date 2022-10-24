export default class Product {
    private _identifier: string;
    private _description: string;
    private _quantityProductsInStock: number;
    private _unitValue: number;

    constructor(identifier: string, description: string, quantityProductsInStock: number, unitValue: number) {
        this._identifier = identifier;
        this._description = description;
        this._quantityProductsInStock = quantityProductsInStock;
        this._unitValue = unitValue;
    }

    public writeOff(quantity: number): boolean {
        if (quantity <= this._quantityProductsInStock) {
            this._quantityProductsInStock -= quantity;
            return true;
        }

        return false;
    }

    public replanish(quantity: number): void {
        this._quantityProductsInStock += quantity;
    }


    public get identifier(): string {
        return this._identifier;
    }
    public get description(): string {
        return this._description;
    }

    public get quantityProductsInStock(): number {
        return this._quantityProductsInStock;
    }

    public get unitValue(): number {
        return this._unitValue;
    }

    public set description(newDescription: string) {
        this._description = newDescription;
    }

    public set quantityProductsInStock(newQuantityProductsInStock: number) {
        this._quantityProductsInStock = newQuantityProductsInStock;
    }

    public set unitValue(newUnitValue: number) {
        this._unitValue = newUnitValue;
    }

}

