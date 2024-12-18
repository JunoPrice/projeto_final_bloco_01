import { Produto } from "./Produto";

export class CD extends Produto{

    // Atributo específico da Classe Medicamento
    private _faixaCont: number; //(número de faixas): O número de faixas ou músicas no CD (pode conter faixas bunus)
    
        //Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, faixaCont: number) {
        super(id, nome, tipo, preco);
        this._faixaCont = faixaCont;
    }
    
    //Métodos Get e Set
    public get faixaCont(): number {
        return this._faixaCont;
    }

    public set faixaCont(value: number) {
        this._faixaCont = value;
    }
    public visualizar(): void {
        super.visualizar();
        console.log("Número de faixas do CD: " + this._faixaCont);
    }

}
