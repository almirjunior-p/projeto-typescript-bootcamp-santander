interface Identidade {
    nome: string,
    idade: number,
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro
}

const pessoa1: Identidade = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

const pessoa2: Identidade = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}

const pessoa3: Identidade = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}

const pessoa4: Identidade = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}

console.log(pessoa3.nome)