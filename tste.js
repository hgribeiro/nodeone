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

for(let i=0; i > student.length; i++ ) {
  console.log(`${student[i].nome}, tem ${student[i].idade}`);
  console.log(`e domina ${student[i].tecnologias.length + 1}, tecnologias,`);
  console.log(`As tecnologias dominadas são: `);
  for (let j; j> student[i].tecnologias.length;j++) {
    console.log(`${i+1}º ${student[i].tecnologias[j].nome}, com especialidade em ${student[i].tecnologias[j].especialidade}!`);
  }
}

