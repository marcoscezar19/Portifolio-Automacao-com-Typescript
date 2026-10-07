// Exercício 3: Condicionais
const statusRespostaHttp: number = 200;

if (statusRespostaHttp === 200) {
  console.log("Status: OK (200)"); // Esperado: Status: OK (200)
} else if (statusRespostaHttp === 404) {
  console.log("Status: Not Found (404)");
} else {
  console.log(`Status não mapeado: ${statusRespostaHttp}`);
}