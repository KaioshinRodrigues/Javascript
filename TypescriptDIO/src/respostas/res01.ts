export {} // Para não reclamar de variáveis duplicadas
let funcionario = {
    codigo: 10,
    nome: "Carlos"
};

let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Marcos'
}

interface Funcionario {   
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Piter';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'Kaique'
}