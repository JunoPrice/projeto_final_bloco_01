import { Produto } from "./Produto";

export class Vinil extends Produto{

    // Atributo específico da Classe Medicamento
    private _tipoMaterial :string; //O tipo de material do vinil (por exemplo, vinil colorido, vinil transparente, vinil preto clássico).
    
        //Método Construtor
    constructor(id: number, nome: string, tipo: number, preco: number, tipoMaterial : string) {
        super(id, nome, tipo, preco);
        this._tipoMaterial = tipoMaterial;
    }
    
    //Métodos Get e Set
    public get tipoMaterial(): string {
        return this._tipoMaterial;
    }

    public set tipoMaterial(value: string) {
        this._tipoMaterial = value;
    }
    public visualizar(): void {
        super.visualizar();
        console.log("Tipo de Material do Vinil: " + this._tipoMaterial);
    }

}
