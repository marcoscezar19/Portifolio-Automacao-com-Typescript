// Exercício 2: Operadores
const testesPassaram: number = 38;
const testesFalharam: number = 4;
const totalTestes: number = testesPassaram + testesFalharam;
const taxaSucesso: number = (testesPassaram / totalTestes) * 100;

console.log(`Total de testes: ${totalTestes}`); // Esperado: Total de testes: 42
console.log(`Taxa de sucesso: ${taxaSucesso.toFixed(2)}%`); // Esperado: Taxa de sucesso: 90.48%