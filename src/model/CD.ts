import { Produto } from "./Produto";

export class CD extends Produto{

    // Atributo específico da Classe Medicamento
    private _tipoCapa: string; //O tipo de capa do CD (por exemplo, capa em digipack, caixa simples, etc.).
    
        //Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, tipoCapa: string) {
        super(id, nome, tipo, preco);
        this._tipoCapa = tipoCapa;
    }
    
    //Métodos Get e Set
    public get tipoCapa(): string {
        return this._tipoCapa;
    }

    public set tipoCapa(value: string) {
        this._tipoCapa = value;
    }
    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de capa do CD: " + this._tipoCapa);
    }

}
