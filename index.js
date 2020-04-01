// This is a obj that has other obj as atribute
const empresa = { 
  nome: "RocketSeat",
  cor: "Roxo",
  foco: "programacao",
  endereco: {
    rua: "rua tal tal tal",
    numero: 123
  }
};

// Now I will print this obj on the cosole

console.log (`O nome da empresa é ${empresa.nome}, a cor é ${empresa.cor} e o endereço é ${empresa.endereco.rua}, número ${empresa.endereco.numero}!`);

const student = 
[{
    nome: 'Hugo',
    idade: 24,
    tecnologias: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' } ]
  },
  {
    nome: 'Higor',
    idade: 24,
    tecnologias: [
    { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    { nome: 'Java', especialidade: 'Web' } ]
  }
];

for (let i=0; i < student.length; i++ ) {
  console.log(`${student[i].nome}, tem ${student[i].idade}`);
  console.log(`e domina ${student[i].tecnologias.length + 1} tecnologias,`);
  console.log(`As tecnologias dominadas são: `);
  for (let j=0; j < student[i].tecnologias.length;j++) {
    console.log(`${j+1}º ${student[i].tecnologias[j].nome}, com especialidade em ${student[i].tecnologias[j].especialidade}!`);
  }
}







