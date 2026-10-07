// Desafio QA: Validação de Bateria de Testes
interface TesteStatus {
  id: number;
  nome: string;
  passou: boolean;
}

const resultados: TesteStatus[] = [
  { id: 1, nome: "Validar login com credenciais válidas", passou: true },
  { id: 2, nome: "Validar campo obrigatório de e-mail", passou: true },
  { id: 3, nome: "Validar tempo de resposta do checkout", passou: false },
  { id: 4, nome: "Validar alteração de senha", passou: true }
];

let falhas = 0;
resultados.forEach((teste) => {
  if (!teste.passou) {
    falhas++;
    console.log(`[ALERTA] Teste falhou: ${teste.nome}`);
  }
});

console.log(`Status da Suíte: ${falhas === 0 ? "APROVADO" : "REPROVADO"}`);
// Esperado: [ALERTA] Teste falhou: Validar tempo de resposta do checkout
// Esperado: Status da Suíte: REPROVADO