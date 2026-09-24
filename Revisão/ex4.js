const entrada = require("readline-sync");

for (let i = 0;1 < 4; i++){
    const material ={
    nome: entrada.question(`Nome do ${i+1} o material:\n `),
    quantidade: entrada.questionInt(`Quantidade atual:\n `),
    estoqueMinimo: entrada.questionInt(`Estoque minimo:\n `)
    };
    materiais.push(material);
}
console.log(`--- R#ELATORIO DE ESTOQUE ---`);
for (let i = 0; i< materiais.length; i++){
    const material = materiais[i];

    let situacao ;
    if(material.quantidade < material.estoqueMinimo){
        situacao = "Repor Estoque";
    }else{ 
        situacao = "Estoque OK";
    }
    console.log(`Material: ${material.nome}`)
    console.log(`Quantidade: ${material.quantidade}`)
    console.log(`Estoque Minimo: ${material.estoqueMinimo}`)
    console.log(`Situacao: ${situacao}`)
    console.log("💩".repeat(20));
}
