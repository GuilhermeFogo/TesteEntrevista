export class Funcionario {
    private readonly nome: string;
    private readonly id: number;
    private readonly dataNasc: Date | string;
    private readonly email: string;
    private readonly habilidade: string;
    private readonly sexo: boolean;
    private readonly ativar: boolean;

    public get Nome() : string {
        return this.nome;
    }

    
    public get Id() : number {
        return this.id;
    }

    
    public get DataNasc() : Date | string {
        return this.dataNasc;
    }

    
    public get Email() : string {
        return this.email;
    }

    
    public get Habilidade() : string {
        return this.habilidade;
    }
    
    
    public get Sexo() : boolean {
        return this.sexo;
    }
    
    
    public get Ativado() : boolean {
        return this.ativar;
    }
    

    constructor({ id, nome, dataNasc, email, habilidade, sexo, ativar }: 
        { id: number, nome: string, dataNasc: Date | string, email: string, habilidade:string, sexo: boolean, ativar: boolean }) {
            this.email = email;
            this.id = id;
            this.nome = nome;
            this.dataNasc = dataNasc;
            this.habilidade = habilidade;
            this.sexo = sexo;
            this.ativar = ativar
    }
}
