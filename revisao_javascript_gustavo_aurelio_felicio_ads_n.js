/*
   Atributos a Ser Armazenados nos Objetos Necessários
      Nome;
      Sigla;
      Área;
      População.
   
   Os Dados de Cada Objeto 
      Sergipe = {
         SE,
         21915.08,
         2278308
      };

      Alagoas = {
         AL,
         27848.14,
         3322820
      };

      Rio Grande do Norte = {
         RN,
         52811.05,
         3479010
      };

      Paraíba = {
         PB,
         56469.78,
         3996496
      };

      Pernambuco = {
         PE,
         98148.32,
         9496294
      };
      
      Ceará = {
         CE,
         148920.47,
         9075649
      };
      
      Piauí = {
         PI,
         251577.74,
         3264531
      };
      
      Maranhão = {
         MA,
         331937.45,
         7035055
      };
      
      Bahia = {
         BA,
         564733.18,
         14812617
      };
*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

estadosNe.push(estado1)

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/

// Criando um objeto para armazenar os dados de Alagoas
let estado2 = {
   nome: 'Alagoas',
   sigla: 'AL',
   area: 27848.14,
   populacao: 3322820
}

// Colocando Alagoas no vetor com os estados do Nordeste
// Como é usado o push(), o estado entra no fim do vetor
estadosNe.push(estado2)

// Criando um objeto para armazenar os dados do Rio Grande do Norte
let estado3 = {
   nome: 'Rio Grande do Norte',
   sigla: 'RN',
   area: 52811.05,
   populacao: 3479010
}

// Colocando Rio Grande do Norte no fim do vetor com os estados do Nordeste
estadosNe.push(estado3)

//  Criando um objeto para armazenar os dados da Paraíba
let estado4 = {
   nome: 'Paraíba',
   sigla: 'PB',
   area: 56469.78,
   populacao: 3996496
}

// Colocando Paraíba no fim do vetor com os estados do Nordeste
estadosNe.push(estado4)

// Criando um objeto para armazenar os dados de Pernambuco
let estado5 = {
   nome: 'Pernambuco',
   sigla: 'PE',
   area: 98148.32,
   populacao: 9496294
}

// Colocando Pernambuco no fim do vetor com os estados do Nordeste
estadosNe.push(estado5)

// Criando um objeto para armazenar os dados do Ceará
let estado6 = {
   nome: 'Ceará',
   sigla: 'CE',
   area: 148920.47,
   populacao: 9075649
}

// Colocando Ceará no fim do vetor com os estados do Nordeste
estadosNe.push(estado6)

// Criando um objeto para armazenar os dados do Piauí 
let estado7 = {
   nome: 'Piauí',
   sigla: 'PI',
   area: 251577.74,
   populacao: 3264531
}

// Colocando Piauí no fim do vetor com os estados do Nordeste.
estadosNe.push(estado7)

// Criando um objeto para armazenar os dados do Maranhão
let estado8 = {
   nome: 'Maranhão',
   sigla: 'MA',
   area:331937.45,
   populacao: 7035055
}

// Colocando Maranhão no final do vetor com os estados do NE
estadosNe.push(estado8)

// Criando objeto para armazenar os dados da Bahia
let estado9 = {
   nome: 'Bahia',
   sigla: 'BA',
   area:564733.18,
   populacao: 14812617
}
   
estadosNe.push(estado9)
 
/*
   2) Escreva uma arrow function que receba dois parâmetros,
      área e população, e
      calcule a densidade demográfica
      retornando o resultado da divisão da segunda pela primeira. 
*/

let calculaDensidade = (area, populacao) => populacao/area 

/*
   3) Percorra o vetor estadosNe usando um for tradicional.
      Para cada estado,
      chame a arrow function criada em 2) e
      efetue o cálculo correspondente.
      Com o resultado do cálculo,
      crie uma propriedade chamada
      'densidade demográfica'
      para cada objeto representando um Estado.

      Durante este mesmo loop, 
      elimine a propriedade 'sigla' dos objetos.

*/

// Percorrendo o vetor de estados do Nordeste com um FOR tradicional
for (let i = 0; i < estadosNe.length; i++) {
   // Criando uma propriedade com a densidade demográfica dentro do elemento
   // que está sendo acessado no loop atual
   estadosNe[i]['densidade demográfica'] = calculaDensidade(estadosNe[i].area, estadosNe[i].populacao)

   // Deletando a propriedade sigla do elemento que está sendo acessado no loop atual 
   delete estadosNe[i].sigla 
}

/* 4) Escreva uma arrow function que
      receba um objeto.
      Na função,
      use for..in
      para extrair as propriedades e seus valores e
      exibi-los com console.log().
*/

// definindo uma função para extrair e exibir as propriedades de cada objeto
let extrairPropriedades = (estado) => {
   // iniciando o loop
   for (let atributo in estado)
      // Exibindo os atributos do elemento que está no loop atual
      // com console.log()
      // Usando a anotação com CRASE
      // (TODO: tem um nome específico)
      console.log(`Atributo:${atributo}; valor: ${estado[atributo]}`)
}

/* 5) Percorra o vetor estadosNe
      usando for..of.
      Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.
*/

// Iniciando um loop para percorrer o vetor de estados do Nordeste (estadosNE)
// Para cada elemento no vetor, vamos chamar a função extrairPropriedades,
// Que vai listar o atributo e o seu valor
for (let item of estadosNe) {
   extrairPropriedades(item)
   // Colocando um traço para separar a visualização de cada estado
   console.log('----------')
}



/*
   6) 
      a) Declare um vetor vazio.

      b) Insira no vetor criado no item a)
         apenas o nome de cada Estado,
         conforme os dados no topo deste arquivo, um de cada vez.
         Faça as inserções de modo que
         o vetor final esteja em ordem alfabética.

         No caso, o primeiro Estado (Sergipe),
         pode ser inserido com push(),

         mas o segundo (Alagoas)
         deve ser inserido com unshift(),
         para manter a ordem alfabética.

         O terceiro Estado (Rio Grande do Norte)
         deve ser inserido entre os dois já existentes,

         e assim por diante.
*/

// Criando um vetor vazio.
let vetorNomes = []

// Colocando SERGIPE no vetor de nomes
vetorNomes.push(estadosNe[0].nome) 

// Colocando ALAGOAS no vetor de nomes
vetorNomes.unshift(estadosNe[1].nome)

// Colocando RIO GRANDE DO NORTE no vetor de nomes
vetorNomes.splice(1,0, estadosNe[2].nome)

// Colocando PARAÍBA no vetor de nomes
vetorNomes.splice(1,0, estadosNe[3].nome)

// Colocando PERNAMBUCO no vetor de nomes
vetorNomes.splice(2,0, estadosNe[4].nome)

// Colocando CEARÁ no vetor de nomes
vetorNomes.splice(1,0, estadosNe[5].nome)

// Colocando PIAUÍ no vetor de nomes
vetorNomes.splice(4,0, estadosNe[6].nome)

// Colocando MARANHÃO no vetor de nomes
vetorNomes.splice(2,0, estadosNe[7].nome)

// Colocando BAHIA no vetor de nomes
vetorNomes.splice(1,0, estadosNe[8].nome)

// Mostrando o vetor com os nomes
console.log(vetorNomes)